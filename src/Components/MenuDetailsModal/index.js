const MenuDetailsModal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 p-6 relative flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl"
        >
          &times;
        </button>

        {/* Left Section: Image Carousel */}
        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <div className="w-full h-72 flex items-center justify-center overflow-hidden rounded-lg shadow-md bg-gray-100">
            <img
              src={item.images[0]}
              alt={item.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {item.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${item.name} ${index + 1}`}
                className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:scale-105 transition transform duration-200"
              />
            ))}
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="lg:w-1/2 w-full p-6 space-y-4">
          {/* Item Details */}
          <h2 className="text-3xl font-bold text-blue-600">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-lg font-semibold text-green-600">
            <strong>Price:</strong> ₹{item.price}
          </p>
          <p className="text-gray-700">
            <strong className="text-red-500">Spicy Level:</strong>{" "}
            {item.spicyLevel}
          </p>
          <p
            className={`text-gray-700 ${
              item.vegetarian ? "text-green-600" : "text-red-600"
            }`}
          >
            <strong>Vegetarian:</strong> {item.vegetarian ? "Yes" : "No"}
          </p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="font-bold text-xl text-gray-800">Reviews:</h3>
            <div className="space-y-4 mt-2 max-h-40 overflow-y-auto bg-gray-50 p-4 rounded-lg shadow-inner">
              {item.reviews.map((review, index) => (
                <div
                  key={index}
                  className="p-3 border rounded-lg bg-white shadow-sm hover:bg-gray-100 transition"
                >
                  <p className="font-semibold text-blue-500">{review.userId}</p>
                  <p className="text-gray-700">{review.comment}</p>
                  <p className="text-sm text-gray-500">
                    Rating:{" "}
                    <span className="text-yellow-500 font-bold">
                      {review.rating} / 5
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetailsModal;
