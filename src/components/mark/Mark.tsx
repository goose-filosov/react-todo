import React from "react";
import "./Mark.scss";

export interface MarkProps {
  size?: string;
  bgColor?: string;
  active?: boolean;
  onClick?: () => void;
}

export const Mark: React.FC<MarkProps> = ({
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
