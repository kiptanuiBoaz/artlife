import React from 'react'

export const TextAreaInput = ({ value, p, name, onChange }) => {
    return (
      <div className="   grid justify-center p-2  mx-2 space-x-4">
        <p>{p}</p>
        <textarea
          value={value}
          className=" m-0  text-black mt-4 p-4 rounded"
          name={name}
          required
          onChange={(e) => onChange(e)}
          cols="30"
          rows="7"
          placeholder="Enter Response"
        ></textarea>
      </div>
    );
}
