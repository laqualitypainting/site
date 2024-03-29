import React, { useState } from "react";
import Layout from "../components/layout";
import { motion } from "framer-motion";

function Contact() {
  //Contact form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  //form validation
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
      setShowValidationMessage(true);
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
      setShowValidationMessage(true);
    }
    if (number.length <= 0) {
      tempErrors["number"] = true;
      isValid = false;
      setShowValidationMessage(true);
    }
    if (service.length <= 0) {
      tempErrors["service"] = true;
      isValid = false;
      setShowValidationMessage(true);
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
      setShowValidationMessage(true);
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();

    if (isValidForm) {
      let data = {
        name,
        email,
        message,
        number,
        service,
      };
      setButtonText("Sending");
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setName("");
          setEmail("");
          setMessage("");
          setNumber("")
          setService("")
        } else {
          console.log(errors);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setButtonText("Send");
          return;
        }
      });

      setShowSuccessMessage(true);
      setShowValidationMessage(false);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
  };


  return (
    <Layout>
      <div className="rounded pt-20 bg-slate-900 py-3 px-3 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.3,
              },
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="py-3 px-3 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 shadow w-full flex items-center justify-center my-2 min-h-screen">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                    },
                  },
                }}
              >
                <div className="bg-white rounded-lg shadow-2xl py-12 lg:px-28 px-8">
                <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.7,
                    },
                  },
                }}
              >
                  <p className=" md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                    Contact Us
                  </p>
                  <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                      <label className="text-base font-semibold leading-none text-gray-800">
                        Name
                      </label>
                      <input
                        tabIndex={0}
                        arial-label="Input name"
                        type="name"
                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-300"
                        placeholder="John Doe"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                      <label className="text-base font-semibold leading-none text-gray-800">
                        Email Address
                      </label>
                      <input
                        tabIndex={0}
                        arial-label="Please input email address"
                        type="name"
                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-300"
                        placeholder="email@provider.com"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center mt-8">
                    <div className="md:w-72 flex flex-col">
                      <label className="text-base font-semibold leading-none text-gray-800">
                        Phone Number
                      </label>
                      <input
                        tabIndex={0}
                        role="input"
                        arial-label="phone number"
                        type="name"
                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-300 "
                        placeholder="(555)555-5555"
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                      />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                      <label className="text-base font-semibold leading-none text-gray-800">
                        Service Inquiring About
                      </label>
                      <input
                        tabIndex={0}
                        arial-label="Please input service inquiring about"
                        type="name"
                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-300"
                        placeholder="Interior/ exterior painting"
                        onChange={(e) => {
                          setService(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full flex flex-col mt-8">
                      <label className="text-base font-semibold leading-none text-gray-800">
                        Message
                      </label>
                      <textarea
                        tabIndex={0}
                        aria-label="leave a message"
                        role="textbox"
                        type="name"
                        className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-300 resize-none"
                        defaultValue={""}
                        placeholder="Let us know about your project...."
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <button
                      type="submit"
                      className="mt-8 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                    >
                      {buttonText}
                    </button>
                  </div>

                  <div className="pt-3 -mx-6 text-center">
                    {showSuccessMessage && (
                      <>
                        <p className="text-green-500 font-semibold text-md my-2">
                          Your Message has been delivered succesfully.
                        </p>
                        <p className="text-green-500 font-semibold text-md my-2">
                          Thank you
                        </p>
                      </>
                    )}
                    {showFailureMessage && (
                      <>
                        <p className="text-red-500 font-semibold text-md">
                          Oops! Something went wrong
                        </p>
                        <p className="text-red-500 font-semibold text-md">
                          Please try again.
                        </p>
                      </>
                    )}
                    {showValidationMessage && (
                      <>
                        <p className="text-red-500 font-semibold text-md">
                          Oops! All fields must be filled in
                        </p>
                        <p className="text-red-500 font-semibold text-md">
                          Please try again.
                        </p>
                      </>
                    )}
                  </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
}

export default Contact;
