import React from "react";
import { LuLock, LuCircleHelp } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="text-center py-8">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <LuLock className="w-4 h-4" />
          <span>Secured checkout – Cancel anytime</span>
        </div>
        <div className="flex items-center gap-2">
          <LuCircleHelp className="w-4 h-4" />
          <span>
            Need help?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Contact support
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
