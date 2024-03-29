import React from 'react';
import art from "./assets/art.jpg";

const ImageArt = () => {
  return (
    <div className="w-screen mx-auto my-8">
      <img style={{ width: "100%"}} src={art} alt="" />
    </div>
  );
}

export default ImageArt