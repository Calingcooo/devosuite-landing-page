"use client";
import React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { LuStar, LuCheck } from "react-icons/lu";

import PricingCard from "../ui/card/PricingCard";
import { pricingPlans } from "@/app/data/pricingPlans";

const PricingSection = () => {
  const router = useRouter()

  return (
    <section className="py-12">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Choose the perfect plan for your business size and needs. All plans
            include our core ERP functionality with no hidden fees.
          </p>
        </div>

        {/* Price Card */}
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          {pricingPlans.map((p, i) => (
            <div
              key={i}
              className={clsx(
                "max-w-7xl mx-auto p-4 w-full md:flex-1",
                p.popular ? "order-first md:order-none" : "order-none"
              )}
            >
              <PricingCard
                style={` ${
                  p.popular
                    ? "relative border border-blue-500 shadow-md scale-105 bg-gradient-card hover:shadow-[0_2px_4px_rgba(0,128,255,0.0.3)]"
                    : "border border-gray-200 bg-card hover:shadow-lg"
                } transition-all py-8 px-2 cursor-pointer `}
              >
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-40">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-1">
                      <LuStar className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card Header */}
                <div className="text-center pb-6">
                  {/* Card Title */}
                  <h3 className="text-2xl font-bold text-gray-800">{p.name}</h3>

                  {/* Card Pricing */}
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">
                      {p.price}
                    </span>
                    <span className="text-gray-500 text-lg">{p.period}</span>
                  </div>

                  {/* Card Description */}
                  <p className="mt-4 text-gray-500 text-md">{p.description}</p>
                </div>

                {/* Card Content */}
                <div className="space-y-3 px-3">
                  {p.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex flex-row text-start items-center gap-3"
                    >
                      <LuCheck className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-stone-800">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Buttons */}
                <div className="flex flex-col mt-5 gap-2">
                  <button className="bg-gray-200 hover:bg-gray-300 text-stone-900 font-bold w-full rounded-md py-2 cursor-pointer hover:shadow-sm transition-colors duration-200 ease-in-out">
                    Get Started
                  </button>
                  <button
                    className={clsx(
                      "font-bold w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 cursor-pointer hover:shadow-sm transition-colors duration-200 ease-in-out"
                    )}
                  >
                    Start Free Trial
                  </button>
                </div>
              </PricingCard>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Need a custom solution? We offer tailored packages for enterprise
            clients.
          </p>
          <button className="bg-gray-200 font-bold text-gray-800 px-8 py-3 hover:bg-blue-200/50 rounded-md shadow-lg transition-colors duration-200 cursor-pointer" onClick={() => router.push("/contact-sales")}>
            Contact Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
