import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <motion.section
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.3,
        }}
        className="container mx-auto h-screen bg-red-300"
      >
        AboutUs
      </motion.section>
    </>
  );
};

export default AboutUs;
