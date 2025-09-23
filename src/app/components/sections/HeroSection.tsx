import React from "react";
import Image from "next/image";

const HeroSection = () => {
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
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 border">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-black/60"></div> {/* Gradient overlay */}

      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <div className="mb-16">
          <div className="inline-block bg-white/5 backdrop-blur-lg rounded-3xl p-8 mb-8 shadow-hero border border-white/10">
            <Image
              src="/assets/banner-logo.png"
              alt="DevoSuite - Enterprise Solutions Made Simple"
              className="h-32 w-auto mx-auto filter brightness-0 invert"
              width={500}
              height={500}
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          All-in-One ERP
          <span className="block text-white/90">for Growing Businesses</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
          Integrate Inventory, Sales, Accounting, HR, and more into one
          intelligent platform. Built by Filipinos for Filipino businesses with
          real-time insights and secure cloud access.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-blue-500 hover:bg-blue-700 hover:scale-105 transition-transform duration-200 px-8 py-4 font-bold rounded-xl cursor-pointer text-white shadow-md">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-transform duration-200 backdrop-blur-sm rounded-xl cursor-pointer shadow-md">
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
