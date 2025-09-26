import React from "react";
import clsx from "clsx";
import {
  LuBuilding,
  LuUsers,
  LuZap,
  LuHeadphones,
  LuCheck,
  LuStar,
  LuArrowRight,
} from "react-icons/lu";
import { pricingPlans } from "../data/pricingPlans";
import Card from "../components/ui/card/Card";
import PricingCard from "../components/ui/card/PricingCard";

const page = () => {
  const steps = [
    {
      step: "1",
      title: "Choose Your Plan",
      description:
        "Select the plan that best fits your business needs and budget.",
      icon: LuBuilding,
    },
    {
      step: "2",
      title: "Sign Up & Setup",
      description:
        "Create your account and configure DevoSuite for your business.",
      icon: LuUsers,
    },
    {
      step: "3",
      title: "Import Your Data",
      description: "Migrate your existing data with our guided import tools.",
      icon: LuZap,
    },
    {
      step: "4",
      title: "Train Your Team",
      description:
        "Get your team up to speed with our comprehensive training resources.",
      icon: LuHeadphones,
    },
  ];
  return (
    <div className="bg-blue-200/20">
      <div className="container mx-auto px-6 py-3 flex flex-col items-center justify-between gap-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Get Started with DevoSuite
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Transform your business operations in just 4 simple steps. Our team
            will guide you every step of the way.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          {/* Steps */}
          <div className="flex flex-col mb-16">
            <h4 className="text-3xl font-bold text-gray-700 text-center mb-12 capitalize">
              how it works
            </h4>
            <div className="flex flex-col md:flex-row gap-8">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  bordered
                  padded
                  shadow="sm"
                  className="relative bg-gradient-card border-gray-300"
                >
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-200/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 text-gray-100 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Choose Plan */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              Select the perfect plan for your business size and requirements.
              All plans include a 30-day free trial.
            </p>

            {/* Price Card */}
            <div className="flex flex-col md:flex-row items-center justify-evenly mb-16">
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
                        : "border border-gray-200 bg-white hover:shadow-lg"
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
                      <h3 className="text-2xl font-bold text-gray-800">
                        {p.name}
                      </h3>

                      {/* Card Pricing */}
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-blue-600">
                          {p.price}
                        </span>
                        <span className="text-gray-500 text-lg">
                          {p.period}
                        </span>
                      </div>

                      {/* Card Description */}
                      <p className="mt-4 text-gray-500 text-md">
                        {p.description}
                      </p>
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
                      {/* Primary CTA */}
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full rounded-md py-2 cursor-pointer hover:shadow-sm transition-colors">
                        Start Free Trial
                      </button>

                      {/* Secondary CTA as subtle link */}
                      <button className="text-blue-500 hover:text-blue-600 hover:underline text-sm font-medium cursor-pointer">
                        Or Subscribe Now
                      </button>
                    </div>
                  </PricingCard>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <Card bordered padded className="text-center bg-blue-200/20 rounded-2xl p-12 border-gray-300">
              <h2 className="text-3xl font-bold text-gray-700 mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
                Join hundreds of Filipino businesses already using DevoSuite to
                streamline their operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex px-10 items-center h-10 gap-3 justify-center text-white rounded-lg bg-blue-500 hover:scale-105 hover:bg-blue-600 transition-all duration-200 cursor-pointer">
                  Start Free Trial
                  <LuArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="bg-white h-10 px-10 rounded-lg hover:bg-blue-200/30 border border-gray-300 transition-colors duration-200 cursor-pointer">Schedule Demo</button>
              </div>
              <div className="text-muted-foreground text-sm mt-6">
                ✓ 30-day free trial &nbsp;•&nbsp; ✓ No credit card required
                &nbsp;•&nbsp; ✓ Setup in minutes
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
