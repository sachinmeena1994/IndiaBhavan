import React from "react";
import ImageSlider from "../../Components/ImageSlider";

const images = [
  "https://images.pexels.com/photos/11838557/pexels-photo-11838557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/13621067/pexels-photo-13621067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/20975666/pexels-photo-20975666/free-photo-of-aerial-view-of-the-monument-portal-de-la-costa-brava-on-the-beach-in-blanes-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Home = () => {
  return (
    <>
      <ImageSlider images={images} />
      <div className="p-6">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Home Page
        </h1>
        <p className="text-lg mt-4 text-center">
          Scroll down to see more content!
        </p>
      </div>
    </>
  );
};

export default Home;
