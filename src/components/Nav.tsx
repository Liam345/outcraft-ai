import Link from "next/link";
import { site } from "@/lib/site";
import { Button, LogoMark } from "./ui";

const homeLinks = [
  { href: "#bar", label: "Bar" },
  { href: "#team-plan", label: "Team plan" },
  { href: "#roles", label: "Roles" },
  { href: "#how", label: "How it works" },
  { href: "#founder", label: "Founder" },
  { href: "#pricing", label: "Pricing" },
];

const engineerLinks = [
  { href: "/#roles", label: "For companies" },
  { href: "#why", label: "Why join" },
  { href: "#bar", label: "The bar" },
  { href: "#apply", label: "Apply" },
];

export function Nav({ context = "home" }: { context?: "home" | "engineers" }) {
  const links = context === "engineers" ? engineerLinks : homeLinks;
  const cta =
    context === "engineers"
      ? {
          href: `mailto:${site.founder.email}?subject=Engineer%20application`,
          label: "Apply",
        }
      : { href: site.bookingUrl, label: "Get a 30-min velocity audit" };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="h-8 w-8" />
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

        <Button href={cta.href}>{cta.label}</Button>
      </div>
    </header>
  );
}
