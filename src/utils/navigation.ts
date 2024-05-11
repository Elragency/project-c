
const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Partenaires", url: "/ressources" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/fr/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/ressources" },
      { name: "Services de Construction", url: "/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  // x: "#",
  github: "https://elragency.com",
  google: "#",
  // slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};