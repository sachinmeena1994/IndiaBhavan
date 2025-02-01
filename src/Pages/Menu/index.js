import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Utilis/Firebase";
import CategoryTabs from "../../Components/CategoryTabs";
import MenuItem from "../../Components/MenuItem";
import MenuDetailsModal from "../../Components/MenuDetailsModal";
import Skeleton from "../../Components/LoaderSkeleton";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchMenu = async () => {
      const querySnapshot = await getDocs(collection(db, "Menu"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMenuData(data);

      // Extract unique categories
      const uniqueCategories = [
        "All",
        ...new Set(data.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);

      setIsLoading(false); // Set loading to false after data is fetched
    };

    fetchMenu();
  }, []);

  const filteredMenu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-6">
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Skeleton Loader */}
      {isLoading ? (
        <Skeleton width="100%" height="200px" count={6} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredMenu.map((item) => (
            <MenuItem key={item.id} item={item} onClick={setSelectedItem} />
          ))}
        </div>
      )}

      {/* Modal for Additional Details */}
      {selectedItem && (
        <MenuDetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default Menu;
