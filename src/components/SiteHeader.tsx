import Link from "next/link";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "For clients", href: "#for-clients" },
  { label: "For freelancers", href: "#for-freelancers" },
];

export default function SiteHeader() {
  return (
    <header className="relative z-10 w-full px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto grid grid-cols-3 w-full max-w-7xl rounded-md border border-[#f0a500]/20 bg-[#11100e]/70 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:px-5">
        <a className="flex items-center gap-3" href="/">
          <span className="text-sm font-bold tracking-[0.08em] text-[#f0a500]">
            FREELANCE<span className="text-[#e8e0d0]">/ESCROW</span>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center justify-between gap-1 rounded-sm border border-[#37322a] bg-[#0a0a0a]/50 p-1 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              className="rounded-sm px-4 py-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[#a39c8c] transition-colors hover:bg-[#252019] hover:text-[#ffcc44]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="justify-self-end">
          <Link
            className="rounded-sm border border-[#f0a500]/60 px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#ffcc44] transition-colors hover:border-[#ffcc44] hover:bg-[#f0a500]/10 sm:px-4"
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
