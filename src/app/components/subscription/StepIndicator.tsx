import React from "react";
import { LuCheck } from "react-icons/lu";

type StepsIndicatorProps = {
  currentStep: number;
};

const StepIndicator: React.FC<StepsIndicatorProps> = ({ currentStep = 1 }) => {
  const steps = [
    { number: 1, label: "Create account", completed: currentStep > 1 },
    { number: 2, label: "Verify email", completed: currentStep > 2 },
    { number: 3, label: "Payment details", completed: currentStep > 3 },
    { number: 4, label: "Order summary", completed: currentStep > 4 },
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-center flex-wrap">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex items-center mb-1 md:mb-0">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  step.completed || currentStep === step.number
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                {step.completed ? <LuCheck className="w-4 h-4" /> : step.number}
              </div>
              <span
                className={`ml-2 text-sm font-medium ${
                  step.completed || currentStep === step.number
                    ? "text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-px mx-4 ${
                  step.completed ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
