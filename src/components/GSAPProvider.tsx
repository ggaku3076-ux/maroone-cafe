"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Run GSAP entrance animations on page change
    const ctx = gsap.context(() => {
      // 1. Hero / Section Titles Reveal
      gsap.fromTo(
        "h1, h2",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.15 }
      );

      // 2. Subtext & Paragraph Fade-In
      gsap.fromTo(
        "p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2, stagger: 0.1 }
      );

      // 3. Buttons & Action Links Pop-In
      gsap.fromTo(
        "a.inline-flex, button.inline-flex, .gsap-button",
        { opacity: 0, scale: 0.95, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.7)", delay: 0.4, stagger: 0.1 }
      );

      // 4. Cards Stagger Reveal
      gsap.fromTo(
        ".bg-white\\/10, .bg-white, .border-white\\/20",
        { opacity: 0, y: 35, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.3, stagger: 0.12 }
      );

      // 5. Drink Glass Cutout Floating Animation
      gsap.fromTo(
        "img[alt*='AMERICANO'], img[alt*='CAPPUCCINO'], img[alt*='LATTE'], img[alt*='MAGIC'], img[alt*='ICE']",
        { scale: 0.8, opacity: 0, rotate: -5 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.9, ease: "elastic.out(1, 0.75)", delay: 0.5, stagger: 0.1 }
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return <>{children}</>;
}
