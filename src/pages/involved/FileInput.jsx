import { useState } from 'react'

export const FileInput = ({ onChange, name,value }) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => { setSelectedFile(event.target.files[0]); }

    onChange(selectedFile);
    // console.log(selectedFile)

    return (
        <div className=" px-6 py-4 mx-auto my-2 border-500-secondary_yellow border-dotted border w-11/12 md:max-w-md text-center">

            <div className=" flex-column justify-center w-120 mt-4 flex text-sm leading-6 text-gray-600">
                {selectedFile ? selectedFile.name : <span>
                    <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                        <span className='block'>Upload a file</span>

                        <input value={value} id="file-upload" required onChange={handleFileInputChange} accept=".pdf"  name={name} type="file" className="sr-only" />
                    </label>
                    <span className='block'>or</span>
                    <p className="pl-1 block"> drag and drop</p>
                </span>
                }
            </div>

        </div>
    )
}
