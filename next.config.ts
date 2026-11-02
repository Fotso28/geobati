import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Anciennes pages de prestations, regroupées depuis dans les quatre domaines d'intervention.
  async redirects() {
    return [
      { source: "/services/bornage", destination: "/services/prestations-foncieres", permanent: true },
      { source: "/services/conseil-foncier", destination: "/services/prestations-foncieres", permanent: true },
      { source: "/services/lotissement", destination: "/services/urbanisme-amenagement", permanent: true },
      { source: "/services/implantation", destination: "/services/topographie", permanent: true },
      { source: "/services/drone-cartographie", destination: "/services/topographie", permanent: true },
      { source: "/realisations/cartographie-aerienne-site-etendu", destination: "/realisations/cartographie-aerienne-chantier-infrastructure", permanent: true },
      { source: "/realisations/suivi-topographique-chantier", destination: "/realisations/suivi-topographique-chantier-terrassement", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
