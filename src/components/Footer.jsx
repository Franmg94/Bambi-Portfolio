import { motion } from "framer-motion";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <h2>Ceren Kalay</h2>
          <div className="underline-2"></div>
        </motion.figure>
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => {
          return (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.5 * index }}
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              {link.icon}
            </motion.a>
          );
        })}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compileTab. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
