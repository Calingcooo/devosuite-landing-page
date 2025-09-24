import React from "react";
import { LuPhone, LuMail, LuMapPin, LuMessageSquare } from "react-icons/lu";
import Card from "../ui/card/Card";
import Footer from "../Footer";

const ContactSection = () => {
  const contactDetails = [
    { id: "phone", icon: LuPhone, title: "phone", value: "+63 953 544 4502" },
    {
      id: "email",
      icon: LuMail,
      title: "email",
      value: "calingco.je@gmail.com",
    },
    {
      id: "address",
      icon: LuMapPin,
      title: "address",
      value:
        "Blk 10 Lot 20, Manga Street, Amparo Subd. Caloocan City, Brgy. 179",
    },
    {
      id: "live_chat",
      icon: LuMessageSquare,
      title: "live chat",
      value: "Available 24/7 for support",
    },
  ];

  const formFieldsBaseClass =
    "bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-md px-3 py-2 text-base ring-offset-white w-full focus-visible:outline-none focus-visible:ring-2";

  return (
    <div className=" bg-contact-section">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get started with DevoSuite today and join thousands of businesses
            already streamlining their operations with our powerful ERP
            solution.
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row justify-between text-start">
          {/* Left Side*/}
          <div className="w-full md:w-1/2 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            {contactDetails.map((c) => (
              <div key={c.id} className="flex items-center mb-8">
                <div className="w-12 h-12 shrink-0 bg-white/10 rounded-lg flex items-center justify-center">
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-5">
                  <p className="text-white font-medium capitalize">{c.title}</p>
                  <p className="text-white/80 w-full md:max-w-64">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <button className="min-w-48 h-14 rounded-lg px-10 text-lg capitalize bg-white text-blue-500 font-bold cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200">
                start free trial
              </button>
              <button className="min-w-48 h-14 rounded-lg px-10 text-lg capitalize border bg-blue-200/20 hover:bg-blue-400 hover:text-blue-800 border-gray-200 font-bold text-white/90 cursor-pointer">
                schedule demo
              </button>
            </div>
          </div>

          {/* Right Side */}
          <Card
            bordered
            className="flex justify-center bg-white/10 border-white/20 backdrop-blur-sm w-full md:w-1/2"
          >
            <div className="text-center md:text-start md:p-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>

              <form className="space-y-6">
                {/* Name */}
                <div className="w-full flex gap-5 flex-col md:flex-row">
                  <input
                    type="text"
                    placeholder="First Name"
                    className={formFieldsBaseClass}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={formFieldsBaseClass}
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className={formFieldsBaseClass}
                />

                {/* Company Name */}
                <input
                  type="text"
                  placeholder="Company Name"
                  className={formFieldsBaseClass}
                />

                {/* Message */}
                <textarea
                  placeholder="Tell us about your business needs..."
                  rows={4}
                  className={formFieldsBaseClass}
                />

                {/* Action Button */}
                <button className="capitalize w-full text-blue-500 bg-white hover:bg-white/90 hover:scale-105 hover:shadow-md h-11 rounded-md px-8 font-bold text-base cursor-pointer transition-all duration-200">
                  send message
                </button>
              </form>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
