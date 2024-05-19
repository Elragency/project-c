import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Gestion Laucandrique",
  tagline: "Ensemble, réalisons tous vos projets de copropriétés",
  description: "Laucandrique s’assure de répondre à tous les besoins de ses clients avec une offre de service complète en gestion de copropriété. L’équipe de gestionnaires et les employé.es de tous les autres départements administratifs partagent une mission commune; celle d’assurer la gestion optimale et efficace de tous les immeubles qui leur sont confiés.",
  description_short: "Laucandrique s’assure de répondre à tous les besoins de ses clients avec une offre de service complète en gestion de copropriété.",
  url: "https://screwfast.uk",
  author: "Gestion Laucandrique",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};
