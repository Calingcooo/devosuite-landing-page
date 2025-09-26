"use client";

import React, { useState } from "react";
import { LuUser } from "react-icons/lu";
import StepIndicator from "../components/StepIndicator";

const page = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  return (
    <div className="bg-blue-200/20">
      <div className="container mx-auto">
        <StepIndicator currentStep={currentStep} />

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-gray-700">
            Create Your Account
          </h3>
          <p className="text-gray-500">
            Get started with your DevoSuite Pro subscription
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
