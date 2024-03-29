import React from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowBackIosNew } from "react-icons/md";


const BackButton = ({ onClick, text }) => {
    return (
      <button
        className=" text-neutral_white text-2xl font-bold py-2 px-4 rounded border hover:border-red-900 hover:border-4 hover:text-red-900 shadow"
        onClick={onClick}
      >
        {text}
        {/* <MdOutlineArrowBackIosNew /> */}
      </button>
    );
};


export default BackButton