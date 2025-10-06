import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center mt-2 bg-slate-50_ "
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* left */}
        <div className="space-y-6">
          <p className="text-lg font-medium text-slate-600">👨‍💻 Hi, I’m</p>
          <h1 className="text-4xl font-heading font-bold text-slate-900 sm:text-5xl lg:text-6xl">
            Shadid Hasan <span className="text-cyan-800">Niloy</span>
          </h1>
          <h2 className="text-2xl font-semibold text-blue-600 sm:text-3xl">
            ECE Student | Web Developer | Competitive Programmer
          </h2>
          <p className="max-w-xl text-lg text-slate-600">
            I build modern web apps using React, Tailwind, and Firebase.
            Passionate about startups, problem-solving, and research in
            technology for a better future.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shadidhasan1@gmail.com&su=Hello&body=I%20want%20to%20connect%20with%20you"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
            >
              Hire Me
            </a>
            <Link
              to='/resume'
              className="rounded-xl border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              View Resume
            </Link>
          </div>
        </div>
        {/* right */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/niloy.png"
            alt="Shadid Hasan"
            className="w-60 rounded-full shadow-lg sm:w-72 md:w-100"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
