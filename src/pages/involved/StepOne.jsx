import React from "react";
import Input from "./Input";

const StepOne = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  dob,
  setDob,
  email,
  setEmail,
}) => (
  <>
    <div className=" w-11/12 md:4/5 mx-auto md:flex justify-center gap-4">
      {" "}
      <Input
        placeholder="First Name"
        id="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <Input
        id="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        placeholder="Last Name"
      />
    </div>
    <div className=" w-11/12 md:4/5 mx-auto md:flex justify-center gap-4">
      {" "}
      <Input
        placeholder="Date of Birth"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
      <Input
        placeholder="Email Address"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  </>
);

export default StepOne;
