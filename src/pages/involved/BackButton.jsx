import React from 'react';
import{MdOutlineArrowBackIos} from "react-icons/md"


const BackButton = ({ onClick,text }) => {
  return (
    <button
      className="py-4 px-8  text-neutral_white rounded-lg  mt-8 flex justify-center items-center gap-2"
      onClick={(e)=>{
        e.preventDefault();
        onClick();
      }}
    >
      <MdOutlineArrowBackIos className="" />
      {text}
    </button>
  );
};


export default BackButton