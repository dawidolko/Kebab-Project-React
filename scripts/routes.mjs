/* The route table the prerender step works from. */
const origin = "https://kebab.dawidolko.pl";

export const site = {
  origin,
  name: "Kebab House",
  locale: "en_US",
  image: "/og-image.jpg",
  imageAlt: "Kebab House website home page",
  outDir: "build",
  rootId: "root",
  heroSelector: "[data-hero]",
};

export const routes = [
  {
    path: "/",
    title: "Kebab House | Interactive Menu and Live Shopping Cart",
    description:
      "Kebab House is a demo restaurant website with an interactive kebab menu, desserts, category filtering and a live shopping cart, built with React.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Kebab House",
        url: `${origin}/`,
        description: "Demo restaurant website with an interactive menu and a live shopping cart.",
        author: { "@type": "Person", name: "Dawid Olko", url: "https://dawidolko.pl" },
      },
    ],
  },
];

export const notFound = null;
