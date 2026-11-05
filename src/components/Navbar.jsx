import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { DEMO_MAILTO, NAV_LINKS } from "../data/content";
import { trackEvent } from "../lib/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const requestDemo = () => trackEvent("Lead", { content_name: "Request a demo" });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-2" aria-label="Fuel Flow home">
          <img src="/logo.png" alt="" width="32" height="32" className="h-8 w-8" />
          <span className="text-lg font-extrabold text-forest">Fuel Flow</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-body hover:text-forest">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={DEMO_MAILTO}
          onClick={requestDemo}
          className="hidden rounded-lg bg-forest px-5 py-2.5 text-sm font-bold text-white hover:bg-forest-soft md:inline-flex"
        >
          Request a Demo
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg p-2 text-forest md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-sage-line bg-white px-5 py-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="font-semibold text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={DEMO_MAILTO}
            onClick={requestDemo}
            className="mt-5 flex justify-center rounded-lg bg-forest px-5 py-3 font-bold text-white"
          >
            Request a Demo
          </a>
        </div>
      )}
    </header>
  );
}
