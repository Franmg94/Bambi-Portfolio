import { WORKEXPERIENCE } from "../constants/index";
import "../index.css";

const Trajectory = () => {
  return (
    <section id="trajectory" className="container mx-auto mt-20 px-4">
      <h2 className="heading-lg">I worked as</h2>
      <div className="underline"></div>

      <div className="flex flex-col md:flex-row">
        <div className="space-y-10">
          {WORKEXPERIENCE.map((work, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start text-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="flex-1 p-4 text-center md:text-left">
                <h3 className="text-4xl font-bold mb-2 text-fuchsia-500">
                  {work.jobTitle}
                </h3>
                <span className="mb-2">with </span>
                <a
                  href={work.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fuchsia-800"
                >
                  <strong>{work.eventName}</strong>
                </a>
                <p className="text-gray-400">{work.date}</p>
                <p className="text-gray-200 mt-4">{work.description}</p>
              </div>
              <div className="underline mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trajectory;
