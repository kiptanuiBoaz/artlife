const YesNoRadio = ({ value, onChange }) => {
    const handleInputChange = (event) => {
        const newValue = event.target.value === "yes";
        onChange(newValue);
    };

    return (
      <>
        <p className=" text-center my-2 w-11/12 md:w-2/3 mx-auto">
          I understand that photography/film/video may be used in the promotions
          of programs at Art-Life. These may be published or used for any
          application in newspapers, films, television commercials, posters,
          online etc. or otherwise displayed to the public, or used for other
          educational/fundraising purposes either in whole or in part by
          Art-Life. I hereby consent to my child and/or me being photographed or
          videotaped during programs or activities hosted by ArtLife and consent
          to the use of such images for the purposes expressed above and
          expressly release Art-Life from all claims, legal or otherwise,
          thereof. 
          <br/>
          <span className="text-center">Do you agree?</span>
        </p>

        <div className="flex flex-row items-center mx-auto justify-center space-x-2">
          <label
            htmlFor={`yes`}
            className={`${
              value && "bg-green-600"
            } inline-flex items-center px-2 py-1 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-gray-300 rounded-md hover:bg-gray-6600 focus:outline-none focus:bg-green-400`}
          >
            <input
              id={`yes`}
              type="radio"
              value="yes"
              checked={value === true}
              onChange={handleInputChange}
              className="sr-only"
            />
            <span className="inline-block w-24 text-center">Yes</span>
          </label>
          <label
            htmlFor={`no`}
            className={`${
              !value && "bg-red-600"
            } inline-flex items-center px-2 py-1 text-sm font-medium text-gray-700 bg-gray-100 border-2 border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200`}
          >
            <input
              id={`no`}
              type="radio"
              name={"no"}
              value="no"
              checked={value === false}
              onChange={handleInputChange}
              className="sr-only"
            />
            <span className="inline-block w-24 text-center">No</span>
          </label>
        </div>
      </>
    );
}

export default YesNoRadio;