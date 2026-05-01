// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Nexora - Consulting & Engineering";
export const SITE_DESCRIPTION =
  "Nexora helps startups and enterprises ship faster with elite consulting and engineering teams. Strategy, architecture, and execution — end to end.";

export const GITHUB_URL = "https://github.com";

export const SITE_METADATA = {
  title: {
    default: "Nexora - Consulting & Engineering",
    template: "%s | Nexora",
  },
  description:
    "Nexora helps startups and enterprises ship faster with elite consulting and engineering teams. Strategy, architecture, and execution — end to end.",
  keywords: [
    "consulting",
    "engineering",
    "software development",
    "tech consulting",
    "startup engineering",
    "product strategy",
    "software architecture",
    "dev team augmentation",
    "Nexora",
  ],
  authors: [{ name: "Nexora" }],
  creator: "Nexora",
  publisher: "Nexora",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Nexora - Consulting & Engineering",
    description:
      "Nexora helps startups and enterprises ship faster with elite consulting and engineering teams. Strategy, architecture, and execution — end to end.",
    siteName: "Nexora",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexora - Consulting & Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora - Consulting & Engineering",
    description:
      "Nexora helps startups and enterprises ship faster with elite consulting and engineering teams. Strategy, architecture, and execution — end to end.",
    images: ["/og-image.jpg"],
    creator: "@nexora",
  },
};
