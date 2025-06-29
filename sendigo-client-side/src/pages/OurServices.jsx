import React from "react";

// Dummy data for each service card
const services = [
  {
    title: "Fast Delivery",
    description: "Lightning-fast delivery across the city within 45 minutes.",
    image: "https://img.icons8.com/?size=100&id=9341&format=png&color=000000",
  },
  {
    title: "Food Delivery",
    description: "Deliver your meals hot & fresh from restaurants or home.",
    image: "https://img.icons8.com/?size=100&id=t5k8wbKOBK1J&format=png&color=000000",
  },
  {
    title: "Document Courier",
    description: "Important files and documents delivered safely, securely.",
    image: "https://img.icons8.com/?size=100&id=fpAVFn3MN108&format=png&color=000000",
  },
  {
    title: "Medicine Delivery",
    description: "On-demand medicine delivery from nearby pharmacies.",
    image: "https://img.icons8.com/?size=100&id=1tQny_twXHpm&format=png&color=000000",
  },
  {
    title: "Fragile Items",
    description: "Extra care and safe handling of breakable packages.",
    image: "https://img.icons8.com/?size=100&id=8285&format=png&color=000000",
  },
  {
    title: "Cash on Delivery",
    description: "Accept payments on your behalf with full tracking.",
    image: "https://img.icons8.com/?size=100&id=BksfPCXggdni&format=png&color=000000",
  },
];

const OurServices = () => {
  return (
    <section
      className="py-12 px-4 sm:px-8 md:px-16 rounded-xl my-12 mx-auto max-w-7xl"
      style={{ backgroundColor: "rgb(3, 55, 61)" }} // Section bg color
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Our Services
      </h2>

      <span className="block text-center text-gray-300 mb-8 max-w-2xl mx-auto">
         Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
      </span>

      {/* Cards grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            data-aos="fade-up" // AOS animation
            data-aos-delay={idx * 100} // Slight stagger for each card
            className="bg-white hover:bg-[#CAEB66] transition-colors duration-300 
                      rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            {/* Avatar image with object-cover */}
            <img
              src={service.image}
              alt={service.title}
              className="w-15 h-15   object-cover mb-4"
            />

            {/* Service Title */}
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="text-sm text-gray-600 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
