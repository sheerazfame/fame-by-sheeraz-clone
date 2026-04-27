"use client";

import { useEffect, useRef } from "react";

interface VideoModalProps {
  src: string;
  poster?: string;
  title: string;
  open: boolean;
  onClose: () => void;
}

export default function VideoModal({ src, poster, title, open, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // ESC + outside click + body scroll lock
  useEffect(() => {
    if (!open) return;

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";

    // Autofocus dialog for ESC accessibility
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Pause + reset video when closing
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (open) {
      v.currentTime = 0;
      v.muted = false;
      v.volume = 1;
      void v.play().catch(() => {
        // If unmuted autoplay fails (rare since user clicked), try muted
        v.muted = true;
        void v.play().catch(() => {});
      });
    } else {
      v.pause();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — case study video`}
      tabIndex={-1}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 outline-none"
      onClick={onClose}
    >
      {/* Stop propagation so clicks on video don't close */}
      <div
        className="relative w-full max-w-[1280px] max-h-[92vh] aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          className="w-full h-full object-contain bg-black"
          aria-label={title}
        />

        {/* Title overlay */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-4 sm:p-5 pointer-events-none">
          <div className="pointer-events-auto">
            <p className="kicker kicker-fire mb-1">Case Study</p>
            <h3
              className="font-display text-[#F5F0E8]"
              style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: "1" }}
            >
              {title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="pointer-events-auto flex-shrink-0 w-11 h-11 rounded-full bg-black/70 border border-white/30 backdrop-blur-md text-white hover:bg-[#F14312] hover:border-[#F14312] transition-colors flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
