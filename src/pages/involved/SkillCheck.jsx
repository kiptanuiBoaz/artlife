import React, { useState } from 'react';
import { GiCheckMark } from "react-icons/gi";

const SkillCheck = ({ onClick, text }) => {
    const [localChecked, setLocalChecked] = useState(false);

    const handleChange = (e) => {
        onClick(e);
        setLocalChecked(!localChecked)
    }

    return (
        <label className={`relative inline-block px-4 py-2 ${localChecked
            ? "bg-green-500 text-white"
            : "bg-gray-300 text-gray-700"
            } rounded-full transition-colors duration-300 ease-in-out mx-1 my-1 hover:bg-secondary_yellow`}
        >
            <input
                type="checkbox"
                name={text.toLowerCase()}
                className="hidden"
                value={localChecked}
                checked={localChecked}
                onChange={handleChange}
            />

            <span className="flex items-center checkbox-btn">
                {text}
                {text === "Communications" && "(Social media, online and creative writing)"}
                {localChecked ? <GiCheckMark className='ml-2' /> : ""}
                
            </span>
        </label>
    )
}

export default SkillCheck