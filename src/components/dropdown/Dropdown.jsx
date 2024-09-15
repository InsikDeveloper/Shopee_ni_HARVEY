import React from "react";

const Dropdown = ({ options, label, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="capitalize font-semibold">{label}</label>
      <select className="capitalize" onChange={onChange}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
