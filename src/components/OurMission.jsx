import { Element } from "react-scroll";

export default function OurMission() {
  return (
    <Element name="our-mission" className="py-10 py-10 bg-white px-[5%] lg:px-[13%]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Why we’re building Kindred
          </h2>

          <p className="text-gray-700 mb-4">
            Youth loneliness is one of the most pressing challenges today, with
            many young people feeling as though they lack safe, inclusive spaces
            to connect and make friends. The effects go beyond isolation, it
            impacts mental health, confidence, and future opportunities.
          </p>

          <p className="text-gray-700 mb-4">
            Our mission is simple: to make it easier for young people to
            discover local activities they'll actually enjoy, build meaningful
            friendships, and feel like they belong.
          </p>

          <p className="text-gray-700 mb-4">
            Kindred bridges the gap between digital and physical communities by
            providing an engaging, youth-friendly platform that highlights
            opportunities nearby and encourages real-world connection.
          </p>

          <p className="text-gray-700">
            We aim to build partnerships across youth services, community hubs,
            and local councils, ensuring no young person is left behind.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <video
            className="rounded-lg max-w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/kindredVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Element>
  );
}
