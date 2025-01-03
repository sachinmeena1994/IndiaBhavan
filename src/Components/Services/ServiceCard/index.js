import React from "react";

const ServiceCard = ({ title, subtitle, description, image }) => {
  return (
    <div className="relative flex flex-col items-center text-center bg-gray-700 shadow-lg rounded-lg p-6 m-4 group overflow-hidden">
      {/* Solid Background with Hover Effect */}
      <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image */}
      {image && (
        <div className="relative z-10">
          <img
            src={image}
            alt={title}
            className="w-32 h-32 mb-4 object-cover rounded-full group-hover:scale-110 transition-transform duration-500 shadow-md"
          />
        </div>
      )}

      {/* Title */}
      <h2 className="relative z-10 text-2xl font-extrabold text-white mb-2 group-hover:text-gray-900 transition-colors duration-500">
        {title}
      </h2>

      {/* Subtitle */}
      <h3 className="relative z-10 text-xl font-semibold text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-500">
        {subtitle}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-gray-200 group-hover:text-gray-100 transition-colors duration-500">
        {description}
      </p>

      {/* Border Animation */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 rounded-lg transition-all duration-500"></div>
    </div>
  );
};

export default ServiceCard;
