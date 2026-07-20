"use client";

import { useState } from "react";

type SubmissionState = "idle" | "sending" | "sent" | "error";

export function TeamPlanForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    let response: Response;

    try {
      response = await fetch("/api/team-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brief: formData.get("brief"),
          stack: formData.get("stack"),
          email: formData.get("email"),
          company: formData.get("company"),
        }),
      });
    } catch {
      setSubmissionState("error");
      setMessage("Could not send the brief. Please try again.");
      return;
    }

    const result = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;

    if (!response.ok) {
      setSubmissionState("error");
      setMessage(result?.error ?? "Could not send the brief. Please try again.");
      return;
    }

    form.reset();
    setSubmissionState("sent");
    setMessage("Brief sent. I will reply with a practical team plan.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-ink-2 p-6 md:p-8"
    >
      <label className="block text-sm font-medium text-bone" htmlFor="brief">
        What are you building?
      </label>
      <textarea
        id="brief"
        name="brief"
        rows={6}
        required
        placeholder="Example: We need to ship an AI support agent inside our existing Next.js app."
        className="mt-3 w-full resize-y rounded-xl border border-line bg-ink p-4 text-sm leading-relaxed text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
      />

      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        name="company"
        tabIndex={-1}
      />

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-bone" htmlFor="stack">
            Current stack
          </label>
          <input
            id="stack"
            name="stack"
            placeholder="Next.js, Python, AWS..."
            className="mt-3 w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-bone" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-3 w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submissionState === "sending"}
        className="mt-6 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-bone disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submissionState === "sending" ? "Sending..." : "Email me the brief"}
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        Sends directly to Outcraft AI. No mail app needed.
      </p>
      {message ? (
        <p
          className={`mt-4 text-center text-sm leading-relaxed ${
            submissionState === "error" ? "text-ember" : "text-bone"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
