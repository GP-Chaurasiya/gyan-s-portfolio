import { Code2, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    let current = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && window.scrollY + 100 >= el.offsetTop) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-nav"
          : "bg-card/80 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("home");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
          data-ocid="nav.logo_link"
          aria-label="Go to top"
        >
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-elevated">
            <Code2 className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-foreground group-hover:text-primary transition-smooth text-base tracking-tight">
            Gyan Prakash
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1"
          data-ocid="nav.desktop_links"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-smooth relative ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          data-ocid="nav.mobile_menu_toggle"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden bg-card border-t border-border animate-slide-up"
          data-ocid="nav.mobile_menu"
        >
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-smooth ${
                    isActive
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
