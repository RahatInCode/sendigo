import React from 'react';
import Lottie from 'lottie-react';
import trackingAnim from "../../../assets/lottie/tracking.json";
import deliveryAnim from "../../../assets/lottie/safe_delivery.json";
import supportAnim from "../../../assets/lottie/call_support.json";

const FeaturesShowcase = () => {
  const features = [
    {
      title: "Live Parcel Tracking",
      desc: "Track your parcel in real-time from pickup to delivery. No more wondering — just check and know exactly where it is.",
      animation: trackingAnim,
    },
    {
      title: "100% Safe Delivery",
      desc: "Your package is our priority. We ensure secure handling, tamper-proof packaging, and reliable drop-offs every single time.",
      animation: deliveryAnim,
    },
    {
      title: "24/7 Call Support",
      desc: "Need help? Our support team is just a call away — anytime, any day. We’re here to assist you around the clock.",
      animation: supportAnim,
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      {features.map((item) => (
        <div
          key={item.title}
          className="flex flex-col md:flex-row items-start gap-6 bg-white p-6 rounded-2xl shadow-lg border flex-1"
        >
          {/* Lottie Animation */}
          <div className="w-20 md:w-28 flex-shrink-0 border-r-2 border-gray-300 pr-4">
  <Lottie animationData={item.animation} loop autoplay />
</div>


          {/* Text Block */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesShowcase;
