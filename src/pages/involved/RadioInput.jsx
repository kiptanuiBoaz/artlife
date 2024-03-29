import React from "react";

const RadioInput = ({ type, id, value, onChange, placeholder, text,hours }) => {
  return (
    <label className= "border  border-500-secondary_yellow w-full mx-auto rounded-lg   px-3 py-2  mb-4 flex  form-radio text-orange-500 text-neutral_white">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        checked={hours === text}
        className="text-3xl text-neutral_dark focus:border-secondary_yellow focus:outline-none"
      />

      <span class="ml-2"> {`${text} hours per week`}</span>
    </label>
  );
};

export default RadioInput;
