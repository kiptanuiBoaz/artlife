import React, { useState } from "react";

const ProfileCard = ({ image, name, title, role, bio }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="w-full">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow hover:shadow-lg border border-green-200">
        <img
          src={image}
          alt={`${name} - ${title}`}
          className="w-full rounded-t  h-auto"
        />
        <div className="p-8 text-center">
          <h2 className="font-bold text-xl mb-2">{name}</h2>
          <p className="text-primary_green ">{title}</p>
          {/* <p className="text-gray-700">{role}</p> */}
          <div className="text-gray-700 mt-4 text-left">
            {showMore ? (
              <div>
                {bio}
                <button
                  onClick={toggleShowMore}
                  className="block text-blue-500 hover:text-blue-700 mt-2 focus:outline-none"
                >
                  View Less
                </button>
              </div>
            ) : (
              <div>
                {bio.slice(0, 50)}...{" "}
                <button
                  onClick={toggleShowMore}
                  className="block text-blue-500 hover:text-blue-700 mt-2 focus:outline-none"
                >
                  Read More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
