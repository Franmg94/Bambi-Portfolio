import { motion } from "framer-motion";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <div className="container mt-20 md:mb-52 mx-auto" id="about">
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="p-4 text-5xl uppercase lg:text-[6rem] leading-tight tracking-wide mt-20 mb-20"
      >
        {ABOUT.text1}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-10 lg:mt-24 px-4 lg:px-40 text-lg leading-lose mt-20 mb-20"
      >
        {ABOUT.text2}
      </motion.p>
    </div>
  );
};

export default About;
