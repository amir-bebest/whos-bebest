"use client";

import { useLocale } from "@/components/locale-provider";
import { siteConfig } from "@/lib/content";

export function Footer() {
  const { locale, t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="ds-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight text-foreground">
            {siteConfig.name[locale]}
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year}. {t.footer.rights}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <a href="#about" className="transition-colors hover:text-foreground">
            {t.nav.about}
          </a>
          <a href="#projects" className="transition-colors hover:text-foreground">
            {t.nav.projects}
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            {t.nav.contact}
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
