import React, { useState, useEffect, useRef } from "react";
import RadioInput from "./RadioInput";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import form_bg from "./assets/registrationform_bg.jpg";
import logo from "./assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import SkillCheck from "./SkillCheck";
import { skillsCheckArr, steps, emergencyPhoneNo, emergencyInfo } from "./assets/checkBoxes";
import { Slide } from "react-awesome-reveal";
import Input from "./Input";
import CancelButton from "./CancelButton";
import PhoneNumberInput from "./PhoneNoInput";
import ScheduleTable from "./ScheduleTable";
import { TextAreaInput } from "./TextAreaInput";
import { FileInput } from "./FileInput";
import YesNoRadio from "./YesNoRadio";
import SubmitBtn from "./SubmitBtn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import { v4 } from "uuid";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import axios from "axios";



const RegistrationForm = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [consent, setCosent] = useState(false); //bool
  const [signature, setSignature] = useState();
  const [resume, setResume] = useState();
  const [schedule, setSchedule] = useState({})
  const [valunteerInfo, setValunteerInfo] = useState([]); //areas of interest
  const [hours, setHours] = useState(""); //from availability radioninppur
  const [animateDirection, setAnimateDirection] = useState("right");
  const [formCategory, setFormCategory] = useState("Valunteer Information");
  const [formData, setFormData] = useState({}); //rest of the data
  const [resumeUrl, setResumeUrl] = useState("");
  const [signatureUrl, setSignatureUrl] = useState("");
  const data = { ...formData, valunteerInfo, hours, schedule, consent, resumeUrl, signatureUrl };
  console.log({ data });

  useEffect(() => {
    const uploadResume = () => {
      if (resume == null) return;
      const resumeRef = ref(storage, `/${data.email}/resume${v4()} `);
      uploadBytes(resumeRef, resume).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setResumeUrl(url);
        });
        // alert("Resume uploaded successfully")
      })
    };
    uploadResume();
  }, [resume, data.email]);

  useEffect(() => {
    const uploadSignature = () => {
      if (signature == null) return;
      const signatureRef = ref(storage, `/${data.email}/signature${v4()} `);
      uploadBytes(signatureRef, signature).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setSignatureUrl(url);
        });
        // alert("Signature file uploaded successfully")
      })
    }
    uploadSignature();
  }, [signature, data.email])

  useEffect(() => {

    switch (step) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        setFormCategory("Volunteer Information");
        break;
      case 6:
        setFormCategory("Areas of Interest");
        break;
      case 7:
      case 8:
        setFormCategory("Availability");
        break;
      case 9:
      case 10:
      case 11:
      case 12:
        setFormCategory("Qualifications");
        break;
      case 13:
        setFormCategory("Emergency Contact Information");
        break;
      case 14:
        setFormCategory("Media release and consent");
        break;
      case 15:
        setFormCategory("Confirmation");
        break;
      default:
        setFormCategory(undefined);
        break;
    }

  }, [step])

  const handleValunteerInfo = ({ target: { checked, name } }) => {
    setValunteerInfo(
      checked
        ? [...valunteerInfo, name]
        : valunteerInfo.filter(item => item !== name)
    )

  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);

  // const sendEmail = () => {

  //   setIsLoading(true);

  //   emailjs
  //     .sendForm(
  //       "service_gzjkhfy",
  //       "template_fxriwjp",
  //       form.current,
  //       "OmPk1jHh4lXyYQjZU"
  //     )
  //     .then(
  //       (result) => {
  //         setIsLoading(false);
  //         swal("Email Sent Successfully");
  //         form.current.reset();
  //       },
  //       (error) => {
  //         setIsLoading(false);
  //         swal("Email not sent, try again");
  //       }
  //     );
  // };

  // const handleBlur = () => {
  //   const inputs = form.current.querySelectorAll("input, textarea");
  //   let emptyInputs = false;

  //   inputs.forEach((input) => {
  //     if (input.value.trim() === "") {
  //       emptyInputs = true;
  //     }
  //   });

  //   if (emptyInputs) {
  //     // swal("Please fill out all fields");
  //   }
  // };
