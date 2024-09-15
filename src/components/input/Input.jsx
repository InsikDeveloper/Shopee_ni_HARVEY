import React from "react";

const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">{label}</label>
      <input
        className="focus:outline-none px-2 focus:py-2  py-1  text-sm bg-transparent rounded-sm border-[1px] border-solid border-black/80 duration-100"
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
