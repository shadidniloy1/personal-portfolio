import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Developer",
    company: "Oasis Infobyte",
    type: "Internship",
    duration: "Jan 2025 - Feb 2025 · 2 mos",
    location: "Remote",
  },
  {
    role: "C++ Developer",
    company: "CodSoft",
    type: "Internship",
    duration: "Nov 2024 - Dec 2024 · 2 mos",
    location: "Kolkata, West Bengal, India · Remote",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 md:px-20 font-inter">
      <h2 className="text-3xl font-bold text-center font-poppins text-gray-800 mb-12">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="p-6 rounded-2xl shadow-md bg-white border border-gray-200"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
            <p className="text-blue-600 font-medium">{exp.company} · {exp.type}</p>
            <p className="text-gray-600">{exp.duration}</p>
            <p className="text-gray-500">{exp.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
