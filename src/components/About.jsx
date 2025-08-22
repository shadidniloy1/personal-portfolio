import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl space-y-10 text-center md:text-left">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          About Me
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 leading-relaxed"
        >
          I am <span className="font-semibold">Shadid Hasan Niloy</span>, a
          second-year Electrical and Computer Engineering student at Rajshahi
          University of Engineering and Technology. I am passionate about
          technology, problem-solving, and building innovative solutions that
          can create a real-world impact.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-700 leading-relaxed"
        >
          Over the years, I have focused on web development, competitive
          programming, and exploring AI-driven applications. My journey has been
          driven by curiosity, persistence, and a strong desire to continuously
          learn and tackle complex challenges.
        </motion.p>

        {/* Third Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-700 leading-relaxed"
        >
          My goal is to contribute to meaningful projects, grow as a problem
          solver, and pursue research opportunities at top universities. I aim
          to combine my technical skills and entrepreneurial mindset to create
          impactful solutions.
        </motion.p>
      </div>
    </section>
  );
}
