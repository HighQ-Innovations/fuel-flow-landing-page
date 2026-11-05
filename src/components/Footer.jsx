import { NAV_LINKS, SIGN_IN_URL } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
        <a href="#top" className="flex items-center gap-2">
          <img src="/logo.png" alt="" className="h-8 w-8" />
          <span className="font-extrabold text-brand-deep">Fuel Flow</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-ink/70 hover:text-brand-deep">
              {link.label}
            </a>
          ))}
          <a href={SIGN_IN_URL} className="text-sm font-semibold text-ink/70 hover:text-brand-deep">
            Sign in
          </a>
        </nav>

        <p className="text-sm text-ink/50">© {new Date().getFullYear()} Fuel Flow. All rights reserved.</p>
      </div>
    </footer>
  );
}
