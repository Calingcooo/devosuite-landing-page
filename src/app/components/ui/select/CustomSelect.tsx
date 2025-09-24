import React, { useState, useRef, useEffect } from "react";
import { LuChevronDown } from "react-icons/lu";
import clsx from "clsx";

type Option = {
  value: string;
  label: string;
};

type Size = "sm" | "md" | "lg" | "full";
type Position = "top" | "bottom" | "auto";

type CustomSelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  defaultValue: string;
  size?: Size;
  position: Position;
  label?: string;
  isRequired?: boolean
};

const Select: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  className = "text-sm bg-[var(--white-main)]",
  defaultValue = "Select...",
  size = "md",
  position = "auto",
  label,
  isRequired = false
}) => {
  const [open, setOpen] = useState(false);
  const [openUp, setOpenUp] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const sizeClasses: Record<Size, string> = {
    sm: "w-full sm:w-32 text-xs",
    md: "w-full sm:w-40 md:w-48 text-sm",
    lg: "w-full  sm:w-56 md:w-64 text-base",
    full: "w-full rounded-lg text-sm",
  };

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Decide dropdown direction only if auto
  useEffect(() => {
    if (open && selectRef.current && position === "auto") {
      const rect = selectRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      setOpenUp(spaceBelow < 200 && spaceAbove > spaceBelow);
    }
  }, [open, position]);

  const isOpenUp = position === "top" || (position === "auto" && openUp);

  return (
    <div className={clsx("relative flex flex-col gap-1", sizeClasses[size])}>
      {label && (
        <label className="text-start text-sm font-medium leading-none capitalize">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}

      <div ref={selectRef}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={clsx(
            "flex reverse rounded-lg border-gray-200 border justify-between items-center w-full px-3 py-2 focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ease-in-out cursor-pointer",
            className
          )}
        >
          <span className="text-stone-800">
            {selectedOption?.label ?? defaultValue}
          </span>
          <LuChevronDown className="w-4 h-4 ml-2 text-gray-500" />
        </button>

        {open && (
          <ul
            className={clsx(
              "absolute z-40 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-1",
              isOpenUp ? "bottom-full mb-1" : "mt-1"
            )}
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={clsx(
                  "px-3 py-2 text-sm cursor-pointer hover:bg-blue-200 rounded text-stone-800",
                  opt.value === value && "bg-blue-200"
                )}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
