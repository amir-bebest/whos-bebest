"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { useLocale } from "@/components/locale-provider";
import { experience } from "@/lib/content";
import { easeOut } from "@/lib/motion";

export function Experience() {
  const { locale, t } = useLocale();

  return (
    <Section
      id="experience"
      eyebrow={locale === "fa" ? "مسیر شغلی" : "Career"}
      title={t.experience.title}
    >
      <div className="relative ms-3 border-s border-border ps-6 sm:ms-4 sm:ps-8">
        <ol className="space-y-5">
          {experience.map((item, index) => (
            <motion.li
              key={`${item.company.en}-${item.start.en}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: easeOut }}
              className="relative"
            >
              <span className="absolute -start-[1.95rem] top-7 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_rgba(37,99,235,0.15)] sm:-start-[2.45rem]" />
              <article className="panel p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {item.role[locale]}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-secondary">
                      @ {item.company[locale]}
                    </p>
                  </div>
                  <p className="rounded-[14px] border border-border bg-hover px-3 py-1 text-xs font-semibold text-muted">
                    {item.start[locale]} — {item.end ? item.end[locale] : t.experience.present}
                  </p>
                </div>
                <p className="mt-3 inline-flex rounded-[14px] border border-border px-2.5 py-1 text-xs font-bold text-primary">
                  {item.stack}
                </p>
                <p className="mt-2 text-sm text-muted">{item.location[locale]}</p>
                <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-text-secondary">
                  {item.points[locale].map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
