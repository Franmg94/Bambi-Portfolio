import { useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSending, setIsSending] = useState(false);

  const notify = () => toast("Here is your toast.");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_uiuowgi",
          "template_rd7xgl2",
          formData,
          "QlBJDtaW1wWLfDhXf"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div
      className=" p-5 bg-gradient-to-t from-transparent from-10% to-fuchsia-700 lg:from-30%"
      id="contact"
    >
      <Toaster />
      <h2 className="heading-lg">Let's Connect</h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onSubmit={handleSubmit}
        className="mx-auto max-w-3xl p-4"
      >
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="input-form"
          />
          {errors.name && (
            <p className="text-sm text-pink-700">´{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="input-form"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
              className="text-sm text-pink-700"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="input-form"
            rows="4"
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
              className="text-sm text-pink-700"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        <button
          type="submit"
          className={`mb-8 w-full rounded bg-fuchsia-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-fuchsia-600 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
