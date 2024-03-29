import React, { useEffect, useRef, useState } from "react";
import Banner from "../../../components/banner/Banner";
import bg from "./bg.jpeg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Input from "../../../pages/involved/Input";
import Navbar from "../../../components/navbar/Navbar";
import { Fade } from "react-awesome-reveal";
import emailjs from "emailjs-com";
import swal from "sweetalert";



const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
     }, []);

    
    const form = useRef();

    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();

      setIsLoading(true);

      emailjs
        .sendForm(
          "service_gzjkhfy",
          "template_wqrghvg",
          form.current,
          "OmPk1jHh4lXyYQjZU"
        )
        .then(
          (result) => {
            setIsLoading(false);
            swal("Email Sent Successfully");
            form.current.reset();
          },
          (error) => {
            setIsLoading(false);
            swal("Email not sent, try again");
          }
        );
    };

    const handleBlur = () => {
      const inputs = form.current.querySelectorAll("input, textarea");
      let emptyInputs = false;

      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          emptyInputs = true;
        }
      });

      if (emptyInputs) {
        // swal("Please fill out all fields");
      }
    };
 
  return (
    <div>
      <div className="">
        <div
          className="bg-cover bg-center mb-[80px] "
          style={{ backgroundImage: `url( ${bg})`, height: "60vh" }}
        >
          {/* Navbar section */}
          <Navbar />
          {/* Home hero section text */}
        </div>
        <div className="grid justify-center mt-[-60%] md:mt-[-30%] lg:mt-[-13%]  ">
          <Fade>
            <div className="text-neutral_white rounded self-end justify-center  max-w-sm md:max-w-lg px-8 mb-8  py-12    bg-primary_green">
              <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold mb-4">Contact</h2>

                <div className=" grid gap-4 mb-4">
                  <p>
                    <a href="tel:+254770059995"></a>
                    <span className="text-white hover:text-secondary_yellow flex items-center">
                      <FaPhoneAlt className="w-4 h-4 mr-2" /> +254 77 005 9995
                    </span>{" "}
                  </p>
                  <p>
                    <a href="mailto:info@artlifegroup.or.ke">
                      {" "}
                      <span className="text-white hover:text-secondary_yellow flex items-center">
                        <MdOutlineMailOutline className="w-4 h-4 mr-2" />{" "}
                        info@artlifegroup.or.ke
                      </span>{" "}
                    </a>
                  </p>
                </div>
                <p class="mb-4">
                  Do you have any questions or comments for us? We’d love to
                  hear from you!
                </p>
                <form class="space-y-4" ref={form} onSubmit={sendEmail}>
                  <div>
                    <label
                      for="full-name"
                      class="block text-neutral_white font-bold mb-2"
                    >
                      Full Name
                    </label>

                    <Input type="text" placeholder="Full Name" id="full-name" name="full-name" />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-neutral_white font-bold mb-2"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block text-neutral_white font-bold mb-2"
                    >
                      Phone
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      for="message"
                      class="block text-neutral_white font-bold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-neutral_dark"
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" class=" bg-neutral_white hover:bg-primary_green hover:text-white hover:border-2 border-white w-full text-primary_green font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " disabled={isLoading} onBlur={handleBlur}>
                      {isLoading ? "Sending..." : "SEND MESSAGE"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
