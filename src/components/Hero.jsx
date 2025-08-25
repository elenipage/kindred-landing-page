import { Link, Element } from "react-scroll";

export default function Hero() {
  return (
    <Element name="top" className="bg-[#BBF246] flex flex-wrap justify-center items-start pt-10">
      <section className="w-[90%] xl:w-105 pt-15 lg:pt-25 px-10">
        <h1 className="text-7xl lg:text-8xl font-bold mb-2 text-[#1D2023]">
          Kindred
        </h1>
        <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-[#1D2023]">
          The app that helps young people find their people.
        </h2>
        <p className="text-lg text-[#1D2023] mb-12">
          Discover local activities, safe spaces, and real connection - made for
          you.
        </p>
        <Link
          to="register-interest"
          smooth={true}
          duration={600}
          className="bg-[#1D2023] text-lg md:text-lg text-white px-7 py-5 rounded-4xl font-semibold hover:bg-gray-700 cursor-pointer"
        >
          Register Your Interest
        </Link>
      </section>
      <section className="px-5 pt-10 pb-5">
        <img
          className="max-h-170 -mb-30"
          src="/assets/phoneImages.png"
        ></img>
      </section>
    </Element>
  );
}
