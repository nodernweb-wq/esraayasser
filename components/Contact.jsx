import Icon from "./ui/Icon";
import { CONTACT as c, SITE, wa } from "@/data/site";
const Row = ({ href, icon, bg, tag, title, sub, ext }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="nb group flex items-center gap-4 rounded-2xl bg-white p-4 text-start transition duration-300 hover:-translate-y-1"
  >
    <span
      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white ${bg}`}
    >
      <Icon n={icon} className="h-6 w-6" />
    </span>
    <span className="min-w-0 flex-1">
      <span className="block text-[10px] font-bold tracking-[.2em] text-brand">
        {tag}
      </span>
      <b className="block">{title}</b>
      <span className="block truncate text-xs text-mute">{sub}</span>
    </span>
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink transition duration-300 group-hover:bg-brand group-hover:text-white">
      <Icon n="out" className="h-4 w-4" />
    </span>
  </a>
);
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-h"
      className="mx-auto max-w-4xl px-4 pb-14 pt-6 md:pb-20"
    >
      <div className="reveal nb rounded-[28px] bg-blush px-5 py-9 text-center md:px-10 md:py-14">
        <span className="inline-block rounded-full border border-brand bg-white px-4 py-1.5 text-[11px] font-bold tracking-widest text-brand">
          {c.pill}
        </span>
        <h2 id="contact-h" className="title mx-auto mt-5 max-w-xl">
          {c.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink/70 md:text-base">
          {c.sub}
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <Row
            href={wa(c.wa.msg)}
            icon="whatsapp"
            bg="bg-[#25d366]"
            tag={c.wa.tag}
            title={c.wa.title}
            sub={c.wa.sub}
          />
          <Row
            href={SITE.instagram.url}
            icon="instagram"
            bg="bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]"
            tag={c.ig.tag}
            title={c.ig.title}
            sub={SITE.instagram.handle}
          />
        </div>
      </div>
    </section>
  );
}
