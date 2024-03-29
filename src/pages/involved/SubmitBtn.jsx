import React from "react";

const NextButton = ({ type, text,onClick }) => {
  return (
    <button
      className="py-4 px-8 bg-secondary_yellow text-neutral_white rounded-lg w-56 mt-8"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      type={type}

    >
      {text}
    </button>
  );
};

export default NextButton;
