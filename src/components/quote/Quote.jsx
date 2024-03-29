import React from 'react';
import {ImQuotesLeft} from 'react-icons/im';

const Quote = () => {
  return (
    <div className="  px-4 md:m-4 md:w-1/2 md:mx-auto my-8 py-4">
      <div>
        {" "}
        <ImQuotesLeft values={{color:"green"}} />
      </div>
      <div className=" text-center text-neutral_dark text-lg flex flex-col justify-center">
        <p>
          At the deepest level, the creative process and the healing process
          arise from a single source. When you are an artist, you are a healer;
          a wordless trust of the same mystery is the foundation of your work
          and its integrity.
        </p>

       
        <p className="font-bold mt-2">-Rachel Naomi Remen, MD</p>
      </div>
    </div>
  );
}

export default Quote