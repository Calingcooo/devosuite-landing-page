import React from "react";
import clsx from "clsx";

type InputFieldProps = {
  label?: string;
  name: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  direction?: "row" | "col";
  isRequired: boolean;
  className?: string;
  textAlign?: "start" | "center" | "right";
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  placeholder = "",
  onChange,
  direction = false,
  isRequired = false,
  className,
  textAlign = "start",
}) => {
  const align = []
  return (
  
    <div
      className={clsx(
        direction === "row" ? "flex items-center gap-2" : "flex flex-col",
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
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={clsx(
          "h-10 border border-gray-200 rounded-lg px-3 placeholder:text-gray-300 py-2 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
          {
            "text-start": textAlign === "start",
            "text-center": textAlign === "center",
            "text-right": textAlign === "right",
          }
        )}
      />
    </div>
  );
};

export default InputField;
