import {SITE,ABOUT,WORK,wa} from '@/data/site';
export function GET(){const t=`# ${SITE.name}\n> ${SITE.description}\n\nRole: ${SITE.role}\nSite: ${SITE.url}\nInstagram: ${SITE.instagram.url}\nWhatsApp: ${wa('')}\n\n## About\n${ABOUT.text}\n\n## Services\n${ABOUT.services.map(s=>`- ${s.title}: ${s.text}`).join('\n')}\n\n## Selected work\n${WORK.items.map(i=>`- ${i.title} (${i.cat})`).join('\n')}\n`;
return new Response(t,{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=3600'}})}
