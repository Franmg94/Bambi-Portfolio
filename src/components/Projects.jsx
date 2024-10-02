import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import Card from "./Card";
import { MdOpacity } from "react-icons/md";

const containerVariants = {
  hidden: { Opacity: 0, y: -20 },
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
    <div id="projects">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mt-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center py-8"
      >
        {PROJECTS.map((project, index) => {
          return (
            <motion.div variants={itemVariants} key={index}>
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
    </div>
  );
};

export default Projects;
