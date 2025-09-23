import React from "react";
import clsx from "clsx";

type PricingCardProps = {
  style?: string;
  children: React.ReactNode;
};

const PricingCard: React.FC<PricingCardProps> = ({ children, style }) => {
  return <div className={clsx("rounded-lg shadow-sm", style)}>{children}</div>;
};

export default PricingCard;
