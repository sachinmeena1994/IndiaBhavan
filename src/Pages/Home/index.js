import React from "react";
import ImageSlider from "../../Components/ImageSlider";
import image1 from "../../Assests/Images/image1.jpg";
import image2 from "../../Assests/Images/image2.jpg";
import image3 from "../../Assests/Images/image3.jpg";
const images = [image3, image1, image2];

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
