import { motion } from "framer-motion";
import { TESTIMONIALS } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className=" w-full mt-20 py-16 tracking-tighter "
    >
      <h2 className="heading-lg">What People Say</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="mx-4 mb-8 flex flex-col items-center rounded-lg border border-dotted border-gray-600 p-6 md:flex-row"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="mb-4 mr-6 h-16 w-16 rounded-full md:mb-0"
            />
            <div>
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-bold">"{testimonial.name}"</p>
              <p className="text-gray-400">"{testimonial.title}"</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
