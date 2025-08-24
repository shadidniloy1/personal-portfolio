import { motion } from "framer-motion";

const skills = [
  { name: "C", level: 96 },
  { name: "C++", level: 98 },
  { name: "JavaScript", level: 97 },
  { name: "Java", level: 80 },
  { name: "React", level: 95 },
  { name: "Python", level: 82 },
  { name: "HTML", level: 92 },
  { name: "MATLAB", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-poppins font-bold text-center text-gray-800 mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="w-full"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Skill title + percentage */}
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-gray-600">{skill.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-3 bg-blue-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
