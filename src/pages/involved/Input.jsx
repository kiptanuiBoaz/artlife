import React from "react";

const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-4  text-neutral_white">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="h-12 rounded-lg px-4 py-2 w-full text-sm text-neutral_dark focus:border-secondary_yellow focus:outline-none"
      />
    </div>
  );
};

export default Input;
