import React from "react";

import "./Checkbox.scss";

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div className="cbx">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label />
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
        <path d="M2 8.36364L6.23077 12L13 2" />
      </svg>
    </div>
  );
};
