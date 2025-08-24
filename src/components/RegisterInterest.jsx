import { useEffect, useState } from "react";
import { Element } from "react-scroll";

export default function RegisterInterest() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  const handleSubmit = (e) => {
    // Browser validation will stop submission if fields are empty/invalid
    if (!e.target.checkValidity()) {
      return;
    }
    setTimeout(() => setSubmitted(true), 600);
  };

  return (
    <Element
      name="register-interest"
      className="bg-[#BBF246] py-10 w-full flex justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-center items-center gap-10 px-4">
        {/* Left: Image / Mockup */}
        <div className="w-md lg:w-lg flex justify-center">
          <img
            src="src/assets/home-mockup.png"
            alt="Kindred App Mockup"
            className="rounded-lg -rotate-3"
          />
        </div>

        {/* Right: Form */}
        <div className="w-md lg:w-lg bg-white p-6 rounded-2xl shadow-lg drop-shadow-lg text-left">
          {submitted ? (
            <div className="text-center py-10">
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-gray-700">
                You’ve successfully registered your interest.</p> <p>We’ll be in touch with updates soon!
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
                Register Interest
              </h2>
              <p className="text-gray-700 mb-6 text-center md:text-left">
                Sign up to follow our journey and help us make Kindred amazing
                from day one.
              </p>
              <div id="mc_embed_signup">
                <form
                  action="https://kindredapp.us5.list-manage.com/subscribe/post?u=166505adf2c3fa2a97fe6a6a1&id=5b5503f095&f_id=00287be0f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  onSubmit={handleSubmit}
                >
                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="mce-EMAIL">Email Address *</label>
                    <input
                      type="email"
                      name="EMAIL"
                      id="mce-EMAIL"
                      required
                      className="w-full border p-2 my-1 rounded-2xl"
                    />
                  </div>

                  {/* First Name */}
                  <div className="mb-3">
                    <label htmlFor="mce-FNAME">First Name *</label>
                    <input
                      type="text"
                      name="FNAME"
                      id="mce-FNAME"
                      required
                      className="w-full border p-2 my-1 rounded-2xl"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="mb-3">
                    <label htmlFor="mce-LNAME">Last Name</label>
                    <input
                      type="text"
                      name="LNAME"
                      id="mce-LNAME"
                      className="w-full border p-2 my-1 rounded-2xl"
                    />
                  </div>

                  {/* Location */}
                  <div className="mb-3">
                    <label htmlFor="mce-LOCATION">Location</label>
                    <input
                      type="text"
                      name="LOCATION"
                      id="mce-LOCATION"
                      className="w-full border p-2 my-1 rounded-2xl"
                    />
                  </div>

                  {/* Age */}
                  <div className="mb-3">
                    <label htmlFor="mce-AGE">Age</label>
                    <input
                      type="number"
                      name="AGE"
                      id="mce-AGE"
                      className="w-full border p-2 my-1 rounded-2xl"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="mb-5">
                    <strong>Interested in being involved?</strong>
                    <div className="flex flex-col mt-2">
                      <label>
                        <input
                          type="checkbox"
                          name="group[13526][1]"
                          className="mr-2 hover:cursor-pointer"
                        />
                        I'm interested in testing Kindred
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="group[13526][2]"
                          className="mr-2 hover:cursor-pointer"
                        />
                        I'm a service provider and would like more information
                      </label>
                    </div>
                  </div>

                  {/* Hidden field for bots */}
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_166505adf2c3fa2a97fe6a6a1_5b5503f095"
                      tabIndex="-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="bg-[#1D2023] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-gray-700 hover:cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </Element>
  );
}
