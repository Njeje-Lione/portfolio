import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" data-aos="fade-down" className="py-24 px-6 bg-black text-white">
      {/* Name */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold"
      >
        <h1>
  Hi, I’m <span className="text-orange-500">NJEJE LIONE</span>
</h1>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400 text-lg"
      >
        Front-End Developer | UI/UX Designer | ICT Support Specialist
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
        >
          View Projects
        </a>

        <a
          href="/cv.pdf"
          className="px-6 py-2 border border-orange-500 rounded-lg hover:bg-orange-500 transition"
        >
          Download CV
        </a>
      </motion.div>

    </section>
  );
}