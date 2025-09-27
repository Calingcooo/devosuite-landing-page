import React, { useState } from "react";
import {
  LuCircleCheckBig,
  LuCheck,
  LuCreditCard,
  LuArrowRight,
  LuShield,
} from "react-icons/lu";
import Card from "../../ui/card/Card";
import InputField from "../../ui/form_field/InputField";
import clsx from "clsx";

type StepPaymentDetailsProps = {
  onNext: () => void;
  onPrev: () => void;
};

const StepPaymentDetails: React.FC<StepPaymentDetailsProps> = ({
  onNext,
  onPrev,
}) => {
  const [billingPeriod, setBillingPeriod] = useState<string>("monthly");

  const benefitsFirstCol = [
    "Unlimited projects",
    "Advanced analytics",
    "Custom integrations",
  ];

  const benefitsSecondCol = [
    "Priority support",
    "Team collaboration tools",
    "24/7 customer support",
  ];

  const whatYouGet = [
    "Unlimited projects",
    "Priority support",
    "Advanced features",
  ];

  return (
    <div className="flex flex-col md:min-w-2xl space-y-5">
      <div className="w-full bg-blue-200/30 border border-blue-400 rounded-lg p-5">
        <div className="flex items-center mb-3">
          <div className="w-12 h-12 shrink-0 bg-blue-500 rounded-lg flex items-center justify-center">
            <LuCircleCheckBig className="w-6 h-6 text-white" />
          </div>
          <div className="ml-1 text-start">
            <p className="text-xl text-blue-800 font-bold capitalize">
              DevoSuite Pro Plan
            </p>
            <p className="text-blue-500 text-sm w-full md:max-w-64">
              Perfect for growing businesses
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <ul className="w-full md:w-1/2 space-y-2">
            {benefitsFirstCol.map((b, i) => (
              <li
                key={i}
                className="flex text-sm items-center text-blue-800 gap-2"
              >
                <LuCheck className="w-5 h-5 text-blue-800" />
                {b}
              </li>
            ))}
          </ul>
          <ul className="w-full md:w-1/2 space-y-2 mt-2 md:mt-0">
            {benefitsSecondCol.map((b, i) => (
              <li
                key={i}
                className="flex text-sm items-center text-blue-800 gap-2"
              >
                <LuCheck className="w-5 h-5 text-blue-800" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Payment Details */}
      <Card
        padded
        bordered
        shadow="md"
        className="bg-white border-gray-300 w-full text-start"
      >
        <h4 className="text-gray-700 font-bold text-xl mb-5">
          Choose Your Billing Period
        </h4>

        {/* Monthly billing */}
        <label className="flex items-center gap-3 p-3 mb-2 border rounded-lg border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="radio"
            name="billing"
            value="monthly"
            checked={billingPeriod === "monthly"}
            onChange={(e) => setBillingPeriod(e.target.value)}
            className="w-4 h-4 text-blue-500"
          />
          <div className="flex-1 flex justify-between items-center">
            <span className="font-medium text-gray-700">Monthly Billing</span>
            <span className="text-gray-600">₱ /month</span>
          </div>
        </label>

        {/* Yearly billing */}
        <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors border-green-200 bg-green-50">
          <input
            type="radio"
            name="billing"
            value="yearly"
            checked={billingPeriod === "yearly"}
            onChange={(e) => setBillingPeriod(e.target.value)}
            className="w-4 h-4 text-blue-500"
          />

          <div className="flex-1 flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-700">Yearly Billing</span>
              <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-medium">
                20% OFF
              </span>
            </div>
            <div className="text-right">
              <div className="text-gray-600">₱ /month</div>
              <div className="text-xs text-green-600">Save ₱/year</div>
            </div>
          </div>
        </label>
      </Card>

      {/* Payment Information */}
      <Card
        padded
        bordered
        shadow="md"
        className="bg-white border-gray-300 w-full text-start"
      >
        <h4 className="flex items-center gap-2 text-gray-700 font-bold text-xl mb-5">
          <div className="w-8 h-8 shrink-0 bg-blue-200 rounded-lg flex items-center justify-center">
            <LuCreditCard className="w-5 h-5 text-blue-500" />
          </div>
          Payment Information
        </h4>

        <InputField
          name="card_number"
          label="card number"
          isRequired
          placeholder="4532 1234 5678 9012"
          className="text-start w-full mb-5"
        />

        <div className="flex flex-col md:flex-row gap-2">
          <InputField
            name="expiry"
            label="expiration date"
            isRequired
            placeholder="12/26"
            className="text-start w-full mb-5 md:mb-0"
          />
          <InputField
            name="security"
            label="security code"
            isRequired
            placeholder="123"
            className="text-start w-full"
          />
        </div>

        <div className="flex gap-2 flex-col md:flex-row justify-end w-full mt-5">
          <button
            className="w-full md:w-auto px-5 gap-3 flex items-center justify-center rounded-lg h-10 shadow-md tracking-wide border border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-700 capitalize font-semibold cursor-pointer"
            onClick={onPrev}
          >
            back
          </button>
          <button
            className="w-full md:w-auto px-5 gap-3 flex items-center justify-center rounded-lg h-10 shadow-md font-medium tracking-wide bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white cursor-pointer"
            onClick={onNext}
          >
            <span className="capitalize">continue to review</span>
            <LuArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Card>

      {/* Order Summary */}
      <Card
        padded
        bordered
        shadow="md"
        className="bg-white border-gray-300 w-full text-start"
      >
        <h4 className="text-gray-700 font-bold text-xl mb-5 capitalize">
          order summary
        </h4>

        <div
          className={clsx(
            "flex items-center justify-between mb-5",
            billingPeriod === "monthly" ? "border-b border-gray-300" : ""
          )}
        >
          <span className="capitalize text-gray-500">pro plan</span>
          <span className="font-bold text-md text-gray-700">₱29/month</span>
        </div>

        {billingPeriod === "yearly" && (
          <>
            <div className="flex justify-between items-center text-green-600">
              <span>Yearly discount applied</span>
              <span>₱111</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Billed yearly</span>
                <span>₱222</span>
              </div>
            </div>
          </>
        )}

        <div
          className={clsx(
            "flex items-center justify-between",
            billingPeriod === "yearly" ? "border-t border-gray-300 pt-2" : ""
          )}
        >
          <span className="capitalize font-semibold text-lg">total</span>
          <span className="font-bold text-md text-gray-900">₱29/month</span>
        </div>

        {/* What You Get */}
        <div className="w-full bg-blue-200/30 border border-blue-400 rounded-lg p-5 mt-5">
          <h2 className="text-sm font-bold text-blue-900">What you get:</h2>
          <ul className="space-y-2 mt-2">
            {whatYouGet.map((g, i) => (
              <li
                key={i}
                className="flex text-xs items-center text-blue-800 gap-1"
              >
                <LuCheck className="w-3 h-3 text-blue-800" />
                {g}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
          <LuShield className="w-4 h-4" />
          <span>SSL secured payment</span>
        </div>
      </Card>
    </div>
  );
};

export default StepPaymentDetails;
