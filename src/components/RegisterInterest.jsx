import { useEffect } from "react";

export default function RegisterInterest() {
  useEffect(() => {
    // Load the Mailchimp validation script
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-[#BBF246] flex justify-center items-center py-10 w-full">
      <div className="w-full max-w-2xl text-center flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-6">Register Interest</h2>
        <p className="text-lg text-gray-700 mb-8">
          Sign up to follow our journey and help us make Kindred amazing from
          day one.
        </p>
        <div
          id="mc_embed_signup"
          className="bg-white p-6 rounded-lg shadow-md drop-shadow-lg text-left w-lg flex justify-center"
        >
          <form
            action="https://kindredapp.us5.list-manage.com/subscribe/post?u=166505adf2c3fa2a97fe6a6a1&id=5b5503f095&f_id=00287be0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div className="mt-1">
              <label htmlFor="mce-EMAIL">Email Address *</label>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                className="w-full border p-2 my-2 rounded"
              />
            </div>

            <div className="mt-1">
              <label htmlFor="mce-FNAME">First Name *</label>
              <input
                type="text"
                name="FNAME"
                id="mce-FNAME"
                required
                className="w-full border p-2 my-2 rounded"
              />
            </div>

            <div className="mt-1">
              <label htmlFor="mce-LNAME">Last Name</label>
              <input
                type="text"
                name="LNAME"
                id="mce-LNAME"
                className="w-full border p-2 my-2 rounded"
              />
            </div>

            <div className="mt-1">
              <label htmlFor="mce-LOCATION">Location</label>
              <input
                type="text"
                name="LOCATION"
                id="mce-LOCATION"
                className="w-full border p-2 my-2 rounded"
              />
            </div>

            <div className="mt-1">
              <label htmlFor="mce-AGE">Age</label>
              <input
                type="number"
                name="AGE"
                id="mce-AGE"
                className="w-full border p-2 my-2 rounded"
              />
            </div>

            <div className="mt-3 mb-5">
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
            <div className="text-center">
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="bg-[#1D2023] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
