"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { useLocale } from "@/components/locale-provider";
import { projects } from "@/lib/content";
import { easeOut } from "@/lib/motion";

export function Projects() {
  const { locale, t } = useLocale();

  return (
    <Section
      id="projects"
      tone="muted"
      eyebrow={locale === "fa" ? "نمونه کار" : "Selected work"}
      title={t.projects.title}
      subtitle={
        locale === "fa"
          ? "پروژه‌های واقعی منتشرشده — از فروشگاه تا پلتفرم."
          : "Shipped work across commerce, brands, and platforms."
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: index * 0.03, ease: easeOut }}
            className="project-card group flex flex-col p-5"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                  Live
                </p>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {project.name}
                </h3>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-[14px] border border-border text-muted transition-colors group-hover:border-primary group-hover:text-primary">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </div>
            <p className="mb-4 text-sm leading-7 text-muted">
              {project.description[locale]}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-bold text-primary">{t.projects.visit}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
