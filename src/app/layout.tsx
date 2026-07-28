import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Vazirmatn } from "next/font/google";
import { Providers } from "@/components/providers";
import { assetPath } from "@/lib/paths";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amir-bebest.github.io/whos-bebest";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amirhossein Farzaneh | Full Stack Developer",
    template: "%s | Amirhossein Farzaneh",
  },
  description:
    "Personal portfolio of Amirhossein Farzaneh — Full Stack Developer specializing in Next.js, Node.js, WordPress, performance, and AI Engineering.",
  keywords: [
    "Amirhossein Farzaneh",
    "Full Stack Developer",
    "Next.js",
    "Node.js",
    "WordPress",
    "AI Engineering",
    "Web Developer Tehran",
  ],
  authors: [{ name: "Amirhossein Farzaneh" }],
  creator: "Amirhossein Farzaneh",
  icons: {
    icon: [
      { url: assetPath("/favicon-16.png"), sizes: "16x16", type: "image/png" },
      { url: assetPath("/favicon-32.png"), sizes: "32x32", type: "image/png" },
      { url: assetPath("/icon-192.png"), sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: assetPath("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Amirhossein Farzaneh",
    title: "Amirhossein Farzaneh | Full Stack Developer",
    description:
      "Full Stack Developer focused on Next.js, Node.js, WordPress, and AI-powered digital products.",
    images: [
      {
        url: assetPath("/brand/logo-icon-dark.png"),
        width: 512,
        height: 512,
        alt: "Amirhossein Farzaneh Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Amirhossein Farzaneh | Full Stack Developer",
    description:
      "Full Stack Developer focused on Next.js, Node.js, WordPress, and AI-powered digital products.",
    images: [assetPath("/brand/logo-icon-dark.png")],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amirhossein Farzaneh",
    url: siteUrl,
    image: `${siteUrl}/images/amirhossein.png`,
    jobTitle: "Full Stack Developer",
    email: "mailto:amirbebest@gmail.com",
    telephone: "+989038061480",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    },
    sameAs: [
      "https://www.linkedin.com/in/amir-bebest",
      "https://github.com/amir-bebest",
    ],
  };

  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${jakarta.variable} ${vazirmatn.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
