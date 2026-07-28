"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";
import { siteConfig } from "@/lib/content";
import { easeOut, fadeUpItem, stagger } from "@/lib/motion";

export function Hero() {
  const { locale, t } = useLocale();

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="ds-atmosphere">
        <div className="ds-container grid items-center gap-10 py-14 sm:gap-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-20">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="order-2 flex flex-col justify-center lg:order-1"
          >
            <motion.p variants={fadeUpItem} className="ds-eyebrow mb-4">
              {locale === "fa" ? "توسعه‌دهنده فول‌استک وب" : "Full Stack Web Developer"}
            </motion.p>

            <motion.h1
              variants={fadeUpItem}
              className="max-w-2xl text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground"
            >
              {locale === "en" ? (
                <>
                  AMIRHOSSEIN <span className="gradient-text">FARZANEH</span>
                </>
              ) : (
                <>
                  امیرحسین <span className="gradient-text">فرزانه</span>
                </>
              )}
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              className="mt-5 max-w-xl text-lg leading-8 text-text-secondary sm:text-[1.25rem]"
            >
              {locale === "fa"
                ? "ساخت محصولات دیجیتال سریع، مقیاس‌پذیر و مبتنی بر هوش مصنوعی."
                : "Building Fast, Scalable & AI-Powered Digital Products."}
            </motion.p>

            <motion.div variants={fadeUpItem} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                {locale === "fa" ? "مشاهده پروژه‌ها" : "View Projects"}
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a href="#contact" className="btn-secondary">
                {t.hero.ctaContact}
              </a>
            </motion.div>

            <motion.p
              variants={fadeUpItem}
              className="mt-7 flex flex-wrap gap-x-2 gap-y-1 text-sm font-semibold tracking-wide"
            >
              <span className="text-primary">WordPress</span>
              <span className="text-muted">•</span>
              <span className="text-secondary">Next.js</span>
              <span className="text-muted">•</span>
              <span className="text-secondary">Node.js</span>
              <span className="text-muted">•</span>
              <span className="text-accent">AI Engineering</span>
            </motion.p>

            <motion.div variants={fadeUpItem} className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="icon-link" aria-label="Email">
                <Mail className="h-4 w-4" strokeWidth={2} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: easeOut, delay: 0.08 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="hero-video relative w-full max-w-[28rem] overflow-hidden rounded-[var(--radius-image)] border border-border bg-black shadow-[var(--shadow)]">
              <video
                className="aspect-[4/5] w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
              >
                <source src={siteConfig.video} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
