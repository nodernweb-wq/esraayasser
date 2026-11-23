'use client';
import { useState, useRef } from 'react';
import Img from './ui/Img';
import SnapRow from './SnapRow';
import SecHead from './ui/SecHead';
import { REVIEWS as r } from '@/data/site';

function Card({ t, onShot }) {
  return (
    <li className="reveal w-[88%] shrink-0 snap-center sm:w-[46%] lg:w-[calc(33.333%-11px)]">
      <article className="nb overflow-hidden rounded-3xl bg-white p-2.5">
        <button
          type="button"
          onClick={() => onShot(t)}
          aria-label={`View screenshot — ${t.name}, ${t.brand}`}
          className="group relative block w-full overflow-hidden rounded-2xl text-start"
        >
          <Img
            src={t.shot}
            alt={`Chat screenshot — ${t.name}, ${t.brand}`}
            width={900}
            height={1600}
            loading="lazy"
            sizes="(min-width:1024px) 30vw,(min-width:768px) 46vw,88vw"
            className="block h-auto w-full transition duration-500 group-hover:scale-[1.02]"
          />
          <span className="pointer-events-none absolute bottom-2.5 end-2.5 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
            {r.view} ↗
          </span>
        </button>
      </article>
    </li>
  );
}

export default function Reviews() {
  const d = useRef(null);
  const [s, setS] = useState(null);

  return (
    <section
      id="reviews"
      aria-labelledby="rev-h"
      className="mx-auto max-w-6xl px-5 py-14 md:py-20"
    >
      <SecHead id="rev-h" label={r.label} title={r.title} sub={r.sub} />
      <SnapRow
        n={r.items.length}
        hint={r.hint}
        dotsClass="lg:hidden"
        className="lg:mx-0 lg:px-0 lg:overflow-visible lg:flex-wrap"
      >
        {r.items.map((t, i) => (
          <Card
            key={i}
            t={t}
            onShot={(x) => {
              setS(x);
              d.current?.showModal();
            }}
          />
        ))}
      </SnapRow>
      <dialog
        ref={d}
        onClick={(e) => e.target === d.current && d.current.close()}
        onClose={() => setS(null)}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        {s && (
          <div className="relative">
            <Img
              src={s.shot}
              alt={`Chat screenshot — ${s.name}, ${s.brand}`}
              width={1200}
              height={2000}
              sizes="92vw"
              className="h-auto max-h-[88svh] w-auto max-w-[92vw] rounded-2xl object-contain"
            />
            <button
              type="button"
              onClick={() => d.current.close()}
              aria-label="Close"
              className="absolute -top-3 end-0 grid h-9 w-9 place-items-center rounded-full bg-brand text-white"
            >
              ✕
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}