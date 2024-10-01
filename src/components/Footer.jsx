import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <figure>
          <img src={logo} alt="logo" width={200} className="mb-2" />
          <div className="mb-10 h-3 w-12 bg-yellow-400"></div>
        </figure>
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              {link.icon}
            </a>
          );
        })}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compileTab. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
