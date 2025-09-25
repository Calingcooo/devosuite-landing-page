"use client";

import React from "react";
import { LuCircleCheck, LuArrowRight } from "react-icons/lu";

import { demoOverView, demoCardDetails } from "../data/demoPage";
import Card from "../components/ui/card/Card";
import DemoVideo from "../components/demo/DemoVideo";

const page = () => {
  return (
    <div className="bg-blue-200/20">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          See DevoSuite in Action
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Watch our interactive demo to see how DevoSuite can streamline your
          business operations.
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Side */}
        <Card
          className="border-gray-200 bg-white text-start w-1/2"
          bordered
          shadow="sm"
        >
          <h3 className="text-2xl font-semibold text-stone-800">
            Interactive Demo
          </h3>
          <p className="text-gray-500 text-start">
            15-minute walkthrough of DevoSuite's key features
          </p>

          <DemoVideo />

          {/* Demo Overview */}
          <div className="mt-6 space-y-4">
            {demoOverView.map((overview) => (
              <div
                key={overview.id}
                className="flex items-center gap-3 text-sm"
              >
                <LuCircleCheck className="w-7 h-7 text-blue-500 flex-shrink-0" />
                <span className="text-gray-800">{overview.title}</span>
              </div>
            ))}

            <div className="mt-6 space-y-4">
              <button className="w-full gap-5 flex items-center justify-center rounded-lg h-12 shadow-md font-medium tracking-wide bg-blue-500 hover:bg-blue-600 hover:scale-102 transition-all duration-200 text-white capitalize cursor-pointer">
                <span>start free trial</span>
                <LuArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full gap-5 flex items-center justify-center rounded-lg h-12 shadow-md font-medium tracking-wide bg-gray-200 hover:bg-blue-200/20 text-stone-900 capitalize cursor-pointer">
                cotact sales team
              </button>
            </div>
          </div>
        </Card>

        {/* Right Side */}
        <div className="flex flex-col space-y-6 w-1/2 h-full">
          {demoCardDetails.map((demo) => (
            <Card
              key={demo.id}
              className="border-gray-200 bg-white text-start w-full"
              bordered
              padded
              shadow="md"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-200/50 rounded-lg flex items-center justify-center">
                  <demo.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl text-stone-800 font-semibold leading-none tracking-tight">
                  {demo.title}
                </h3>
              </div>

              <p className="text-gray-500 mb-4">
                See how our dashboard provides instant insights into your
                business performance with customizable reports and KPI tracking.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                {demo.list.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
            </Card>
          ))}

          {/* Demo Schedule */}
          <div className="bg-blue-100/50 text-start rounded-lg p-6 border border-gray-300">
            <h4 className="font-semibold text-stone-800 mb-3">
              Want a personalized demo?
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              Schedule a one-on-one demo with our team to see how DevoSuite fits
              your specific business needs.
            </p>
            <button className="w-full bg-white border border-gray-200 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
              Schedule Live Demo
            </button>
          </div>

          {/* Popular Demo Topics */}
          <div className="bg-gray-200 text-start rounded-lg p-6 border border-gray-300">
            <h4 className="font-semibold text-stone-900 mb-3">
              Most Requested Demo Topics
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">• Multi-location management</div>
              <div className="text-gray-500">• BIR compliance features</div>
              <div className="text-gray-500">• Mobile app functionality</div>
              <div className="text-gray-500">• Custom workflows</div>
              <div className="text-gray-500">• Integration capabilities</div>
              <div className="text-gray-500">• Reporting & analytics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
