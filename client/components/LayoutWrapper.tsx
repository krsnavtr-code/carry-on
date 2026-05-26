"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Hide navbar and footer on auth pages
  const hideNavFooter = pathname?.startsWith("/auth");

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <main className={hideNavFooter ? "" : "flex-grow"}>
        {children}
      </main>
      {!hideNavFooter && <Footer />}
    </>
  );
}
