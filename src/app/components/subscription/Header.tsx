import React from "react";
import { LuUser } from "react-icons/lu";

type FormHeaderProps = {
  currentStep: number;
};

const Header: React.FC<FormHeaderProps> = ({ currentStep }) => {
  const stepsHeader = [
    {
      id: "create_account",
      title: "create your account",
      subTitle: "Get started with DevoSuite Pro by creating your account",
    },
    {
      id: "account_verification",
      title: "Verify Your Email",
      subTitle: "Verify your email address to secure your account",
    },
    {
      id: "payment_details",
      title: "Subscribe to Pro Plan",
      subTitle: "Choose your plan and enter payment information",
    },
    {
      id: "complete_order",
      title: "Complete Your Order",
      subTitle: "Review and complete your subscription",
    },
  ];

  const step = stepsHeader[currentStep - 1];

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="flex items-center gap-1 text-2xl font-semibold text-gray-700 capitalize">
        {step.id === "create_account" && (
          <div className="w-10 h-10 shrink-0 bg-blue-200/30 rounded-lg flex items-center justify-center">
            <LuUser className="w-6 h-6 text-blue-500" />
          </div>
        )}

        {step.title}
      </h3>
      <p className="text-gray-500 text-sm mt-2 capitalize">{step.subTitle}</p>
    </div>
  );
};

export default Header;
