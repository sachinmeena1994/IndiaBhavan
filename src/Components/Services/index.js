import React from "react";
import ServiceCard from "./ServiceCard/index";
import image1 from "../../Assests/Images/image1.jpg";
import image2 from "../../Assests/Images/image2.jpg";
import image3 from "../../Assests/Images/image3.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "CATERING",
      subtitle: "Catering",
      description:
        "We offer catering services that is perfect for any event or party, business meeting or special occasion.",
      image: image1,
    },
    {
      title: "DINE-IN",
      subtitle: "Dine",
      description:
        "Our menu offers both a host of vegetarian items as well as non-vegetarian items, try out our specialties today!",
      image: image2,
    },
    {
      title: "ORDER ONLINE",
      subtitle: "Specials",
      description:
        "You can choose your menu from our large selection of Indian specialties whether you're looking to dine-in or takeout.",
      image: image3,
    },
  ];

  return (
    <div className="py-16 bg-gray-900">
      <h1 className="text-5xl font-extrabold text-center text-red-500 mb-12">
        Our Services
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
