import { site } from "@/lib/site";

export const runtime = "nodejs";

const resendApiUrl = "https://api.resend.com/emails";
const senderDomain = `contact.${site.domain}`;
const defaultFromEmail = `Outcraft AI <hello@${senderDomain}>`;

type EngineerApplicationPayload = {
  name?: unknown;
  email?: unknown;
  links?: unknown;
  system?: unknown;
  aiTools?: unknown;
  availability?: unknown;
  company?: unknown;
};

export async function POST(request: Request) {
  let payload: EngineerApplicationPayload;

  try {
    payload = (await request.json()) as EngineerApplicationPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = normalize(payload.name);
  const email = normalize(payload.email);
  const links = normalize(payload.links);
  const system = normalize(payload.system);
  const aiTools = normalize(payload.aiTools);
  const availability = normalize(payload.availability);
  const company = normalize(payload.company);

  if (company) {
    return Response.json({ ok: true });
  }

  if (name.length < 2) {
    return Response.json(
      { error: "Please enter your name." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }

  if (system.length < 20) {
    return Response.json(
      { error: "Please describe a production system you owned." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const from = getFromEmail();
  const subject = `Outcraft AI engineer application from ${name}`;
  const text = [
    "New Outcraft AI engineer application",
    "",
    "Name",
    name,
    "",
    "Email",
    email,
    "",
    "Links",
    links || "Not provided",
    "",
    "System they are proudest of",
    system,
    "",
    "AI tools",
    aiTools || "Not provided",
    "",
    "Availability and rate",
    availability || "Not provided",
  ].join("\n");
  const html = `
    <h2>New Outcraft AI engineer application</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Links:</strong> ${escapeHtml(links || "Not provided")}</p>
    <p><strong>AI tools:</strong> ${escapeHtml(aiTools || "Not provided")}</p>
    <p><strong>Availability and rate:</strong> ${escapeHtml(
      availability || "Not provided",
    )}</p>
    <p><strong>System they are proudest of:</strong></p>
    <p>${escapeHtml(system).replace(/\n/g, "<br />")}</p>
  `;

  const response = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [site.teamPlanEmail],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const error = (await response.json().catch(() => null)) as {
      message?: string;
      name?: string;
      statusCode?: number;
    } | null;
    console.error("Resend engineer application email failed", {
      status: response.status,
      name: error?.name,
      message: error?.message,
    });

    const resendMessage = error?.message ?? "";

    if (response.status === 403 && resendMessage.toLowerCase().includes("domain is not verified")) {
      return Response.json(
        {
          error: `Email sender domain is not verified in Resend yet. Verify ${senderDomain} in Resend, then try again.`,
        },
        { status: 502 },
      );
    }

    return Response.json(
      {
        error: resendMessage
          ? `Email provider rejected the send: ${resendMessage}`
          : "Could not send the application. Please try again.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 5000) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getFromEmail() {
  const configured = process.env.RESEND_FROM_EMAIL?.trim();

  if (!configured) {
    return defaultFromEmail;
  }

  if (
    (configured.startsWith('"') && configured.endsWith('"')) ||
    (configured.startsWith("'") && configured.endsWith("'"))
  ) {
    return configured.slice(1, -1).trim();
  }

  return configured;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
