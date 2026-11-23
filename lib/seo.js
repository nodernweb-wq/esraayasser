import { SITE, ABOUT } from "@/data/site";
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    locale: "en_US",
    title: SITE.title,
    description: SITE.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
export const viewport = {
  themeColor: "#fdf7f3",
  width: "device-width",
  initialScale: 1,
};
const u = SITE.url,
  addr = SITE.country
    ? { address: { "@type": "PostalAddress", addressCountry: SITE.country } }
    : {};
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": u + "/#person",
      name: SITE.name,
      jobTitle: "UGC Content Creator & Video Editor",
      description: SITE.description,
      url: u,
      image: u + "/og.jpg",
      sameAs: [SITE.instagram.url],
      knowsAbout: [
        "UGC content",
        "Product review videos",
        "Video editing",
        "AI-generated video",
      ],
      ...addr,
    },
    {
      "@type": "ProfessionalService",
      "@id": u + "/#service",
      name: SITE.name + " — UGC & Video Production",
      url: u,
      image: u + "/og.jpg",
      description: SITE.description,
      founder: { "@id": u + "/#person" },
      areaServed: "Worldwide",
      ...addr,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: ABOUT.services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.text,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": u + "/#site",
      url: u,
      name: SITE.name,
      inLanguage: "en",
      publisher: { "@id": u + "/#person" },
    },
  ],
};
