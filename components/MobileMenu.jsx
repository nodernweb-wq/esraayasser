'use client';
import {useState,useEffect} from 'react';import Icon from './ui/Icon';
export default function MobileMenu({links}){const [o,setO]=useState(false);
useEffect(()=>{if(!o)return;const k=e=>e.key==='Escape'&&setO(false);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[o]);
return(<div className="lg:hidden"><button type="button" aria-expanded={o} aria-controls="mnav" aria-label="Menu" onClick={()=>setO(!o)} className="grid h-10 w-10 place-items-center rounded-xl border-2 border-ink bg-white transition active:scale-95"><Icon n={o?'close':'menu'} className="h-5 w-5"/></button>
<nav id="mnav" aria-label="Menu" inert={!o} className={`absolute inset-x-3 top-full z-40 rounded-2xl border-2 border-ink bg-white p-2 shadow-[4px_4px_0_0_#f7ccd5] transition duration-300 ease-out ${o?'translate-y-0 opacity-100':'pointer-events-none -translate-y-3 opacity-0'}`}><ul>{links.map(([t,h])=><li key={h}><a href={h} onClick={()=>setO(false)} className="block rounded-xl px-4 py-3 font-semibold transition hover:bg-blush hover:text-brand">{t}</a></li>)}</ul></nav></div>)}
