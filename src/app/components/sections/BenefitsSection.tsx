import React from "react";
import { LuCircleCheck } from "react-icons/lu";

import { benefits, CardDetails } from "@/app/data/benefits";
import Card from "../ui/card/Card";

const BenefitsSection = () => {

  return (
    <section className="bg-[#e6f5ff] py-24">
      <div className="container flex flex-col items-center md:flex-row gap-8 mx-auto px-6">
        {/* Left Side */}
        <div className="flex items-center w-full md:w1/2">
          <div className="text-start">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose DevoSuite?
            </h2>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Developed by Devolution PH, DevoSuite is tailored for growing
              Filipino businesses seeking a flexible, scalable ERP solution with
              local compliance and support.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-200/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="min-w-48 py-4 rounded-xl bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 shadow-md font-semibold transition-transform duration-300 ease-in-out cursor-pointer">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4 flex flex-col justify-evenly w-full md:w1/2">
          {CardDetails.map((c) => (
            <div key={c.id}>
              <Card bordered className="border-gray-200 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <LuCircleCheck className="w-12 h-12 text-blue-500" />
                  <h3 className="text-2xl font-bold text-gray-800 text-start">{c.header}</h3>
                </div>
                <p className="text-gray-500 text-start">
                  {c.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
