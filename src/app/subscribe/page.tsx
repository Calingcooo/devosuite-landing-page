"use client";

import React, { useState } from "react";
import StepIndicator from "../components/StepIndicator";

const Page = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="bg-blue-200/20 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <StepIndicator currentStep={currentStep} />

        <div className="flex flex-col items-center justify-center mt-8">
          <h3 className="text-2xl font-semibold text-gray-700">
            Create Your Account
          </h3>
          <p className="text-gray-500 mt-2">
            Get started with your DevoSuite Pro subscription
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
