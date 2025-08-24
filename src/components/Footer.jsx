import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="text-gray-900 flex justify-center items-center"
    >
      <p>All Rights Reserved: <span className="text-cyan-800">@shadid_niloy</span></p>
    </motion.div>
  );
};

export default Footer;
