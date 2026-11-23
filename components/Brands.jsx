import Img from "./ui/Img";
import { BRANDS as b } from "@/data/site";

export default function Brands() {
  // نكرر العناصر بحيث المجموعة الواحدة تغطي عرض الشاشات الواسعة بالكامل
  const count = Math.max(24, b.items.length * 8);
  const groupItems = Array.from(
    { length: count },
    (_, i) => b.items[i % b.items.length]
  );

  return (
    <section aria-label="Brands and creators" className="overflow-hidden py-9">
      <p className="mb-5 text-center text-[11px] font-bold tracking-[.22em] text-mute">
        {b.label}
      </p>
      <p className="sr-only">{b.items.map((i) => i.name).join(", ")}</p>

      <div className="mask-x overflow-hidden" aria-hidden="true">
        <div className="marquee flex w-max">
          {[0, 1].map((group) => (
            <ul key={group} className="flex shrink-0 items-center gap-4 pe-4">
              {groupItems.map((item, k) => (
                <li
                  key={`${group}-${k}`}
                  className={`relative h-11 w-11 shrink-0 overflow-hidden border border-line bg-white ${
                    item.round ? "rounded-full" : "rounded-xl"
                  }`}
                >
                  <Img
                    src={item.img}
                    alt=""
                    width={88}
                    height={88}
                    loading="eager"
                    className="h-full w-full object-cover"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}