import React, { useEffect } from "react";

type LightboxProps = {
  src: string | null;
  alt?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  currentIndex?: number;
  totalCount?: number;
};

export const Lightbox: React.FC<LightboxProps> = ({
  src,
  alt = "Preview",
  onClose,
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true,
  currentIndex,
  totalCount,
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
      style={{ backdropFilter: "blur(2px)", opacity: 0, animation: "lbFade 250ms ease-out forwards" }}
    >
      <style>
        {`
          @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }
          @keyframes lbSlideUp { from { transform: translateY(16px); opacity: .9 } to { transform: translateY(0); opacity: 1 } }
        `}
      </style>
      <div
        className="relative max-w-5xl w-[92vw] max-h-[85vh] overflow-hidden rounded-lg shadow-xl bg-black flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "lbSlideUp 300ms cubic-bezier(0.25,0.46,0.45,0.94) forwards" }}
      >
        <img src={src} alt={alt} className="block max-w-full max-h-[85vh] h-auto w-auto m-auto object-contain" />

        {typeof currentIndex === "number" && typeof totalCount === "number" ? (
          <div className="absolute top-2 left-2 md:top-3 md:left-3 text-white/90 bg-black/30 rounded-full px-3 py-1 text-xs md:text-sm">
            {currentIndex + 1} of {totalCount}
          </div>
        ) : null}

        {/* Arrows */}
        {hasPrev && (
          <button
            aria-label="Previous image"
            onClick={onPrev}
            className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-black/30 hover:bg-black/40 rounded-full w-9 h-9 flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}
        {hasNext && (
          <button
            aria-label="Next image"
            onClick={onNext}
            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-black/30 hover:bg-black/40 rounded-full w-9 h-9 flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}

        {/* Close (X) */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-2 right-2 md:top-3 md:right-3 text-white/90 hover:text-white bg-black/30 hover:bg-black/40 rounded-full w-9 h-9 flex items-center justify-center"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;


