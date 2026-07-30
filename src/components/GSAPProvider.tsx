"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import Lenis from "lenis";

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize Lenis Buttery Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 2. 60FPS Hardware Accelerated GSAP Entrance Animations
    const ctx = gsap.context(() => {
      // Hero & Section Titles Entrance
      gsap.fromTo(
        "#hero-title, #menu-title, #contact-title, #venue-title, #wfc-title, #gallery-title, #profile-title, #ambiance-title",
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: "power2.out",
          force3D: true
        }
      );

      // Main Content Cards Entrance
      gsap.fromTo(
        ".gsap-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
          force3D: true
        }
      );
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ctx.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
