"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

type ContactFormProps = {
  className?: string;
  intent?: "contact" | "demo";
};

export function ContactForm({ className = "", intent = "contact" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!email) {
      setStatus("error");
      return;
    }

    const subjectPrefix =
      intent === "demo"
        ? `[${siteConfig.brand}] Demo request`
        : `[${siteConfig.brand}] Contact`;

    if (FORMSPREE_ID) {
      setStatus("loading");
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            company,
            email,
            message,
            _subject: `${subjectPrefix} from ${company || name || email}`,
          }),
        });
        if (res.ok) {
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    const subject = encodeURIComponent(
      `${intent === "demo" ? "Demo request" : "Contact"} — ${company || name}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`,
    );
    const mail = intent === "demo" ? siteConfig.salesEmail : siteConfig.contactEmail;
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
  }

  const intro =
    intent === "demo"
      ? "Tell us your systems, team size, and what you want to see—we will tailor the session."
      : "Send a message and we will get back to you with next steps.";

  return (
    <div className={className}>
      <p className="text-sm text-slate-600">{intro}</p>
      {!FORMSPREE_ID ? (
        <p className="mt-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          Forms are not connected yet: submissions will open your email client. To receive
          submissions in your inbox without mailto, add{" "}
          <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_FORMSPREE_FORM_ID</code> in{" "}
          <code className="rounded bg-amber-100 px-1">.env.local</code> (see README).
        </p>
      ) : null}
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Name
            <input
              name="name"
              type="text"
              autoComplete="name"
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-teal-600/15 focus:border-teal-500 focus:ring-4"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Company
            <input
              name="company"
              type="text"
              autoComplete="organization"
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-teal-600/15 focus:border-teal-500 focus:ring-4"
            />
          </label>
        </div>
        <label className="block text-sm font-medium text-slate-700">
          Work email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-teal-600/15 focus:border-teal-500 focus:ring-4"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Message
          <textarea
            name="message"
            rows={5}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-teal-600/15 focus:border-teal-500 focus:ring-4"
            placeholder={
              intent === "demo"
                ? "ERP/CRM priorities, current tools, regions (e.g. Chennai HQ), preferred demo dates…"
                : "Tell us about your ERP or CRM goals, timeline, and budget range…"
            }
          />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-teal-600/25 transition hover:brightness-105 disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? "Sending…" : intent === "demo" ? "Request demo" : "Send message"}
        </button>
        {status === "success" ? (
          <p className="text-sm font-medium text-teal-800" role="status">
            Thanks — we received your message.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-red-700" role="alert">
            Something went wrong. Please try again or email {siteConfig.contactEmail}.
          </p>
        ) : null}
      </form>
    </div>
  );
}
