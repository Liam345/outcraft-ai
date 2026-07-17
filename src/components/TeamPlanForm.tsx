"use client";

type TeamPlanFormProps = {
  recipient: string;
};

export function TeamPlanForm({ recipient }: TeamPlanFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const brief = String(formData.get("brief") ?? "").trim();
    const stack = String(formData.get("stack") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = "Outcraft AI team plan";
    const body = [
      "What are you building?",
      brief,
      "",
      "Current stack",
      stack || "Not provided",
      "",
      "Work email",
      email,
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
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
        className="mt-6 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-bone"
      >
        Email me the brief
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        Opens a prefilled email to {recipient}.
      </p>
    </form>
  );
}
