"use client";

import { useState } from "react";

type SubmissionState = "idle" | "sending" | "sent" | "error";

export function EngineerApplicationForm() {
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
      response = await fetch("/api/engineer-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          links: formData.get("links"),
          system: formData.get("system"),
          aiTools: formData.get("ai-tools"),
          availability: formData.get("availability"),
          company: formData.get("company"),
        }),
      });
    } catch {
      setSubmissionState("error");
      setMessage("Could not send the application. Please try again.");
      return;
    }

    const result = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;

    if (!response.ok) {
      setSubmissionState("error");
      setMessage(
        result?.error ?? "Could not send the application. Please try again.",
      );
      return;
    }

    form.reset();
    setSubmissionState("sent");
    setMessage("Application sent. I will review it directly.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-ink p-6 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-bone" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-3 w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-bone" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-3 w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
          />
        </div>
      </div>

      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        name="company"
        tabIndex={-1}
      />

      <div className="mt-5">
        <label className="block text-sm font-medium text-bone" htmlFor="links">
          Links
        </label>
        <input
          id="links"
          name="links"
          placeholder="LinkedIn, GitHub, personal site, code sample"
          className="mt-3 w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
        />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-bone" htmlFor="system">
          System you are proudest of
        </label>
        <textarea
          id="system"
          name="system"
          rows={6}
          required
          placeholder="What did you own, what could go wrong, and what decision would you defend hardest?"
          className="mt-3 w-full resize-y rounded-xl border border-line bg-ink-2 p-4 text-sm leading-relaxed text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
        />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            className="block text-sm font-medium text-bone"
            htmlFor="ai-tools"
          >
            AI tools
          </label>
          <input
            id="ai-tools"
            name="ai-tools"
            placeholder="Claude Code, Codex, Cursor..."
            className="mt-3 w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-bone"
            htmlFor="availability"
          >
            Availability and rate
          </label>
          <input
            id="availability"
            name="availability"
            placeholder="20 hrs/week, full-time, day rate..."
            className="mt-3 w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus:border-ember"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submissionState === "sending"}
        className="mt-6 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-bone disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submissionState === "sending" ? "Sending..." : "Email application"}
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
