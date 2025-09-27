import React from "react";
import { LuArrowRight } from "react-icons/lu";
import Card from "../../ui/card/Card";
import InputField from "../../ui/form_field/InputField";

type StepCreateAccountProps = {
  onNext: () => void;
};

const StepCreateAccount: React.FC<StepCreateAccountProps> = ({ onNext }) => {
  const fields = [
    { id: "first_name", label: "first name", isRequired: true },
    { id: "last_name", label: "last name", isRequired: true },
    { id: "email", label: "business email", isRequired: true },
    { id: "password", label: "password", isRequired: true },
    { id: "company_name", label: "company name", isRequired: true },
  ];

  return (
    <Card
      padded
      bordered
      shadow="md"
      className="bg-white border-gray-300 md:min-w-2xl"
    >
      <form className="space-y-6">
        {fields.map((f) => (
          <InputField
            key={f.id}
            name={f.id}
            label={f.label}
            isRequired={f.isRequired}
            className="text-start w-full"
          />
        ))}

        <button
          className="flex items-center justify-center w-full py-3 capitalize rounded-lg font-semibold gap-5 text-white bg-blue-500 shadow-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
          onClick={onNext}
        >
          create account
          <LuArrowRight className="w-4 h-4" />
        </button>

        <p className="text-center text-gray-500 text-xs mt-2">
          By creating an account, you agree to our{" "}
          <a href="/terms" className="underline hover:text-gray-700">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline hover:text-gray-700">
            Privacy Policy
          </a>
        </p>
      </form>
    </Card>
  );
};

export default StepCreateAccount;
