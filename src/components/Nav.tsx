import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "./ui";

const links = [
  { href: "#bar", label: "Our bar" },
  { href: "#how", label: "How it works" },
  { href: "#founder", label: "Who's behind it" },
  { href: "#pricing", label: "Pricing" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="block h-4 w-4 rotate-45 rounded-[3px] bg-ember" />
          <span className="text-[15px] font-medium tracking-[-0.01em]">
            Outcraft <span className="text-muted">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-bone"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Button href={site.bookingUrl}>Book a scoping call</Button>
      </div>
    </header>
  );
}
