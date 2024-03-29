import React from 'react';
import bg from "./assets/publicact.jpg"

const PublicAct = () => {
  return (
    <div
      className="bg-cover bg-center grid "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" text-neutral_white self-center w-4/5 mx-auto py-24">
        <h2 className=" text-2xl font-bold ">We support public art</h2>
        <p className=" mt-8 leading-6 tracking-wider ">
          Art-Life Group is designed to be a premier and lead promoter of
          art-culture programmes and events. We believe that art is the language
          of humanity and a medium of expression which allows for the
          communication of the intricate and complex emotions which make us
          inherently human. Through public art the greater human collective can
          be engaged, environments can be infused with beauty, and center-pieces
          can be created for community.
        </p>
      </div>
    </div>
  );
};

export default PublicAct;