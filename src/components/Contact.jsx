import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

// Contact Data
const contacts = [
  {
    id: 1,
    name: "Gmail",
    icon: <SiGmail size={24} color="red" />,
    property: `shadidhasan1@gmail.com`,
    link: `https://mail.google.com/mail/?view=cm&fs=1&to=shadidhasan1@gmail.com&su=Hello&body=I%20want%20to%20connect%20with%20you`,
  },
  {
    id: 2,
    name: "Phone",
    icon: <FaPhone size={24} color="green" />,
    property: "+880 1609-334597",
    link: "+880 1609-334597",
  },
  {
    id: 3,
    name: "GitHub",
    icon: <FaGithub size={24} />,
    link: "https://github.com/shadidniloy1",
    property: "https://github.com/shadidniloy1",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: <FaLinkedin size={24} color="blue" />,
    link: "https://www.linkedin.com/in/shadid-hasan",
    property: "https://www.linkedin.com/in/shadid-hasan",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Let’s Connect
          </h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to me for opportunities, collaborations, or
            just a friendly hello!
          </p>

          <ul className="space-y-4">
            {contacts.map((item) => (
              <li className="flex gap-1" key={item.id}>
                {item.icon}
                <span className="font-medium">{item.name}:</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition"
                >
                  <span className="font-medium">{item.property}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 space-y-4"
        >
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
