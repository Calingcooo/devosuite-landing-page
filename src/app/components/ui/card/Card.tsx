import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean; // toggle internal padding
  shadow?: "none" | "sm" | "md" | "lg"; // control shadow depth
  bordered?: boolean; // toggle border
};

const Card: React.FC<CardProps> = ({
  children,
  className,
  padded = true,
  shadow = "sm",
  bordered = true,
}) => {
  return (
    <div
      className={clsx(
        "rounded-lg card bg-gradient-card",
        {
          "p-6": padded,
          border: bordered,
          "shadow-none": shadow === "none",
          "shadow-sm": shadow === "sm",
          "shadow-md": shadow === "md",
          "shadow-lg": shadow === "lg",
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
