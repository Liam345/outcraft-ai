import { site } from "@/lib/site";

export const runtime = "nodejs";

const resendApiUrl = "https://api.resend.com/emails";
const senderDomain = `contact.${site.domain}`;
const defaultFromEmail = `Outcraft AI <hello@${senderDomain}>`;

type TeamPlanPayload = {
  brief?: unknown;
  stack?: unknown;
  email?: unknown;
  company?: unknown;
};

export async function POST(request: Request) {
  let payload: TeamPlanPayload;

  try {
    payload = (await request.json()) as TeamPlanPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const brief = normalize(payload.brief);
  const stack = normalize(payload.stack);
  const email = normalize(payload.email);
  const company = normalize(payload.company);

  if (company) {
    return Response.json({ ok: true });
  }

  if (brief.length < 10) {
    return Response.json(
      { error: "Please describe what you are building." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return Response.json(
      { error: "Please enter a valid work email." },
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

  const from = process.env.RESEND_FROM_EMAIL ?? defaultFromEmail;
  const subject = `Outcraft AI team plan request from ${email}`;
  const text = [
    "New Outcraft AI team plan request",
    "",
    "What are they building?",
    brief,
    "",
    "Current stack",
    stack || "Not provided",
    "",
    "Work email",
    email,
  ].join("\n");
  const html = `
    <h2>New Outcraft AI team plan request</h2>
    <p><strong>Work email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Current stack:</strong> ${escapeHtml(stack || "Not provided")}</p>
    <p><strong>What are they building?</strong></p>
    <p>${escapeHtml(brief).replace(/\n/g, "<br />")}</p>
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
    console.error("Resend team plan email failed", {
      status: response.status,
      name: error?.name,
      message: error?.message,
    });

    if (
      response.status === 403 &&
      error?.message?.toLowerCase().includes("domain is not verified")
    ) {
      return Response.json(
        {
          error: `Email sender domain is not verified in Resend yet. Verify ${senderDomain} in Resend, then try again.`,
        },
        { status: 502 },
      );
    }

    return Response.json(
      { error: "Could not send the email. Please try again." },
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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
