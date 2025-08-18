export default function Hero() {
  return (
    <section className="bg-[#BBF246] flex flex-wrap justify-center items-start">
      <section className="w-[90%] xl:w-105 py-20 px-10">
        <h1 className="text-8xl font-bold mb-2 text-[#1D2023]">Kindred</h1>
        <h2 className="text-4xl font-bold mb-7 text-[#1D2023]">
          The app that helps young people find their people.
        </h2>
        <p className="text-2xl text-[#1D2023] mb-12">
          Discover local activities, safe spaces, and real connection - made for
          you.
        </p>
        <a
          href="#signup"
          className="bg-[#1D2023] text-xl md:text-2xl text-white px-7 py-5 rounded-4xl font-semibold"
        >
          Register Your Interest
        </a>
      </section>
      <section className="px-10">
        <img className="max-h-170 min-h-80 pl-5" src="src/assets/phoneImages.png"></img>
      </section>
    </section>
  );
}
