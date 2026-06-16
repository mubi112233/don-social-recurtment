import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Don Social Recruitment - Social Media Recruitment Agency",
    short_name: "Don Social Recruitment",
    description: "Transform your recruitment with data-driven social media strategies. We connect you with qualified candidates faster and more cost-effectively than traditional methods.",
    start_url: "/",
    display: "standalone",
    background_color: "#3D2817",
    theme_color: "#FFBC42",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    scope: "/",
    lang: "en",
    categories: ["design", "business", "productivity", "web"],
  };
}


