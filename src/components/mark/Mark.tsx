import React from "react";
import "./Mark.scss";

export interface IMarkProps {
  size?: string;
  bgColor?: string;
  active?: boolean;
  onClick?: () => void;
}

export const Mark: React.FC<IMarkProps> = ({
  size,
  bgColor,
  active,
  onClick,
}) => {
  return (
    <div
      className="mark"
      onClick={onClick}
      style={{
        width: size || "12px",
        height: size || "12px",
        backgroundColor: bgColor || "#eeaeca",
        border: active ? "2px solid #212121" : "2px solid transparent",
      }}
    />
  );
};
