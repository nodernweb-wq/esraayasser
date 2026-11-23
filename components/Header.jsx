import MobileMenu from "./MobileMenu";
import { SITE, NAV, HERO, wa } from "@/data/site";
export default function Header() {
  return (
    <div className="nav-in sticky top-0 z-50 bg-cream/90 backdrop-blur">
      <div className="relative mx-auto flex h-[var(--nav)] max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-lg font-extrabold tracking-tight"
        >
          <i className="h-2.5 w-2.5 rounded-full bg-brand" />
          {SITE.name}
        </a>
        <nav
          aria-label="Main"
          className="hidden items-center gap-8 text-sm font-semibold text-mute lg:flex"
        >
          {NAV.slice(1).map(([t, h]) => (
            <a key={h} href={h} className="transition hover:text-brand">
              {t}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={wa(HERO.msg)}
            rel="noopener"
            className="btn btn-brand hidden !py-2.5 lg:inline-flex"
          >
            {HERO.cta2}
          </a>
          <MobileMenu links={NAV} />
        </div>
      </div>
    </div>
  );
}
