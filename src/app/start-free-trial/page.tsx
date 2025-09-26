"use client";

import React from "react";
import {
  LuCircleCheck,
  LuShield,
  LuUsers,
  LuClock,
  LuArrowRight,
} from "react-icons/lu";
import { employeeCountOptions, industryOptions } from "../data/selectData"
import InputField from "../components/ui/form_field/InputField";
import CustomSelect from "../components/ui/select/CustomSelect";
import TextAreaField from "../components/ui/form_field/TextAreaField";
import Card from "../components/ui/card/Card";

const page = () => {
  const freeTrialCardDetails = [
    {
      id: 1,
      title: "30-Day Free Trial",
      subtitle:
        "Full access to all DevoSuite features with no limitations or hidden fees.",
      icon: LuCircleCheck,
    },
    {
      id: 2,
      title: "No Credit Card Required",
      subtitle:
        "Start your trial immediately without providing payment information.",
      icon: LuShield,
    },
    {
      id: 3,
      title: "Dedicated Support",
      subtitle: "Get personalized onboarding and support from our expert team.",
      icon: LuUsers,
    },
    {
      id: 4,
      title: "Quick Setup",
      subtitle:
        "Get up and running in minutes with our streamlined setup process.",
      icon: LuClock,
    },
  ];



  return (
    <div className="bg-blue-200/20">
      {/* Header */}
      <div className="text-center py-12 px-2">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          Start Your Free Trial
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Experience the full power of DevoSuite with a 30-day free trial. No
          credit card required.
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Side */}
        <Card
          padded
          bordered
          className="container mx-auto px-6 py-12 flex flex-col items-start shadow-md border-gray-200 bg-white w-full md:w-1/2"
        >
          <h3 className="text-2xl font-semibold text-stone-800">
            Get Started Today
          </h3>
          <p className="text-gray-500 text-start">
            Fill out the form below to start your free trial
          </p>

          {/* Left Side Form */}
          <form className="w-full mt-8 space-y-6">
            <div className="flex flex-col md:flex-row gap-3">
              <InputField
                name="first_name"
                label="first name"
                isRequired
                className="text-start w-full"
              />
              <InputField
                name="last_name"
                label="last name"
                isRequired
                className="text-start w-full"
              />
            </div>

            <InputField
              name="email"
              label="business email"
              isRequired
              className="text-start w-full"
            />

            <div className="flex flex-col md:flex-row gap-3">
              <InputField
                name="company_name"
                label="company name"
                isRequired
                className="text-start w-full"
              />
              <InputField
                name="phone_number"
                label="phone number"
                isRequired
                className="text-start w-full"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <CustomSelect
                options={employeeCountOptions}
                defaultValue="Select range"
                onChange={() => {}}
                position="bottom"
                size="full"
                label="Number of Employees"
                value=""
              />

              <CustomSelect
                options={industryOptions}
                defaultValue="Select industry"
                onChange={() => {}}
                position="bottom"
                size="full"
                label="Industry"
                value=""
              />
            </div>

            <TextAreaField
              name="requirements"
              direction="col"
              placeholder="Tell us about your specific business needs..."
              label="Specific Requirements (Optional)"
              className="text-start w-full"
              isRequired={false}
            />

            <button className="w-full gap-5 flex items-center justify-center rounded-lg h-12 shadow-md font-medium tracking-wide bg-blue-500 hover:bg-blue-600 hover:scale-102 transition-all duration-200 text-white capitalize cursor-pointer">
              <span>start free trial</span>
              <LuArrowRight className="w-5 h-5" />
            </button>

            <div className="text-center text-xs tracking-wide text-gray-500">
              By starting your trial, you agree to our Terms of Service and
              Privacy Policy.
            </div>
          </form>
        </Card>

        {/* Right Side Form */}
        <div className="flex flex-col space-y-6 w-full md:w-1/2">
          {freeTrialCardDetails.map((t) => (
            <Card
              key={t.id}
              padded
              bordered
              className="flex flex-col items-start w-full bg-white border-gray-200 mb-5 shadow-sm"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-200/50 rounded-lg flex items-center justify-center">
                  <t.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl text-gray-700 font-semibold leading-none tracking-tight">
                  {t.title}
                </h3>
              </div>

              {/* Subtitle */}
              <div className="text-gray-500">
                <p className="text-sm leading-relaxed">{t.subtitle}</p>
              </div>
            </Card>
          ))}

          {/* What happens next card */}
          <Card
            className="text-start rounded-lg border border-gray-300 bg-blue-200/20"
            shadow="none"
          >
            <h4 className="font-semibold text-stone-900 mb-2">
              What happens next?
            </h4>

            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <LuCircleCheck className="w-4 h-4 text-blue-500" />
                Instant access to your DevoSuite trial account
              </li>
              <li className="flex items-center gap-2">
                <LuCircleCheck className="w-4 h-4 text-blue-500" />
                Welcome email with setup instructions
              </li>
              <li className="flex items-center gap-2">
                <LuCircleCheck className="w-4 h-4 text-blue-500" />
                Optional onboarding call with our team
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
