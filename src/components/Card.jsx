const Card = ({ image, title, subtitle, link }) => {
  return (
    <div className="m-4 block max-w-sm overflow-hidden rounded-sm group relative">
      <a href={link}>
        <div className="relative h-64">
          {" "}
          {/* Fixed height for uniformity */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-300 ease-in-out" // Added transition for smoothness
          />
          <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out" />{" "}
          {/* Dark overlay */}
        </div>
      </a>
      <div className="absolute inset-0 mx-4 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        <p className="mb-4 text-sm font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
