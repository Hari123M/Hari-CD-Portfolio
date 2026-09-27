const links = [
  { href: "#work", label: "Work" },
  { href: "#check", label: "How I work" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between text-[15px] font-medium sm:text-[17px]">
      <a href="#top" className="bg-signal px-2 py-1 text-signal-foreground">
        Hari Mahendra
      </a>
      <nav className="hidden gap-1.5 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="bg-background px-2 py-1 text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="bg-foreground px-2 py-1 text-background transition-colors hover:bg-signal hover:text-signal-foreground"
      >
        Contact
      </a>
    </header>
  );
}
