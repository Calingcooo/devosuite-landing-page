import React from "react";
import {
  LuFileText,
  LuUser,
  LuCircleCheckBig,
  LuCreditCard,
  LuCheck,
  LuShield,
  LuLock,
  LuArrowRight,
  LuCircleHelp,
} from "react-icons/lu";
import Card from "../../ui/card/Card";

type StepCompleteOrderProps = {
  onBack: () => void;
};

const StepCompleteOrder: React.FC<StepCompleteOrderProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col gap-5 md:min-w-2xl text-start">
      <Card
        padded
        bordered
        shadow="md"
        className="bg-white border-gray-300 w-full"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="w-10 h-10 shrink-0 bg-blue-200/30 rounded-lg flex items-center justify-center">
            <LuFileText className="w-6 h-6 text-blue-500" />
          </div>

          <h3 className="text-gray-700 font-bold text-xl capitalize">
            review your order
          </h3>
        </div>

        {/* Account information */}
        <div className="flex flex-col mb-5">
          <div className="flex flex-row items-center gap-2">
            <LuUser className="w-4 h-4 text-blue-500" />
            <h2 className="capitalize font-semibold text-md text-gray-700">
              account information
            </h2>
          </div>

          <div className="mt-2 text-gray-700 bg-gray-100 rounded-lg py-4 px-2">
            <ul className="[&_li]:capitalize [&_span]:font-bold text-sm space-y-2">
              <li>
                <span>name: </span>John Doe
              </li>
              <li>
                <span>Email: </span>john.doe@company.com
              </li>
              <li>
                <span>Company: </span>Acme Corp
              </li>
            </ul>
          </div>
        </div>

        {/* Subscription Details */}
        <div className="flex flex-col mb-5">
          <div className="flex flex-row items-center gap-2">
            <LuCircleCheckBig className="w-4 h-4 text-blue-500" />
            <h2 className="capitalize font-semibold text-md text-gray-700">
              Subscription Details
            </h2>
          </div>

          <div className="mt-2 text-gray-700 bg-gray-100 rounded-lg py-4 px-2">
            <ul className="[&_li]:capitalize [&_span]:font-bold text-sm space-y-2">
              <li>
                <span>plan: </span>Devosuite Pro
              </li>
              <li>
                <span>billing: </span>Yearly {"(Save 20%)"}
              </li>
              <li>
                <span>total: </span>$278/year
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <LuCreditCard className="w-4 h-4 text-blue-500" />
            <h2 className="capitalize font-semibold text-md text-gray-700">
              payment method
            </h2>
          </div>

          <span className="mt-2 flex flex-row items-center gap-2 capitalize text-sm text-gray-700 bg-gray-100 rounded-lg py-4 px-2">
            <LuCreditCard className="w-4 h-4" />
            •••• •••• •••• 9012
          </span>
        </div>
      </Card>

      <Card
        padded
        bordered
        shadow="md"
        className="bg-white border-gray-300 md:min-w-2xl text-start"
      >
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-5">
          <div className="w-12 h-12 shrink-0 bg-green-300/30 rounded-full flex items-center justify-center">
            <LuCircleCheckBig className="w-8 h-8 text-green-600" />
          </div>

          <h3 className="text-gray-700 font-bold text-xl capitalize">
            ready to subscribe!
          </h3>
          <span className="text-gray-500 text-sm">
            Click the button below to complete your subscription and start using
            DevoSuite Pro
          </span>
        </div>

        <div className="flex flex-row items-center px-2 py-3 h-10 w-full bg-green-200/50 rounded-md mb-2 gap-2">
          <LuCheck className="w-4 h-4 text-green-500" />
          <span className="text-sm text-green-700">
            14-day money-back guarantee
          </span>
        </div>
        <div className="flex flex-row items-center px-2 py-3 h-10 w-full bg-blue-200/50 rounded-md mb-2 gap-2">
          <LuShield className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-blue-700">
            Secure 256-bit SSL encryption
          </span>
        </div>
        <div className="flex flex-row items-center px-2 py-3 h-10 w-full bg-gray-200/50 rounded-md mb-5 gap-2">
          <LuLock className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">
            Cancel anytime, no questions asked
          </span>
        </div>

        <button className="w-full px-5 gap-3 flex items-center justify-center rounded-lg h-12 shadow-md font-medium tracking-wide bg-green-500 hover:bg-green-600 transition-colors duration-200 text-white cursor-pointer">
          <span className="capitalize">complete subscription</span>
          <LuArrowRight className="w-4 h-4" />
        </button>

        <button
          className="w-full px-5 rounded-lg h-12 tracking-wide transition-colors font-semibold duration-200 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onBack}
        >
          <span className="capitalize text-sm">back to payment details</span>
        </button>
      </Card>
    </div>
  );
};

export default StepCompleteOrder;
