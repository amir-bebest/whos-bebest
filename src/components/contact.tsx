"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { useLocale } from "@/components/locale-provider";
import { siteConfig } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export function Contact() {
  const { locale, t } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();

    if (!ACCESS_KEY) {
      // Fallback if key is not configured yet
      const subject = encodeURIComponent(
        locale === "fa" ? `پیام از ${name || "وب‌سایت"}` : `Message from ${name || "website"}`,
      );
      const body = encodeURIComponent(`${message}\n\n---\n${name}\n${email}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject:
            locale === "fa"
              ? `پیام جدید از وب‌سایت شخصی — ${name}`
              : `New message from portfolio — ${name}`,
          from_name: name,
          email,
          message,
          replyto: email,
        }),
      });

      const data = (await response.json()) as { success?: boolean };

      if (!response.ok || !data.success) {
        throw new Error("submit failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      tone="muted"
      eyebrow={locale === "fa" ? "ارتباط" : "Connect"}
      title={t.contact.title}
      subtitle={t.contact.subtitle}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3 text-sm">
          <a href={`mailto:${siteConfig.email}`} className="contact-row">
            <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-[14px] border border-border bg-hover text-primary">
              <Mail className="h-4 w-4" strokeWidth={2} />
            </span>
            <span>
              <strong className="block text-foreground">{t.contact.email}</strong>
              {siteConfig.email}
            </span>
          </a>
          <a href={siteConfig.phoneHref} className="contact-row" dir="ltr">
            <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-[14px] border border-border bg-hover text-primary">
              <Phone className="h-4 w-4" strokeWidth={2} />
            </span>
            <span>
              <strong className="block text-foreground">{t.contact.phone}</strong>
              {siteConfig.phone}
            </span>
          </a>
          <div className="contact-row">
            <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-[14px] border border-border bg-hover text-primary">
              <MapPin className="h-4 w-4" strokeWidth={2} />
            </span>
            <span>
              <strong className="block text-foreground">{t.contact.location}</strong>
              {siteConfig.location[locale]}
            </span>
          </div>
          <div className="flex gap-3 pt-2">
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
          </div>
        </div>

        <form onSubmit={onSubmit} className="panel space-y-4 p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-muted">{t.contact.formName}</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="field"
                required
                disabled={status === "sending"}
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-muted">{t.contact.formEmail}</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field"
                required
                disabled={status === "sending"}
              />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-muted">{t.contact.formMessage}</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="field min-h-32 resize-y"
              required
              disabled={status === "sending"}
            />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto disabled:opacity-60"
              disabled={status === "sending"}
            >
              {status === "sending" ? t.contact.formSending : t.contact.formSubmit}
            </button>
            <p className="text-xs text-muted">{t.contact.formHint}</p>
          </div>
          {status === "success" ? (
            <p className="text-sm font-medium text-accent">{t.contact.formSuccess}</p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm font-medium text-primary">{t.contact.formError}</p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
