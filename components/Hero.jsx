import Img from "./ui/Img";
import Icon from "./ui/Icon";
import { HERO as h, wa } from "@/data/site";

const d = (s) => ({ "--d": s });

export default function Hero() {
  return (
    <header
      id="top"
      className="mx-auto flex h-[calc(100svh-var(--nav))] min-h-[500px] w-full max-w-7xl flex-col gap-3 px-3 pb-3 lg:px-6"
    >
      <div className="relative isolate min-h-0 flex-1 overflow-hidden rounded-[28px] border-2 border-ink bg-ink text-white lg:grid lg:grid-cols-[1.05fr_.95fr] lg:rounded-[36px]">
        <div className="absolute inset-0 lg:relative lg:order-2">
          <div className="absolute inset-0">
            <Img
              src={h.img}
              alt={h.alt}
              fill
              priority
              fetchPriority="high"
              quality={75}
              sizes="(min-width:1024px) 50vw,100vw"
              className="object-cover object-[50%_18%]"
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent lg:hidden"
          />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-5 sm:gap-4 sm:p-8 lg:justify-center lg:gap-6 lg:p-14">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 hidden bg-[radial-gradient(ellipse_70%_60%_at_20%_100%,rgba(239,95,124,.28),transparent_70%)] lg:block"
          />
          <span
            className="from-l inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-[.16em] backdrop-blur"
            style={d(".15s")}
          >
            <i className="h-1.5 w-1.5 rounded-full bg-brand" />
            {h.chip}
          </span>
          <h1
            className="from-l text-[clamp(1.5rem,6.4vw,2.2rem)] font-extrabold leading-[1.15] tracking-tight lg:text-[clamp(2.4rem,4.3vw,4.2rem)] lg:leading-[1.08]"
            style={d(".25s")}
          >
            {h.title} <span className="text-brand">{h.accent}</span>
          </h1>
          <p
            className="from-r max-w-xl text-[13px] leading-6 text-white/80 sm:text-base sm:leading-7"
            style={d(".35s")}
          >
            {h.text}
          </p>
          <div
            className="from-r flex flex-wrap gap-2.5 sm:gap-3"
            style={d(".45s")}
          >
            <a
              href="#work"
              className="btn btn-brand flex-1 !px-4 text-[10px] sm:flex-none sm:text-sm"
            >
              {h.cta1}
              <Icon n="down" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a
              href={wa(h.msg)}
              rel="noopener"
              className="btn flex-1 bg-white !px-4 text-[10px] text-ink sm:flex-none sm:text-sm"
            >
              <Icon
                n="whatsapp"
                className="h-3.5 w-3.5 text-[#25d366] sm:h-4 sm:w-4"
              />
              {h.cta2}
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        aria-label="Scroll down"
        className="fade-u flex shrink-0 items-center justify-center gap-2 py-1 text-[10px] font-bold tracking-[.25em] text-mute"
        style={d(".6s")}
      >
        {h.scroll}
        <Icon n="chev" className="bob h-3.5 w-3.5" />
      </a>
    </header>
  );
}