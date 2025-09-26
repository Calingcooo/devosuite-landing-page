"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuMoveLeft } from "react-icons/lu";

const Header = () => {
  const router = useRouter();
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Image
            src="/assets/banner-logo.png"
            alt="DevoSuite - Enterprise Solutions Made Simple"
            className="j-20 w-auto cursor-pointer"
            onClick={() => router.push("/")}
            width={500}
            height={500}
          />
          <button
            className="flex items-center gap-2 text-gray-400 hover:text-gray-500 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <LuMoveLeft className="w-6 h-6" />
            Back to Home
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
