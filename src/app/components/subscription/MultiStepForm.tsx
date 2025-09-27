import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import StepCreateAccount from "./steps/StepCreateAccount";
import Header from "./Header";
import Footer from "./Footer";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  return (
    <div className="bg-blue-200/20 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <StepIndicator currentStep={currentStep} />
        <Header currentStep={currentStep} />
        <div className="flex items-center justify-center w-full mt-8">
          <StepCreateAccount />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MultiStepForm;
