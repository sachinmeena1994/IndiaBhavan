import React from "react";

const MenuItem = ({ item }) => {
  const { name, price, description, image } = item;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-cover rounded-full mb-4"
        />
      )}

      {/* Name and Price */}
      <h2 className="text-xl font-bold text-red-600">{name}</h2>
      <p className="text-gray-600 mb-2">{price}</p>

      {/* Description */}
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default MenuItem;
