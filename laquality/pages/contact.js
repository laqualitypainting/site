import React, { useState } from "react";
import Layout from "../components/layout";

function Contact() {
  //Contact form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  //form validation
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (company.length <= 0) {
      tempErrors["company"] = true;
      isValid = false;
    }
    if (country.length <= 0) {
      tempErrors["country"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if(isValidForm){
    setButtonText("Sending");
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        name: name,
        email: email,
        company: company,
        country: country,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      setButtonText("Send")
      return;
    }
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
    setButtonText("Send");
  }
  };

  return (
    <Layout>
      <div className="rounded  bg-slate-900 py-3 px-3 w-full">
        <form onSubmit={handleSubmit}>
          <div className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 shadow w-full flex items-center justify-center my-2 min-h-screen">
            <div className=" bg-white rounded-lg shadow-2xl py-12 lg:px-28 px-8">
              <p className="dark:text-white md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                Contact Us 
              </p>
              <div className="md:flex items-center mt-12">
                <div className="md:w-72 flex flex-col">
                  <label className="dark:text-white text-base font-semibold leading-none text-gray-800">
                    Name
                  </label>
                  <input
                    tabIndex={0}
                    arial-label="Input name"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Input name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="dark:text-white text-base font-semibold leading-none text-gray-800">
                    Email Address
                  </label>
                  <input
                    tabIndex={0}
                    arial-label="Please input email address"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input email address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-8">
                <div className="md:w-72 flex flex-col">
                  <label className="dark:text-white text-base font-semibold leading-none text-gray-800">
                    Company name
                  </label>
                  <input
                    tabIndex={0}
                    role="input"
                    arial-label="Please input company name"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                    placeholder="Please input company name"
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                  />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="dark:text-white text-base font-semibold leading-none text-gray-800">
                    Country
                  </label>
                  <input
                    tabIndex={0}
                    arial-label="Please input country name"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input country name"
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="dark:text-white text-base font-semibold leading-none text-gray-800">
                    Message
                  </label>
                  <textarea
                    tabIndex={0}
                    aria-label="leave a message"
                    role="textbox"
                    type="name"
                    className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                    defaultValue={""}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button
                  type="submit"
                  className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                >
                  {buttonText}
                </button>
              </div>

              <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thank you! Your Message has been delivered succesfully.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>

            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;
