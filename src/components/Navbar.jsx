import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SIGN_IN_URL } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2" onClick={closeMenu}>
          <img src="/logo.png" alt="" className="h-9 w-9" />
          <span className="text-xl font-extrabold text-brand-deep">
            Fuel Flow
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/80 hover:text-brand-deep"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SIGN_IN_URL}
            className="rounded-xl px-4 py-2 text-sm font-bold text-brand-deep hover:bg-brand-50"
          >
            Sign in
          </a>
          <a
            href={SIGN_IN_URL}
            className="rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-dark"
          >
            Get started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg p-2 text-brand-deep md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-semibold text-ink"
              >
                {link.label}
              </a>
            ))}
            <a href={SIGN_IN_URL} className="font-semibold text-brand-deep">
              Sign in
            </a>
            <a
              href={SIGN_IN_URL}
              className="rounded-xl bg-brand px-5 py-3 text-center font-bold text-white"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
