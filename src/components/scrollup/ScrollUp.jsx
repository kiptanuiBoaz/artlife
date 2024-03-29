import React from "react";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"; 


export const ScrollUp = () => {
  return (
    <div>
      <ScrollUpButton
        style={{
          backgroundColor: "#00a783",
          border: "4px solid #00a783",
          // borderRadius: "8px",
          color: "#fe9e00",
          right: "1rem",
          zIndex: "4",
        }}
      />
    </div>
  );
}


