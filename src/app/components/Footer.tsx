import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white mt-12 pb-6 border-t border-white/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Branding */}
        <div className="text-center md:text-left">
          <Image
            src="/assets/banner-logo.png"
            alt="DevoSuite - Enterprise Solutions Made Simple"
            className="h-12 w-auto mx-auto md:mx-0 filter brightness-0 invert"
            width={500}
            height={500}
          />
          <p className="text-sm mt-3 opacity-90">
            A product by <span className="font-semibold">Devolution PH</span>
          </p>
          <p className="text-xs mt-2 opacity-70">
            © {new Date().getFullYear()} Devolution PH. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center gap-8 text-sm">
          <ul className="flex gap-6">
            <li>
              <a
                href="#features"
                className="hover:text-blue-200 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-200 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blue-200 transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-200 transition-colors">
                About
              </a>
            </li>
          </ul>
          <ul className="flex gap-6">
            <li>
              <a href="#privacy" className="hover:text-blue-200 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-blue-200 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
