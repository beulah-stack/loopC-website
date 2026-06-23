"use client";

import { useEffect, useRef } from "react";
import { heroBannerVideo } from "@/lib/hero-video";

type HeroBannerVideoProps = {
  className?: string;
  /** Pause on first frame when user prefers reduced motion */
  staticOnly?: boolean;
};

export function HeroBannerVideo({ className = "", staticOnly = false }: HeroBannerVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    if (staticOnly) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    const play = () => {
      void video.play().catch(() => {
        /* ignore autoplay policy blocks */
      });
    };

    play();
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);

    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
    };
  }, [staticOnly]);

  return (
    <>
      <video
        ref={videoRef}
        className={`absolute inset-0 z-0 h-full w-full scale-105 object-cover object-center ${className}`}
        autoPlay={!staticOnly}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={heroBannerVideo.src} type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/88 via-slate-900/72 to-slate-900/40"
        aria-hidden
      />
    </>
  );
}
