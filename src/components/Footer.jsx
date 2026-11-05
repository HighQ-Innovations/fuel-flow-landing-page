import { NAV_LINKS, SIGN_IN_URL } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-sage-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <a href="/" className="flex items-center gap-2" aria-label="Fuel Flow home">
            <img src="/logo.png" alt="" width="28" height="28" className="h-7 w-7" />
            <span className="font-extrabold text-forest">Fuel Flow</span>
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium text-body">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-forest">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={SIGN_IN_URL} className="hover:text-forest">
                  Sign in
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-sage-line pt-6 text-xs text-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Fuel Flow. All rights reserved.</p>
          <p>Daily records for filling stations.</p>
        </div>
      </div>
    </footer>
  );
}
