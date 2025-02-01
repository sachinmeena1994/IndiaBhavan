import React, { useState } from "react";
import { addDoc, updateDoc, collection, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../Utilis/Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodForm = ({
  editMode,
  editFoodData,
  setMenuData,
  setIsAddFormVisible,
}) => {
  const [newFood, setNewFood] = useState(
    editFoodData || {
      name: "",
      price: "",
      category: "",
      description: "",
      spicyLevel: "",
      preparationTime: "",
      servingSize: "",
      vegetarian: false,
      images: [],
      ingredients: "",
    }
  );
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelection = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    setImagesToUpload(files);
  };
  // Validate Inputs
  const validateInputs = () => {
    const errors = {};
    if (!newFood.name.trim()) errors.name = "Food name is required.";
    if (!newFood.price || newFood.price <= 0)
      errors.price = "Price must be greater than 0.";
    if (!newFood.category.trim()) errors.category = "Category is required.";
    if (!newFood.description.trim())
      errors.description = "Description is required.";
    if (!newFood.spicyLevel.trim())
      errors.spicyLevel = "Spicy level is required.";
    if (!newFood.preparationTime?.trim())
      errors.preparationTime = "Preparation time is required.";
    if (!newFood.servingSize?.trim())
      errors.servingSize = "Serving size is required.";
    if (imagesToUpload.length === 0)
      errors.images = "At least one image is required.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Upload images to Firebase Storage and return their URLs
  const uploadImages = async () => {
    const uploadedImageUrls = [];
    setIsLoading(true);
    for (const image of imagesToUpload) {
      const imageRef = ref(storage, `foodImages/${image.name}`);
      await uploadBytes(imageRef, image);
      const downloadURL = await getDownloadURL(imageRef);
      uploadedImageUrls.push(downloadURL);
    }
    setIsLoading(false);
    return uploadedImageUrls;
  };

  // Handle Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const uploadedImages = await uploadImages();
      const foodData = {
        ...newFood,
        images: uploadedImages,
      };
      if (newFood.ingredients?.trim()) {
        foodData.ingredients = newFood.ingredients
          .split(",")
          .map((i) => i.trim());
      }

      if (editMode) {
        // Update existing food item
        await updateDoc(doc(db, "Menu", editFoodData.id), foodData);
        setMenuData((prev) =>
          prev.map((item) =>
            item.id === editFoodData.id
              ? { id: editFoodData.id, ...foodData }
              : item
          )
        );
        toast.success("Food item updated successfully!");
      } else {
        // Add new food item
        const docRef = await addDoc(collection(db, "Menu"), foodData);
        setMenuData((prev) => [...prev, { id: docRef.id, ...foodData }]);
        toast.success("Food item added successfully!");
      }

      setIsAddFormVisible(false);
    } catch (error) {
      toast.error("Error saving food item.");
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded-md p-6 mb-6"
      onSubmit={handleFormSubmit}
    >
      <h3 className="text-lg font-bold mb-4">
        {editMode ? "Edit Food Item" : "Add New Food Item"}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block font-semibold">Food Name</label>
          <input
            type="text"
            value={newFood.name}
            onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
            className="border rounded-md p-2 w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold">Price</label>
          <input
            type="number"
            value={newFood.price}
            onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
            className="border rounded-md p-2 w-full"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold">Category</label>
          <input
            type="text"
            value={newFood.category}
            onChange={(e) =>
              setNewFood({ ...newFood, category: e.target.value })
            }
            className="border rounded-md p-2 w-full"
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            value={newFood.description}
            onChange={(e) =>
              setNewFood({ ...newFood, description: e.target.value })
            }
            className="border rounded-md p-2 w-full"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        {/* Spicy Level */}
        <div>
          <label className="block font-semibold">Spicy Level</label>
          <input
            type="text"
            value={newFood.spicyLevel}
            onChange={(e) =>
              setNewFood({ ...newFood, spicyLevel: e.target.value })
            }
            className="border rounded-md p-2 w-full"
          />
          {errors.spicyLevel && (
            <p className="text-red-500 text-sm">{errors.spicyLevel}</p>
          )}
        </div>

        {/* Preparation Time */}
        <div>
          <label className="block font-semibold">Preparation Time</label>
          <input
            type="text"
            value={newFood.preparationTime}
            onChange={(e) =>
              setNewFood({ ...newFood, preparationTime: e.target.value })
            }
            className="border rounded-md p-2 w-full"
          />
          {errors.preparationTime && (
            <p className="text-red-500 text-sm">{errors.preparationTime}</p>
          )}
        </div>

        {/* Serving Size */}
        <div>
          <label className="block font-semibold">Serving Size</label>
          <input
            type="text"
            value={newFood.servingSize}
            onChange={(e) =>
              setNewFood({ ...newFood, servingSize: e.target.value })
            }
            className="border rounded-md p-2 w-full"
          />
          {errors.servingSize && (
            <p className="text-red-500 text-sm">{errors.servingSize}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold">Ingredients</label>
          <input
            type="text"
            placeholder="Separate by commas"
            value={newFood.ingredients}
            onChange={(e) =>
              setNewFood({ ...newFood, ingredients: e.target.value })
            }
            className="border rounded-md p-2 w-full"
          />
        </div>

        {/* Vegetarian */}
        <div>
          <label className="block font-semibold">Vegetarian</label>
          <input
            type="checkbox"
            checked={newFood.vegetarian}
            onChange={(e) =>
              setNewFood({ ...newFood, vegetarian: e.target.checked })
            }
            className="border rounded-md p-2"
          />
        </div>

        {/* Images */}
        <div>
          <label className="block font-semibold">Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleImageSelection(e)}
            className="border rounded-md p-2 w-full"
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
        disabled={isLoading}
      >
        {isLoading ? "Saving..." : editMode ? "Update Food" : "Add Food"}
      </button>
    </form>
  );
};

export default FoodForm;
