"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && <Header />}
      <main>{children}</main>
    </>
  );
}

export default LayoutWrapper;