const handleSubmit = async (e) => {
  setIsLoading(true);
    try {
      // 
      const res = await axios.post(
        "https://artlife-server.onrender.com/api",
        data,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json",
          },
          timeout: 20000
        }
      );
      console.log(res);
      if (res.status === 200) {
   
        setSignature("");
        setFormData({});
        setValunteerInfo([]);
        setCosent("");
        alert("Details Submitted Successfully");
        navigate("/involved");
      }
    } catch (error) {
      if (error) alert("An error occured please retry")
      console.error(error);
      // handle error response or show an error message
    }
    setIsLoading(false);
  };
  const renderStepOne = () => {

    return (
      <div className=" w-11/12 md:4/5 mx-auto md:flex justify-center ">
        <div className=" w-full md:flex justify-center gap-4">
          {[
            { name: "fname", placeholder: "First Name" },
            { name: "lname", placeholder: "Last Name" },
          ].map(({ name, placeholder }) => (
            <div className="">
              <div className="mt-4">
                <Input
                  type="text"
                  name={name}
                  placeholder={placeholder}
                  value={data[name]}
                  onChange={(e) => handleDataChange(e)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStepTwo = () => (
    <div className="sm:col-span-2 w-11/12 md:4/5 items-center mx-auto ">
      <div className="   items-center mx-auto my-2 md:max-w-sm">
        <p className="my-4"> Phone Number</p>
        <PhoneNumberInput
          type="tel"
          name="phoneNo"
          placeholder="Phone Number"
          value={data["phoneNo"]}
          onChange={(e) => handleDataChange(e)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );

  const renderStepThree = () => (
    <div className="sm:col-span-2 w-11/12 md:4/5 w-full items-center mx-auto ">
      <div className="max-w-sm mx-auto">
        <p className="my-4">Date of Birth</p>
        <Input
          type="date"
          name="dob"
          value={data["dob"]}
          placeholder="Date of Birth"
          onChange={(e) => handleDataChange(e)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );

  const renderStepFour = () => (
    <div className="col-span-full max-w-sm md:max-w-md mx-auto md:grid grid-cols-2 items-center ">
      {[{ name: "streetAdd", placeholder: "Street Address", type: "text" }, { name: "streetAdd2", placeholder: "Street Address Line 2", type: "text" }, { name: "state", placeholder: "State/County", type: "text" }, { name: "zipCode", placeholder: "ZipCode", type: "number" }, { name: "city", placeholder: "City", type: "text" }, { name: "country", placeholder: "Country", type: "text" }].map(
        ({ name, placeholder, type }) =>
          <div className="mt-2  mx-auto">
            <Input
              type={type}
              value={formData[name] ?? ""}
              name={name}
              onChange={(e) => handleDataChange(e)}
              placeholder={placeholder}
              className=" mx-2 block w-full md:w-4/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
      )}

    </div>
  );


  const renderStepFive = () => (
    <div className="sm:col-span-3">
      <div className="mt-2 max-w-sm   mx-auto">
        <Input
          value={formData.email ?? ""}
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={(e) => handleDataChange(e)}
          className="block w-full mx-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

        />
      </div>
    </div>

  );

  const renderStepSix = () => (
    <div class="checkboxes items-center w-11/12 md:w-4/5 mx-auto flex flex-wrap justify-center">
      {skillsCheckArr.map(skill => <SkillCheck onClick={handleValunteerInfo} text={skill} />)}
    </div>

  );

  const renderStepSeven = () => (
    <div class=" w-10/12 md:max-w-md mx-auto ">
      <p className="py-2 text-center">Number of hours available to volunteer</p>
      {["1-5", "5-10", "11-15"].map((item) => (
        <RadioInput
          type="radio"
          name="radio-color"
          value="option1"
          hours={hours}
          text={item}
          onChange={() => setHours(item)}
        />
      ))}
    </div>
  );


  const renderStepEight = () => (
    <ScheduleTable onChange={(v) => setSchedule(v)} />
  );

  const renderStepNine = () => (
    <TextAreaInput
      onChange={(e) => handleDataChange(e)}
      name="needs"
      p="Do you have any needs that affect your volunteering?"
      value={formData["needs"] ?? ""}
    />
  );

  const renderStepTen = () => (
    <TextAreaInput
      onChange={(e) => handleDataChange(e)}
      name="moreReasons"
      p="Tell us more about why you want to serve as a volunteer at ArtLife"
      value={formData["moreReasons"] ?? ""}
    />
  );

  const renderStepEleven = () => (
    <TextAreaInput
      onChange={(e) => handleDataChange(e)}
      name="skillsAndQualifications"
      p="List the qualifications and skills that you bring to Artlife"
      value={formData["skillsAndQualifications"] ?? ""}
    />
  );

  const renderStepTwelve = () => (
    <>
      <p className="text-center">Upload Resume</p>
      <FileInput value={resumeUrl} onChange={(f) => setResume(f)} />
    </>

  );

  const renderStepThirteen = () => {
    return (
      <>
        {emergencyInfo.map(({ name, placeholder }) => (
          <div className="mt-2 w-10/12 md:max-w-md mx-auto">
            <Input
              type="text"
              value={data[name] ?? ""}
              name={name}
              onChange={(e) => handleDataChange(e)}
              placeholder={placeholder}
              className=" mx-2 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        ))}

        {emergencyPhoneNo.map(({ name, placeholder }) => (
          <div className="   items-center w-10/12 md:max-w-md mx-auto mt-2 ">
            <PhoneNumberInput
              type="tel"
              value={formData[name] ?? ""}
              name={name}
              placeholder={placeholder}
              onChange={(e) => handleDataChange(e)}
              className="block w-full rounded-md border-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        ))}
      </>
    );
  }

  const renderStepFourteen = () => (
    <YesNoRadio value={consent} onChange={(c) => setCosent(c)} />
  )

  const renderStepFifteen = () => (
    <div className="items-center text-center w-10/12 md:max-w-md mx-auto">
      <p className="my-4">
        BY ACKNOWLEDGING AND SIGNING BELOW, <br />

        I AM DELIVERING AN ELECTRONIC
        SIGNATURE THAT WILL HAVE THE SAME EFFECT AS AN ORIGINAL MANUAL PAPER
        SIGNATURE. THE ELECTRONIC SIGNATURE WILL BE EQUALLY AS BINDING AS AN
        ORIGINAL MANUAL PAPER SIGNATURE.
      </p>

      <p>Upload signature</p>

      <FileInput value={signatureUrl} onChange={(f) => setSignature(f)} />
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return renderStepOne();
      case 2:
        return renderStepTwo();
      case 3:
        return renderStepThree();
      case 4:
        return renderStepFour();
      case 5:
        return renderStepFive();
      case 6:
        return renderStepSix();
      case 7:
        return renderStepSeven();
      case 8:
        return renderStepEight();
      case 9:
        return renderStepNine();
      case 10:
        return renderStepTen();
      case 11:
        return renderStepEleven();
      case 12:
        return renderStepTwelve();
      case 13:
        return renderStepThirteen();
      case 14:
        return renderStepFourteen();
      case 15:
        return renderStepFifteen();
      default:
        return null;
    }
  };

  const refArr = ["Volunteer Information", "Areas of Interest", "Availability", "Qualifications", "Emergency Contact Information", "Media release and consent", "Confirmation",]
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleEvent = () => { setDeviceWidth(window.innerWidth); }
    window.addEventListener('resize', handleEvent);

    return () => { window.removeEventListener('resize', handleEvent); };
  }, [deviceWidth]);

  const renderProgressBar = () => {

    return (
      <div className="pt-10 pb-5  ">
        <div className="h-30 grid gap-8 md:gap-0  md:grid-cols-2 items-center w-11/12 md:w-10/12 mx-auto">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-3xl text-center md:text-left">
              {" "}
              Volunteer Registration
            </h1>

            <CancelButton
              text={"X"}
              onClick={() => navigate("/involved")}
            />
          </div>
          <div></div>
        </div>
        <div className="h-10 progress-bar md:w-10/12 mx-auto mt-12">
          {steps.map((label, index) => (
            <div
              key={label}
              className={`step${index < refArr.indexOf(formCategory) + 1 ? " active" : ""
                }`}
            >
              <div className="circle"></div>
              <div style={{ display: deviceWidth < 1090 && refArr.indexOf(formCategory) !== index ? "none" : "" }} className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="h-screen  text-neutral_white bg-no-repeat bg-cover grid "
      style={{ backgroundImage: `url(${form_bg})` }}
    >
      {renderProgressBar()}

      <div className="mt-1  ">
        <form
         
          encType="multipart/form-data"
          className="md:w-10/12 mx-auto  text-neutral_white pb-12 grids items-between gap-4"
        >
          <div className="items-center justify-center flex flex-row">
            <h2 className="text-2xl text-center my-6">
              <strong>{formCategory}</strong>
            </h2>
          </div>

          <Slide direction={animateDirection}>
            <div>{renderStep()}</div>
          </Slide>

          <div className="self-end flex justify-center gap-4 items-center">
            {step !== 1 && (
              <BackButton
                text={"Back"}
                onClick={() => {
                  setStep(step - 1);
                  setAnimateDirection("left");
                }}
              />
            )}

            {step !== 15 && (
              <NextButton
                text={"Next"}
                onClick={() => {
                  setStep(step + 1);
                  setAnimateDirection("right");
                }}
              />
            )}

            {step === 15 && (
              <SubmitBtn
                text={isLoading ? "Sending..." : "Submit"}
                type="submit"
                onClick={handleSubmit}
              />
            )}
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}


export default RegistrationForm;
