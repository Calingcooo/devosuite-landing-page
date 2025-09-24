"use client";

import React from "react";
import InputField from "../components/ui/form_field/InputField";
import CustomSelect from "../components/ui/select/CustomSelect";
import TextAreaField from "../components/ui/form_field/TextAreaField";

const page = () => {
  const employeeCountOptions = [
    { value: "1-10", label: "1-10" },
    { value: "11-50", label: "11-50" },
    { value: "51-200", label: "51-200" },
    { value: "201-500", label: "201-500" },
    { value: "501+", label: "501+" },
  ];

  const industryOptions = [
    { value: "retail", label: "Retail" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "services", label: "Services" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="bg-blue-200/20">
      <div className="container mx-auto px-6 py-3">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Start Your Free Trial
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Experience the full power of DevoSuite with a 30-day free trial. No
            credit card required.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <div className="container mx-auto px-6 py-12 flex flex-col items-start border rounded-lg shadow-md border-gray-200 bg-white w-full md:w-1/2">
            <h3 className="text-2xl text-stone-900">Get Started Today</h3>
            <p className="text-gray-500 text-start">
              Fill out the form below to start your free trial
            </p>

            {/* Left Side Form */}
            <form className="w-full mt-6 space-y-6">
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
            </form>
          </div>

          {/* Right Side Form */}
          <div className="bg-white w-full md:w-1/2">gg</div>
        </div>
      </div>
    </div>
  );
};

export default page;
