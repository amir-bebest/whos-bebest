"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { useLocale } from "@/components/locale-provider";
import { siteConfig } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export function About() {
  const { locale, t } = useLocale();

  return (
    <Section
      id="about"
      eyebrow={locale === "fa" ? "پروفایل" : "Profile"}
      title={t.about.title}
    >
      <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="hero-photo relative mx-auto w-full max-w-[18rem] lg:mx-0">
          <Image
            src={assetPath(siteConfig.image)}
            alt={siteConfig.name[locale]}
            fill
            sizes="288px"
            className="object-cover object-[center_12%]"
            unoptimized
          />
        </div>

        <div>
          <p className="ds-lead text-pretty">{t.about.body}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: locale === "fa" ? "تجربه" : "Experience",
                value: locale === "fa" ? "+۲٫۵ سال" : "2.5+ yrs",
              },
              {
                label: locale === "fa" ? "پروژه مستقل" : "Solo projects",
                value: "20+",
              },
              {
                label: locale === "fa" ? "پروژه تیمی" : "Team projects",
                value: "30+",
              },
            ].map((item) => (
              <div key={item.label} className="panel p-4">
                <p className="text-2xl font-bold tracking-tight text-foreground">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
