"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // 60FPS Hardware Accelerated GSAP Entrance Animations
    const ctx = gsap.context(() => {
      // 1. Hero / Section Titles
      gsap.fromTo(
        "#hero-title, #menu-title, #contact-title, #venue-title, #wfc-title",
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: "power2.out",
          force3D: true
        }
      );

      // 2. Main Content Cards Entrance
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

    return () => ctx.revert();
  }, [pathname]);

  return <>{children}</>;
}
