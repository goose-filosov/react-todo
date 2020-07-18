import React, { MouseEvent } from "react";

import "./Button.scss";

export interface IButtonProps {
  children: React.ReactNode | JSX.Element;
  onClick: () => void;
  theme?: "primary" | "secondary" | "success";
  full?: boolean;
  icon?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  theme,
  full,
  icon,
}) => {
  return (
    <button
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className={`btn btn_${theme || "primary"} ${full ? "btn_full" : ""} ${
        icon ? "btn_icon" : ""
      }`}
    >
      {children}
    </button>
  );
};
