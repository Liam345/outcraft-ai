import Link from "next/link";
import Image from "next/image";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-line ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.02em] text-balance md:text-5xl">
      {children}
    </h2>
  );
}

export function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
      {children}
    </p>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-ember text-ink hover:bg-bone"
      : "border border-line text-bone hover:border-bone";
  const calEmbed = getCalEmbedProps(href);
  const className = `${base} ${styles}`;

  if (calEmbed) {
    return (
      <button type="button" className={className} {...calEmbed}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function getCalEmbedProps(href: string) {
  try {
    const url = new URL(href);

    if (url.hostname !== "cal.com" || !url.searchParams.has("overlayCalendar")) {
      return null;
    }

    const calLink = url.pathname.replace(/^\/+/, "");
    const parts = calLink.split("/");
    const namespace = parts[parts.length - 1];

    return {
      "data-cal-link": calLink,
      "data-cal-namespace": namespace,
      "aria-label": "Open Cal.com scheduling modal",
      "data-cal-config": JSON.stringify({
        layout: "month_view",
        theme: "dark",
      }),
    };
  } catch {
    return null;
  }
}

export function LogoMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <Image
      src="/outcraft_ai_logo_ember_radial.svg"
      alt=""
      width={1024}
      height={1024}
      className={`block shrink-0 object-contain ${className}`}
      unoptimized
    />
  );
}
