"use client";

import React from "react";
import {
  LuArrowRight,
  LuMail,
  LuPhone,
  LuMapPin,
  LuUsers,
  LuCalendar,
  LuHeadphones,
} from "react-icons/lu";
import {
  employeeCountOptions,
  industryOptions,
  budgetRangeOptions,
  timelinesOptions,
} from "../data/selectData";
import Card from "../components/ui/card/Card";
import InputField from "../components/ui/form_field/InputField";
import CustomSelect from "../components/ui/select/CustomSelect";
import TextAreaField from "../components/ui/form_field/TextAreaField";

const Page = () => {
  const contactInformation = [
    { icon: LuMail, title: "Email", subTitle: "calingco.je@gmail.com" },
    { icon: LuPhone, title: "Phone", subTitle: "+63 953 544 4502" },
    {
      icon: LuMapPin,
      title: "Address",
      subTitle:
        "Blk 10 Lot 20, Manga Street, Amparo Subd. Caloocan City, Brgy. 179",
    },
  ];

  const benefitsCard = [
    {
      icon: LuUsers,
      title: "Enterprise Support",
      subTitle:
        "Dedicated account manager and priority support for enterprise customers.",
    },
    {
      icon: LuCalendar,
      title: "Custom Implementation",
      subTitle:
        "Tailored implementation plan to fit your business processes and timeline.",
    },
    {
      icon: LuHeadphones,
      title: "Training & Onboarding",
      subTitle:
        "Comprehensive training programs to ensure successful adoption across your team.",
    },
  ];

  return (
    <div className="bg-blue-200/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center py-12 px-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Contact Our Sales Team
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let&apos;s discuss how DevoSuite can transform your business
            operations. Our experts are ready to help.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start py-3 justify-between gap-12">
          {/* Left Side */}
          <Card
            padded
            bordered
            className="container mx-auto px-6 py-12 flex flex-col items-start shadow-md border-gray-300 bg-white w-full md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              Get Started Today
            </h3>
            <p className="text-gray-400 text-start">
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

              <div className="flex flex-col md:flex-row gap-3">
                <CustomSelect
                  options={budgetRangeOptions}
                  defaultValue="Select budget range"
                  onChange={() => {}}
                  position="bottom"
                  size="full"
                  label="Budget range"
                  value=""
                  isRequired
                />

                <CustomSelect
                  options={timelinesOptions}
                  defaultValue="When do you need this?"
                  onChange={() => {}}
                  position="bottom"
                  size="full"
                  label="Implementation Timeline"
                  value=""
                  isRequired
                />
              </div>

              <TextAreaField
                name="requirements"
                direction="col"
                placeholder="What specific challenges are you looking to solve? What features are most important to you?"
                label="Tell us about your needs"
                className="text-start w-full"
                isRequired
              />

              <button className="w-full gap-5 flex items-center justify-center rounded-lg h-12 shadow-md font-medium tracking-wide bg-blue-500 hover:bg-blue-600 hover:scale-102 transition-all duration-200 text-white capitalize cursor-pointer">
                <span>contact sales team</span>
                <LuArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center tracking-wide text-xs text-gray-500">
                Our sales team will contact you within 24 hours.
              </div>
            </form>
          </Card>

          {/* Right Side */}
          <div className="flex flex-col space-y-6 w-full md:w-1/2">
            {/* Contact Information */}
            <Card
              padded
              bordered
              shadow="md"
              className="bg-white border-gray-300 text-start"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Get in Touch
              </h3>

              {contactInformation.map((c, i) => (
                <div key={i} className="flex items-center mb-3">
                  <div className="w-12 h-12 shrink-0 bg-white/10 rounded-lg flex items-center justify-center">
                    <c.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="ml-1">
                    <p className="text-gray-700 font-bold capitalize">
                      {c.title}
                    </p>
                    <p className="text-gray-500 text-sm w-full md:max-w-64">
                      {c.subTitle}
                    </p>
                  </div>
                </div>
              ))}
            </Card>
            {benefitsCard.map((b, i) => (
              <Card
                key={i}
                padded
                bordered
                shadow="md"
                className="bg-white border-gray-300 text-start"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-200/50 rounded-lg flex items-center justify-center">
                    <b.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl text-gray-700 font-semibold leading-none tracking-tight">
                    {b.title}
                  </h3>
                </div>

                {/* Subtitle */}
                <div className="text-gray-500">
                  <p className="text-md leading-relaxed">{b.subTitle}</p>
                </div>
              </Card>
            ))}
            {/* Why choose DevoSuite? */}
            <Card
              padded
              bordered
              shadow="md"
              className="text-start rounded-lg border border-gray-300 bg-blue-200/20"
            >
              <h4 className="font-semibold text-gray-700 mb-2">
                Why choose DevoSuite?
              </h4>
              <ul className="space-y-2 text-sm text-gray-500 list-disc list-inside">
                <li>Built specifically for Filipino businesses</li>
                <li>Local compliance and tax requirements</li>
                <li>Multi-currency and multi-language support</li>
                <li>Proven track record with 500+ businesses</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
