import React from "react";
import clsx from "clsx";

type TextAreaProps = {
  label?: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  direction?: "row" | "col";
  isRequired: boolean;
  className?: string;
};

const TextAreaField: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  placeholder = "",
  direction = false,
  isRequired = false,
  className,
}) => {
  return (
    <div
      className={clsx(
        direction === "row" ? "flex items-center" : "flex flex-col",
        className
      )}
    >
      {label && (
        <label
          htmlFor={name}
          className={clsx(
            "text-sm font-medium leading-none capitalize",
            direction === "row" ? "mb-0" : "mb-2"
          )}
        >
          {label} <span className="text-red-500">{isRequired && "*"}</span>
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={4}
        className="border border-gray-200 rounded-lg placeholder:text-gray-400 placeholder:text-sm px-3 py-2 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      />
    </div>
  );
};

export default TextAreaField;
