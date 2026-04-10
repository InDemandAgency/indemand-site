"use client";
import { useEffect } from "react";

export default function ScrollAnimationInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(
              (entry.target as HTMLElement).dataset.delay ?? "0"
            );
            setTimeout(() => entry.target.classList.add("in-view"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Initialize all existing elements
    document.querySelectorAll("[data-animate]").forEach((el) => {
      el.classList.add("animate-init");
      observer.observe(el);
    });

    // Watch for dynamically mounted elements (Wistia, etc.)
    const mutation = new MutationObserver(() => {
      document
        .querySelectorAll("[data-animate]:not([data-observed])")
        .forEach((el) => {
          (el as HTMLElement).dataset.observed = "1";
          el.classList.add("animate-init");
          observer.observe(el);
        });
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
