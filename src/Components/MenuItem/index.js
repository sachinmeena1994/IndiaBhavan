import React from "react";

const MenuItem = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="border rounded-lg shadow-md cursor-pointer overflow-hidden hover:shadow-lg transition duration-300"
    >
      {/* Image */}
      <img
        src={item.images[0]} // Display the first image
        alt={item.name}
        className="w-full h-48 object-cover"
      />

      {/* Details */}
      <div className="p-4">
        <h3 className="font-bold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold">₹{item.price}</span>
          <span className="text-sm text-gray-500">{item.category}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
