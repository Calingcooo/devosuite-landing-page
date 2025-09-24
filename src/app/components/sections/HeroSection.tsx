"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/assets/hero-background.jpg')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://ik.imagekit.io/vah26qifw/Devolution%20PH/devosuite/assets/hero-bg_dqO3OZ0OP.mp4?updatedAt=1758600576086"
          type="video/mp4"
        />
      </video>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 border">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/60"></div>{" "}
      <div className="container relative z-10 mx-auto px-6 py-5 text-center text-white">
        <div className="mb-16">
          <div className="inline-block bg-white/5 backdrop-blur-lg rounded-3xl p-8 mb-8 shadow-[0_20px_40px_#007FFF26] border border-white/10">
            <Image
              src="/assets/banner-logo-2.png"
              alt="DevoSuite - Enterprise Solutions Made Simple"
              className="h-32 w-auto mx-auto filter brightness-0 invert"
              width={500}
              height={500}
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          All-in-One ERP
          <span className="block text-white/90">for Growing Businesses</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
          Integrate Inventory, Sales, Accounting, HR, and more into one
          intelligent platform. Built by Filipinos for Filipino businesses with
          real-time insights and secure cloud access.
        </p>

        <div className="flex flex-col sm:flex-row flex-1 gap-4 justify-center items-center mb-12">
          <button
            className="bg-blue-500 hover:bg-blue-700 hover:scale-105 w-full sm:w-auto transition-transform duration-200 h-14 rounded-lg px-10 text-lg py-4 font-bold cursor-pointer text-white shadow-md"
            onClick={() => router.push("/start-free-trial")}
          >
            Start Free Trial
          </button>
          <button className="bg-white/10 border border-white/20 text-white w-full sm:w-auto hover:bg-white/20 h-14 rounded-lg px-10 text-lg py-4 font-bold transition-transform duration-200 backdrop-blur-sm cursor-pointer shadow-md">
            Watch Demo
          </button>
        </div>

        <div className="text-white/80 text-sm">
          ✓ 30-day free trial &nbsp;•&nbsp; ✓ No credit card required
          &nbsp;•&nbsp; ✓ Setup in minutes
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
