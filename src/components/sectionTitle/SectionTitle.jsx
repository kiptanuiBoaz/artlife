import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className=" w-11/12 md:w-4/5 mx-auto">
      <h2 className="text-2xl">{title}</h2>
      <div className='h-2 w-16 bg-primary_green rounded mt-2'></div>
      {/* <p className="underline underline-offset-2">See all</p> */}
    </div>
  );
}

export default SectionTitle