import React from "react";

type StepCompleteOrderProps = {
  onBack: () => void;
};

const StepCompleteOrder: React.FC<StepCompleteOrderProps> = ({ onBack }) => {
  return <div onClick={onBack}></div>;
};

export default StepCompleteOrder;
