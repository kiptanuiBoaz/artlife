import React from "react";
import { Link } from "react-router-dom";


const ProgramCard = ({ id, imageUrl, link }) => {

    return (
        <div class=" flex justify-center mb-8">
            <Link to={link} >
                <div
                    key={id}
                    class="block max-w-sm rounded-sm bg-white bg-center shadow-lg dark:bg-neutral-100 h-64 w-96 text-center flex flex-col justify-center gap-8"
                    style={{ width: "100%", height:"auto" }}
                >
                   <img src={imageUrl} alt="card" />
                </div>
            </Link>
        </div>
    );
};

export default ProgramCard;
