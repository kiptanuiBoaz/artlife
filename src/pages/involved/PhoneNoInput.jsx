import { useState } from "react";

const PhoneNumberInput = ({ onChange, name, placeholder }) => {
    const [countryCode, setCountryCode] = useState("+254");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        // Concatenate the country code and phone number
        e.target.value = countryCode + e.target.value;
        e.target.name = name;
        // Pass the final value plus the name to the onChange function passed from the parent
        onChange(e);
    };

    return (
        <div className="flex items-center">
            <input
                className="w-20 mr-2 border border-gray-400 rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="+254"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
            />
            <input
                className="flex-1 border border-gray-400 rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                type="text"
                placeholder={placeholder}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
            />
        </div>
    );
}

export default PhoneNumberInput;
