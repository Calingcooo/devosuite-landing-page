import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import StepCreateAccount from "./steps/StepCreateAccount";
import StepVerifyEmail from "./steps/StepVerifyEmail"
import StepPaymentDetails from "./steps/StepPaymentDetails";
import StepCompleteOrder from "./steps/StepCompleteOrder";
import Header from "./Header";
import Footer from "./Footer";


const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepCreateAccount onNext={() => setCurrentStep(2)} />;
      case 2:
        return <StepVerifyEmail onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />;
      case 3:
        return <StepPaymentDetails onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} />;
      case 4:
        return <StepCompleteOrder onBack={() => setCurrentStep(3)} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-blue-200/20 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <StepIndicator currentStep={currentStep} />
        <Header currentStep={currentStep} />
        <div className="flex items-center justify-center w-full mt-8">
          {renderStep()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MultiStepForm;
