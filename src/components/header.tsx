"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { useLocale } from "@/components/locale-provider";

const links = [
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "contact", key: "contact" },
] as const;

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-border bg-background/70 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="ds-container flex h-[4.25rem] items-center justify-between gap-3">
        <a href="#top" className="min-w-0 shrink-0">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-6 text-[0.9rem] font-semibold md:flex">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="nav-link">
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === "fa" ? "en" : "fa")}
            className="rounded-[14px] border border-border bg-surface/70 px-2.5 py-1.5 text-xs font-bold tracking-wide text-foreground backdrop-blur transition-colors hover:border-primary hover:bg-hover"
            aria-label="Toggle language"
          >
            {locale === "fa" ? "EN" : "FA"}
          </button>

          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-[14px] border border-border bg-surface/70 p-2 text-foreground backdrop-blur transition-colors hover:border-primary hover:bg-hover"
            aria-label={resolvedTheme === "dark" ? t.theme.light : t.theme.dark}
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" strokeWidth={2} />
            ) : (
              <Moon className="h-4 w-4" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
