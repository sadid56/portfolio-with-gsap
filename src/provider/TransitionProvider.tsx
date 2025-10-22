"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type TransitionProviderProps = {
  children: React.ReactNode;
};

export default function TransitionProvider({ children }: TransitionProviderProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate entering
      gsap.fromTo(".page-transition", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
    }, containerRef);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div ref={containerRef} className='relative overflow-hidden'>
      <div key={pathname} className='page-transition'>
        {children}
      </div>
    </div>
  );
}
