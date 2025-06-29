import React from 'react';
import amazon from '../../../../assets/brands/amazon.png';
import amazonVector from '../../../../assets/brands/amazon_vector.png';
import casio from '../../../../assets/brands/casio.png';
import moonstar from '../../../../assets/brands/moonstar.png';
import randstad from '../../../../assets/brands/randstad.png';
import start from '../../../../assets/brands/start.png';
import startPeople from '../../../../assets/brands/start-people 1.png';

const logos = [
  amazon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  start,
  startPeople,
];

const BrandsSection = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
        We've helped thousands of sales teams
      </h2>

      {/* Marquee */}
      <div className="marquee-wrapper px-4">
        <div className="marquee-track space-x-12">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`brand-${index}`}
              className="h-12 w-40 object-contain hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

