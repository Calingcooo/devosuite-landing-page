import React from "react";
import { LuMail, LuArrowRight, LuArrowLeft } from "react-icons/lu";
import Card from "../../ui/card/Card";
import InputField from "../../ui/form_field/InputField";

type StepVerifyEmailProps = {
  onNext: () => void;
  prevStep: () => void;
};

const StepVerifyEmail: React.FC<StepVerifyEmailProps> = ({
  onNext,
  prevStep,
}) => {
  return (
    <Card
      padded
      bordered
      shadow="md"
      className="flex flex-col items-center justify-center bg-white border-gray-300 md:min-w-2xl relative"
    >
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-12 h-12 shrink-0 bg-blue-200/30 rounded-full flex items-center justify-center mb-2">
          <LuMail className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="text-gray-500 mb-2">
          We&apos;ve sent a verification code to
        </h3>
        <p className="font-semibold text-gray-800">john.doe@company.com</p>
      </div>

      <p className="text-sm font-semibold text-gray-500">
        Enter 6-digit verification code
      </p>

      <InputField
        name="code"
        isRequired
        textAlign="center"
        placeholder="123456"
        className="text-center w-full md:w-1/2 mt-2 mb-4 placeholder:text-gray-100"
      />

      <button
        type="submit"
        onClick={onNext}
        className="w-full md:w-1/2 gap-3 flex items-center justify-center rounded-lg h-12 shadow-md font-medium tracking-wide bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white cursor-pointer"
      >
        <span>Verify Email</span>
        <LuArrowRight className="w-4 h-4" />
      </button>

      <div className="text-center space-y-2 mt-3">
        <p className="text-sm text-gray-500">Didn't receive the code?</p>
        <button
          type="button"
          className="text-blue-500 hover:text-blue-600 hover:underline text-sm font-medium cursor-pointer"
        >
          Resend verification code
        </button>
      </div>

      <button
        type="button"
        onClick={prevStep}
        className="absolute flex gap-3 items-center top-3 left-5 text-gray-600 hover:text-gray-800 font-medium cursor-pointer"
      >
        <LuArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>
    </Card>
  );
};

export default StepVerifyEmail;
