import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../../../../assets/be-a-merchant-bg.png";
import locationImg from "../../../../assets/location-merchant.png";

const BeMerchant = () => {
     useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-[#023b3b] rounded-xl overflow-hidden w-full my-10">

      {/* Glowing background animation */}
      <img
        src={bgImage}
        alt="Lighting Background"
        className="absolute top-0 left-0 w-full object-cover opacity-30 z-0 animate-pulse"
      />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 md:p-10 lg:p-16">
        {/* Left Content */}
        <div
          className="text-white max-w-2xl"
          data-aos="fade-right"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
            We offer the lowest delivery charge with the highest value along with
            100% safety of your product. Sendigo courier delivers your parcel in every
            corner of Bangladesh right on time.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#b7dc55] hover:bg-[#a1c84a] text-black font-semibold px-5 py-2 rounded-full transition-all">
              Become a Merchant
            </button>
            <button className="border border-[#b7dc55] hover:bg-[#b7dc55] hover:text-black text-[#b7dc55] font-semibold px-5 py-2 rounded-full transition-all">
              Earn with Sendigo
            </button>
          </div>
        </div>

        {/* Right image */}
        <div
          className="flex-shrink-0"
          data-aos="fade-left"
        >
          <img
            src={locationImg}
            alt="Merchant Location"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BeMerchant;
