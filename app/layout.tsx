import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Banner } from "fumadocs-ui/components/banner";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Banner
          variant="rainbow"
          rainbowColors={[
            "oklch(93.2% 0.032 255.585)",
            "oklch(93.2% 0.032 255.585)",
            "transparent",
            "oklch(93.2% 0.032 255.585)",
            "transparent",
            "oklch(93.2% 0.032 255.585)",
            "transparent",
          ]}
          className="font-mono border-b"
          id="banner-release"
        >
          <a href="https://github.com/nuxt/nuxt/releases">
            Punkt has released! Check out v0.1.0 →
          </a>
        </Banner>
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
