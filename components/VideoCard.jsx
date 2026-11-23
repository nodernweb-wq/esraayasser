"use client";
import { useState } from "react";
import Img from "./ui/Img";
import Icon from "./ui/Icon";
// Click-to-play: nothing heavy loads until play is pressed (keeps LCP/INP clean).
export default function VideoCard({ v }) {
  const [on, setOn] = useState(false),
    [busy, setBusy] = useState(false);
  return (
    <figure className="reveal group">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border-2 border-ink bg-ink">
        {on ? (
          <video
            src={v.src}
            poster={v.poster}
            autoPlay
            controls
            controlsList="nodownload"
            disablePictureInPicture
            playsInline
            preload="auto"
            onContextMenu={(e) => e.preventDefault()}
            onPlaying={() => setBusy(false)}
            onWaiting={() => setBusy(true)}
            onEnded={() => setOn(false)}
            className="absolute inset-0 h-full w-full bg-black object-cover"
          />
        ) : (
          <>
            <Img
              src={v.poster}
              alt={v.title}
              fill
              loading="lazy"
              sizes="(min-width:1024px) 25vw,(min-width:768px) 33vw,50vw"
              className="object-cover transition duration-1000 group-hover:scale-105"
            />
            <span className="absolute start-2.5 top-2.5 rounded-md bg-ink/85 px-2 py-1 text-[9px] font-bold tracking-widest text-white">
              {v.tag}
            </span>
            <button
              type="button"
              onClick={() => {
                setOn(true);
                setBusy(true);
              }}
              aria-label={`Play: ${v.title}`}
              className="absolute inset-0 grid place-items-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lg ring-4 ring-white/30 transition duration-500 group-hover:scale-110">
                <Icon n="play" className="ms-0.5 h-5 w-5" />
              </span>
            </button>
          </>
        )}
        {on && busy && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 m-auto h-10 w-10 animate-spin rounded-full border-[3px] border-white/30 border-t-brand"
          />
        )}
      </div>
      {v.views ? (
        <figcaption className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-mute">
          <Icon n="eye" className="h-3.5 w-3.5 text-brand" />
          {v.views}
          <span className="sr-only"> — {v.title}</span>
        </figcaption>
      ) : (
        <figcaption className="sr-only">{v.title}</figcaption>
      )}
    </figure>
  );
}
