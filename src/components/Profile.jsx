import { FaCode } from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const CompetitiveProfiles = () => {
  const profiles = [
    {
      id: 1,
      name: "Codeforces",
      icon: <SiCodeforces size={24} color="#1f8acb" />,
      link: "https://codeforces.com/profile/Shadid_H_Niloy",
    },
    {
      id: 2,
      name: "LeetCode",
      icon: <SiLeetcode size={24} color="#f89f1b" />,
      link: "https://leetcode.com/u/shadid_niloy/",
    },
    {
      id: 3,
      name: "AtCoder",
      icon: <FaCode size={24} color="purple" />,
      link: "https://atcoder.jp/users/niloy_404",
    },
    {
      id: 4,
      name: "CodeChef",
      icon: <SiCodechef size={24} color="purple" />,
      link: "https://www.codechef.com/users/niloy_404",
    },
  ];

  return (
    <section id="profile" className="py-12">
      <h2 className="text-3xl font-poppins text-gray-800 font-bold text-center mb-8">
        Competitive Programming
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {profiles.map((profile) => (
          <motion.a
            key={profile.id}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 rounded-xl shadow-lg border hover:shadow-xl transition duration-300"
          >
            {profile.icon}
            <span className="font-medium">{profile.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CompetitiveProfiles;
