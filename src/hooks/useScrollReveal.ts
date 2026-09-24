import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import type Lenis from "lenis";

let scrollTriggerRegistered = false;

function registerScrollTrigger() {
  if (scrollTriggerRegistered) return;
  gsap.registerPlugin(ScrollTrigger);
  scrollTriggerRegistered = true;
}

export function useScrollReveal(lenis: Lenis | null, enabled = true) {
  useEffect(() => {
    if (!enabled || !lenis) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    registerScrollTrigger();
    const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");

    if (mediaQuery.matches) {
      gsap.set(elements, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const context = gsap.context(() => {
      gsap.set(elements, { opacity: 0, y: 22, scale: 0.992, willChange: "transform, opacity" });
      ScrollTrigger.batch(elements, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            clearProps: "willChange",
          });
        },
      });
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    lenis.on("scroll", updateScrollTrigger);
    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      context.revert();
    };
  }, [enabled, lenis]);
}
