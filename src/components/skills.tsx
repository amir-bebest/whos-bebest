"use client";

import { Bot, Cloud, Code2, Container, Server, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { useLocale } from "@/components/locale-provider";
import { skills } from "@/lib/content";
import { easeOut } from "@/lib/motion";

const order = ["frontend", "backend", "cms", "seo", "tools", "ai"] as const;

const icons = {
  frontend: Code2,
  backend: Server,
  cms: Workflow,
  seo: Cloud,
  tools: Container,
  ai: Bot,
} as const;

export function Skills() {
  const { locale, t } = useLocale();

  return (
    <Section
      id="skills"
      tone="muted"
      eyebrow={locale === "fa" ? "تخصص" : "Stack"}
      title={t.skills.title}
      subtitle={
        locale === "fa"
          ? "WordPress، Next.js، Node.js، AI و زیرساخت — برای ساخت محصول واقعی."
          : "WordPress, Next.js, Node.js, AI and infrastructure for shipping real products."
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {order.map((key, index) => {
          const Icon = icons[key];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: easeOut }}
              className="skill-card p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-[14px] border border-border bg-hover text-primary">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="text-base font-bold tracking-tight text-foreground">
                    {t.skills.groups[key]}
                  </h3>
                </div>
                <span className="text-xs tabular-nums text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
