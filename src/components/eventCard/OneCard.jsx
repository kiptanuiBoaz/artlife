import React from "react";
import { Link } from "react-router-dom";



const OneCard = ({ id, title, description, imageUrl, pdf }) => {
  
  return (
    <div  class="flex justify-center mb-8 mx-2">
    
      <Link to={`pdf/${pdf}`}  target= "_blank">
      <div
        key={id}
        class="block max-w-sm rounded-sm bg-white bg-center shadow-lg dark:bg-neutral-100 h-64 w-100 text-center flex flex-col justify-center gap-8"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
      </div>
      </Link>
     
    </div>
  );
};

export default OneCard;
