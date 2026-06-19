import { motion } from "framer-motion";

function Section({ id, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}

      // 🔥 IMPORTANT FIX
      viewport={{ once: true, amount: 0.3 }}

      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}

      className="max-w-6xl mx-auto px-6 py-24"
    >
      {children}
    </motion.section>
  );
}

export default Section;