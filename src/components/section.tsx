"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

export function Section({
  id,
  title,
  subtitle,
  eyebrow,
  children,
  tone = "default",
}: {
  id: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-24 ${tone === "muted" ? "bg-surface-2" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.55, ease: easeOut }}
        className="ds-container"
      >
        <div className="mb-10 max-w-2xl">
          {eyebrow ? <p className="ds-eyebrow mb-3">{eyebrow}</p> : null}
          <h2 className="ds-title">{title}</h2>
          {subtitle ? <p className="ds-lead mt-3">{subtitle}</p> : null}
        </div>
        {children}
      </motion.div>
    </section>
  );
}
