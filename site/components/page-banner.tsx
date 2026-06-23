import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import type { PageBannerKey } from "@/lib/page-banners";
import { pageBanners } from "@/lib/page-banners";

type PageBannerProps = {
  banner: PageBannerKey;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  priority?: boolean;
};

export function PageBanner({
  banner,
  eyebrow,
  title,
  description,
  children,
  priority = false,
}: PageBannerProps) {
  const { src, alt } = pageBanners[banner];

  return (
    <section className="relative min-h-[280px] overflow-hidden border-b border-slate-200/80 sm:min-h-[320px] lg:min-h-[360px]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/78 to-slate-900/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-teal-900/20"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <FadeIn>
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">{eyebrow}</p>
          ) : null}
          <h1
            className={`max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.12] ${eyebrow ? "mt-3" : ""}`}
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">{description}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </FadeIn>
      </div>
    </section>
  );
}
