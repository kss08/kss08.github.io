import React from "react";
import { ActionButtonField } from "@/types/action";

interface ActionButtonProps extends ActionButtonField { };

const ActionButton: React.FC<ActionButtonProps> = ({ text, link, color = "indigo" }) => {
  const spanClass = `py-1.5 px-3
    bg-${color}-500 hover:bg-${color}-700 
    text-white`;

  return <a href={link} target="blank">
    <span className={spanClass}>{text}</span>
  </a>;
};

export default ActionButton;
