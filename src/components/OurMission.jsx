import { motion } from "framer-motion";

export default function OurMission () {
return (
    <section className="py-10 bg-white mx-[15%]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h2 className="text-3xl font-bold mb-6">Why We’re Building Kindred</h2>
          
          <p className="text-gray-700 mb-4">
            Youth loneliness is one of the most pressing challenges today, with many young people lacking safe, 
            inclusive spaces to connect. The effects go beyond isolation — impacting mental health, confidence, 
            and future opportunities.
          </p>

          <p className="text-gray-700 mb-4">
            Our mission is simple: to make it easier for young people to discover local activities, build 
            meaningful friendships, and feel like they belong. 
          </p>

          <p className="text-gray-700 mb-4">
            Kindred bridges the gap between digital and physical communities by providing an engaging, 
            youth-friendly platform that highlights opportunities nearby and encourages real-world connection. 
          </p>

          <p className="text-gray-700">
            With partnerships across youth services, community hubs, and local councils, Kindred ensures that 
            no young person is left behind.
          </p>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <motion.div 
            className="w-40 md:w-48 shadow-xl rounded-2xl overflow-hidden absolute top-0 left-0"
            initial={{ y: -20, rotate: -10 }}
            animate={{ y: 0 }}
          >
          </motion.div>

          <motion.div 
            className="w-40 md:w-48 shadow-xl rounded-2xl overflow-hidden relative z-10"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
          </motion.div>

          <motion.div 
            className="w-40 md:w-48 shadow-xl rounded-2xl overflow-hidden absolute top-0 right-0"
            initial={{ y: -20, rotate: 10 }}
            animate={{ y: 0 }}
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}