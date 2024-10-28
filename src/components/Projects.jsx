import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import Card from "./Card";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-10 bg-fuchsia-700">
      {/* Solid background color */}
      {/* Top Gradient from Black to Fuchsia */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black to-fuchsia-700"></div>
      {/* Bottom Gradient from Fuchsia to Black */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-fuchsia-700 to-fuchsia-900"></div>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="heading-lg"
      >
        Festivals I have worked with
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="flex flex-wrap justify-center py-8 relative z-10"
      >
        {PROJECTS.map((project, index) => {
          return (
            <motion.div
              variants={itemVariants}
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Card
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                link="#"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
