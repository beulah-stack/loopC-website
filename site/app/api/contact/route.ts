import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

const formspreeId =
  process.env.FORMSPREE_FORM_ID?.trim() ||
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();

type ContactPayload = {
  name?: string;
  company?: string;
  mobile?: string;
  email?: string;
  employees?: string;
  message?: string;
  intent?: string;
  _subject?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const payload = {
    name: body.name ?? "",
    company: body.company ?? "",
    mobile: body.mobile ?? "",
    email,
    employees: body.employees ?? "",
    message: body.message ?? "",
    intent: body.intent ?? "contact",
    _subject:
      body._subject ??
      `[${siteConfig.brand}] ${body.intent ?? "contact"} from ${body.company || body.name || email}`,
    _template: "table",
    _captcha: "false",
    _replyto: email,
  };

  const endpoint = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.salesEmail)}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not send your message. Please try again or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Network error. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
