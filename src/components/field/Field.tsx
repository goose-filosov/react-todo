import React from "react";

import "./Field.scss";

export type FieldProps = {
  value: string;
  changeHandler: (inputValue: string) => void;
  placeholder?: string;
  full?: boolean;
};

export const Field: React.FC<FieldProps> = ({
  value,
  changeHandler,
  placeholder,
  full,
}) => {
  return (
    <input
      style={{
        width: full ? "100%" : "auto",
      }}
      type="text"
      className="field"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        changeHandler(e.target.value);
      }}
    />
  );
};
