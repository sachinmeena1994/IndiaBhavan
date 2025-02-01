import React from "react";

const MenuItem = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="border rounded-lg shadow-md cursor-pointer overflow-hidden hover:shadow-lg hover:scale-105 transform transition duration-300"
      role="button"
      aria-label={`View details for ${item.name}`}
    >
      {/* Image */}
      <div className="relative h-48">
        <img
          src={item.images?.[0] || "/default-image.jpg"} // Fallback to a default image
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.vegetarian && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Vegetarian
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{item.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {item.description || "No description available"}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-600 font-bold text-xl">
            ${item.price}
          </span>
          <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
            {item.category || "Uncategorized"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
