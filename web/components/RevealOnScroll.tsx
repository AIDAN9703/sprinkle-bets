"use client";

import { useEffect } from "react";

export default function RevealOnScroll(): null {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        '[class*="animate-fade-"] , [class*="animate-stagger"], .animate-fade-in-pulse, .animate-fade-in-scale, .animate-fade-in-left, .animate-fade-in-right, .animate-fade-in-up, .animate-fade-in-up-delay, .animate-fade-in-up-delay-2, .animate-fade-in-up-delay-3, .animate-fade-in-up-delay-4'
      )
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
