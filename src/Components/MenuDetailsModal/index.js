import React, { useState, useEffect } from "react";

const MenuDetailsModal = ({ item, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (item?.images?.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [item]);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  if (!item) {
    return null; // Don't render if item is undefined
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-8 relative flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Left Section: Image Carousel */}
        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <div className="w-full h-96 flex items-center justify-center overflow-hidden rounded-lg shadow-md bg-gray-100">
            <img
              src={
                item.images?.[currentImageIndex] ||
                "https://via.placeholder.com/300"
              }
              alt={item.name || "Image"}
              className="object-cover w-full h-full"
            />
          </div>
          {item.images?.length > 1 && (
            <div className="flex mt-4 space-x-2 overflow-x-auto">
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${item.name || "Image"} ${index + 1}`}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    currentImageIndex === index
                      ? "border-blue-500"
                      : "border-gray-300"
                  } hover:scale-105 transition transform duration-200`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Section: Details */}
        <div className="lg:w-1/2 w-full p-8 space-y-6">
          <h2 className="text-4xl font-bold text-blue-600">
            {item.name || "Food Name"}
          </h2>
          <p className="text-gray-700 text-lg">
            {item.description || "No description available."}
          </p>
          <p className="text-2xl font-semibold text-green-600">
            <strong>Price:</strong> ₹{item.price || "N/A"}
          </p>
          <p className="text-gray-700 text-lg">
            <strong className="text-red-500">Spicy Level:</strong>{" "}
            {item.spicyLevel || "Not specified"}
          </p>
          <p
            className={`text-xl font-semibold ${
              item.vegetarian ? "text-green-600" : "text-red-600"
            }`}
          >
            <strong>Vegetarian:</strong> {item.vegetarian ? "Yes" : "No"}
          </p>
          {item.ingredients?.length > 0 && (
            <div>
              <h3 className="font-bold text-xl text-gray-800">Ingredients:</h3>
              <ul className="list-disc list-inside text-gray-600 text-lg">
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuDetailsModal;
