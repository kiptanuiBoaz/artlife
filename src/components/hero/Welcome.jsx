import React from 'react';
import { Fade } from 'react-awesome-reveal';


const Welcome = () => {
  return (
    <div>
      <Fade cascade up>
        <div className="mt-12 max-w-[50%] text-neutral_dark  backdrop-blur-md mx-auto py-4 bg-grey-800 rounded text-center text-primary-green w-full sm:w-auto">
          <h1
            className="text-4xl md:text-5xl font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
 font-bold"
          >
            Welcome to Art-Life
          </h1>
          <p className="px-4 text-lg md:text-xl mx-auto my-8 w-">
            At the heart of our plan, we purpose to advocate and prop-up the
            creative potential of the young, versatile and vulnerable; and
            curate unique experiences that expound diversity & unite people
            around arts
          </p>
        </div>
      </Fade>
      ;
    </div>
  );
}

export default Welcome