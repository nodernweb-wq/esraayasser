'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Img({ className = '', priority, fill, ...p }) {
  const [st, setSt] = useState(0);
  const isPriority = !!priority;
  const shown = isPriority || st === 1;

  return (
    <>
      {fill && !isPriority && st === 0 && (
        <span
          aria-hidden
          className="absolute inset-0 animate-pulse bg-black/10"
        />
      )}
      {st !== 3 && (
        <Image
          {...p}
          fill={fill}
          priority={priority}
          className={`${className} ${
            isPriority
              ? 'opacity-100'
              : `transition-opacity duration-500 ${
                  shown ? 'opacity-100' : 'opacity-0'
                }`
          }`}
          onLoad={() => setSt(1)}
          onError={() => setSt(3)}
        />
      )}
    </>
  );
}