import Lenis from "lenis";
import { useEffect, useState } from "react";

const lenisOptions = {
  duration: 1.2,
  easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
  smoothWheel: true,
  smoothTouch: false,
} as const;

export function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanupLenis: (() => void) | undefined;

    const setupLenis = () => {
      cleanupLenis?.();

      if (mediaQuery.matches) {
        setLenis(null);
        cleanupLenis = undefined;
        return;
      }

      const instance = new Lenis(lenisOptions);
      let animationFrame = 0;

      const raf = (time: number) => {
        instance.raf(time);
        animationFrame = window.requestAnimationFrame(raf);
      };

      animationFrame = window.requestAnimationFrame(raf);
      setLenis(instance);
      cleanupLenis = () => {
        window.cancelAnimationFrame(animationFrame);
        instance.destroy();
        setLenis(null);
      };
    };

    const handleMotionPreferenceChange = () => setupLenis();
    setupLenis();
    mediaQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      cleanupLenis?.();
    };
  }, []);

  return lenis;
}
