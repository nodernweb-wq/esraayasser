export const SITE = {
  name: "Esraa Yasser",
  role: "UGC Content Creator, Video Editor & AI Visuals Creator",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL
      : "http://localhost:3000"),
  whatsapp: "201103239622",
  instagram: {
    handle: "",
    url: "https://www.instagram.com/esraa.contentcreator?jplx=MWRub25xY3FlaXZybA%3D%3D&utm_source=qr",
  },
  country: "",
  title: "Esraa Yasser | UGC Content Creator, Video Editor & AI Visuals",
  description:
    "Esraa Yasser is a UGC content creator and video editor making scroll-stopping product reviews, lifestyle videos and high-retention edits that turn attention into sales — plus AI-generated video. Ex-marketer at KTAG.",
  keywords: [
    "UGC creator",
    "UGC content creator",
    "product review videos",
    "UGC videos for brands",
    "video editor",
    "Reels and TikTok video editing",
    "AI generated videos",
    "high ROAS UGC",
    "lifestyle videos",
    "Esraa Yasser",
    "صانعة محتوى UGC",
    "مونتاج فيديو",
    "فيديوهات ريفيو منتجات",
    "مونتاج ريلز",
  ],
};
export const wa = (m) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(m)}`;
export const NAV = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Work", "#work"],
  ["Results", "#reviews"],
  ["Contact", "#contact"],
];
export const HERO = {
  img: "/images/hero.webp",
  alt: "Esraa Yasser, UGC content creator, in an illustrated sunset portrait",
  chip: "UGC • VIDEO EDITOR • AI VISUALS",
  title: "Content That Makes People Stop Scrolling —",
  accent: "And Start Buying.",
  text: "Authentic UGC, product reviews, lifestyle videos & high-retention edits engineered to turn attention into sales.",
  cta1: "View My Work",
  cta2: "Hire on WhatsApp",
  scroll: "SCROLL TO EXPLORE",
  msg: "Hi Esraa, I'd like to work with you on a UGC / video project.",
};
export const BRANDS = {
  label: "TRUSTED BY BRANDS & CREATORS",
  items: [
    { name: "TagFit", img: "/images/brand-tagfit.webp" },
    { name: "Carto", img: "/images/brand-carto.webp" },
    { name: "Al Amany", img: "/images/brand-alamany.webp", round: 1 },
  ],
};
export const ABOUT = {
  label: "THE CREATOR BEHIND THE CAMERA",
  title: "Hi, I'm Esraa",
  badge: ["Creative", "Strategist"],
  name: "Esraa Yasser",
  past: "Ex-Marketer at",
  pastBrand: "KTAG",
  tag: "High ROAS UGC Strategist",
  text: "I am a UGC content creator specializing in scroll-stopping product reviews and lifestyle storytelling. Having worked as a marketer at KTAG, I understand both the creative hook and the performance metrics required to drive conversions. Beyond on-camera presenting, I am a skilled video editor and generate photorealistic AI compositions.",
  toolsLabel: "PRODUCTION TOOLKIT",
  tools: [
    ["Premiere Pro", "#9b6bff"],
    ["After Effects", "#7b7bff"],
    ["DaVinci Resolve", "#ff8a3d"],
    ["AI Tools (Midjourney • Runway • Sora)", "#ef5f7c"],
  ],
  services: [
    {
      n: "01",
      title: "UGC & Product Reviews",
      text: "High-converting hook-to-CTA unboxings, authentic demonstrations, and problem-solution reels tailored for TikTok & IG.",
    },
    {
      n: "02",
      title: "Pro Video Editing",
      text: "Fast-paced retention cuts, kinetic typography, crisp foley sound design, and color grading tuned for maximum watch-time.",
    },
    {
      n: "03",
      title: "AI-Generated Videos",
      text: "Futuristic concept commercials, surreal visual effects, and hyper-realistic product showcases rendered with cutting-edge AI.",
    },
  ],
};

const FOLDERS = [
  { cat: "Product Reviews", title: "Product Review", tag: "REVIEW", n: 5 },
  { cat: "Lifestyle", title: "Lifestyle Reel", tag: "LIFESTYLE", n: 2 },
  { cat: "Video Editing", title: "Video Edit", tag: "EDIT", n: 7 },
];
const WORK_ITEMS = [];
for (let i = 1; i <= Math.max(...FOLDERS.map((f) => f.n)); i++)
  for (const f of FOLDERS)
    if (i <= f.n) {
      const p = `/videos/${f.cat}/${i}`;
      WORK_ITEMS.push({
        title: `${f.title} ${i}`,
        cat: f.cat,
        tag: f.tag,
        views: "",
        poster: ".webp",
        src: encodeURI(p + ".mp4"),
      });
    }
export const WORK = {
  label: "PORTFOLIO",
  title: "Selected Work",
  sub: "Videos engineered for viral retention & high ROAS",
  all: "All",
  pageSize: 4,
  more: "View More Videos",
  less: "Show Less",
  items: WORK_ITEMS,
};
export const REVIEWS = {
  label: "VERIFIED RESULTS",
  title: "What Clients Say",
  sub: "Real DM feedback from marketing heads & founders",
  hint: "SWIPE TO READ",
  expand: "Tap to expand full thread",
  collapse: "Hide thread",
  view: "View screenshot",
  items: [
    {
      initials: "GL",
      name: "Sarah M.",
      brand: "Glow Lab",
      time: "10:42 AM",
      verified: 1,
      quote:
        "Hey Esraa! Just reviewed yesterday's ad launch. The UGC video converted at 4.2% CTR, by far our highest this entire quarter! The pacing on the first 3 seconds is gold.",
      bold: "4.2% CTR",
      shot: "/images/feedback-1.jpg",
    },
    {
      initials: "CN",
      name: "Client name",
      brand: "Brand",
      time: "00:00 AM",
      verified: 0,
      quote: "Replace this text with the real message from the client's chat.",
      bold: "",
      shot: "/images/feedback-2.jpg",
    },
    {
      initials: "CN",
      name: "Client name",
      brand: "Brand",
      time: "00:00 AM",
      verified: 0,
      quote: "Replace this text with the real message from the client's chat.",
      bold: "",
      shot: "/images/feedback-3.jpg",
    },
  ],
};
export const CONTACT = {
  pill: "DIRECT CHANNELS",
  title: "Let's Create Something People Remember.",
  sub: "Open for brand collaborations, organic UGC partnerships, and custom video editing projects.",
  wa: {
    tag: "INSTANT REPLY",
    title: "Chat on WhatsApp",
    sub: "+201103239622",
    msg: "Hi Esraa, I saw your portfolio and I'd like to collaborate.",
  },
  ig: { tag: "DAILY UPDATES", title: "DM on Instagram" },
};
export const FOOT = { tag: "UGC Creator • Video Editor • AI Visuals" };
