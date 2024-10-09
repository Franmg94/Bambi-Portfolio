import { PROFILE, TAGS } from "../constants";
import profilePic from "../assets/mainPic.jpg";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Event Manager", "Community Builder", "Program Curator"],
    loop: true,
  });

  return (
    <div
      className="relative flex min-h-screen items-end justify-center"
      id="hero"
    >
      <motion.img
        src={profilePic}
        alt={PROFILE.name}
        className="absolute inset-0 z-10 h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="z-20 mx-4 max-w-3xl pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
          {PROFILE.name}
        </h1>
        <motion.p
          key={PROFILE.info}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-2 font-semibold text-fuchsia-400 tracking-wide"
        >
          I'm a{" "}
          <span className="pt-2 font-bold text-fuchsia-400 tracking-widest text-xl">
            {text}
          </span>
          <span>
            <Cursor />
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
