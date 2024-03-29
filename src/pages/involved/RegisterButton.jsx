import React from "react";

import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <div className="mt-4">
      <Link to="/registration">
        <button className="py-4 px-8 bg-secondary_yellow text-neutral_white rounded-lg z-50">
          {" "}
          REGISTER AS VOLUNTEER
        </button>
      </Link>
    </div>
  );
};

export default RegisterButton;
