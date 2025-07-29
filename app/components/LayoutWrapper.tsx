"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderSection from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="page_wrapper">
      {/* Preloader */}
      <div id="preloader">
        <div id="loader"></div>
      </div>

      {!isAuthPage && <HeaderSection />}
      {children}
      {!isAuthPage && <Footer />}
    </div>
  );
}
