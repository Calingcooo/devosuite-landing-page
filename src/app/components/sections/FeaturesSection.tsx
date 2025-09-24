import React from "react";
import Card from "../ui/card/Card";
import { features } from "@/app/data/features";

const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Comprehensive ERP Modules
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Built by Filipinos for Filipino businesses - modular architecture
            that integrates your core business functions into one intelligent,
            centralized platform.
          </p>{" "}
        </div>

        {/* Section Cards */}
        <div className="flex flex-wrap">
          {features.map((f, i) => (
            <div key={i} className="w-full p-4 lg:w-1/3 flex hover:scale-[1.01] cursor-pointer transition-all duration-200">
              <Card bordered className="bg-gradient-card text-start hover:shadow-[0_2px_4px_rgba(0,128,255,0.0.2)] border-gray-200">
                {/* Card Header */}
                <div className="pb-8">
                  <div className="w-12 h-12 bg-blue-200/50 mb-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <f.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl text-gray-500 font-semibold leading-none tracking-tight">
                    {f.title}
                  </h3>
                </div>
                {/* Card Description */}
                <div className="text-gray-500">
                  <p className="text-sm leading-relaxed">{f.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
