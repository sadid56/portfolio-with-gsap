"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function TransitionOverlay() {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(overlayRef.current, {
      y: 0,
      duration: 0.7,
      ease: "power2.inOut",
    }).to(overlayRef.current, {
      y: "-100%",
      duration: 0.7,
      delay: 0.2,
      ease: "power2.inOut",
    });
  }, [pathname]);

  return <div ref={overlayRef} className='fixed inset-0 bg-black z-50 translate-y-full pointer-events-none' />;
}
