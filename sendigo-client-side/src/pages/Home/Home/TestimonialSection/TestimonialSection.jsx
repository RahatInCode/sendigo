import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import customerTopImage from '../../../../assets/customer-top.png'; // Placeholder for customer-top.png
import Quote from '../../../../assets/reviewQuote.png'; // Placeholder for quote image
const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with middle slide (Awlad Hossain)
  
  const testimonials = [
   {
      id: 0,
      name: "Hazel Ahammad",
      role: "Senior Product Designer",
      text: "Enhanced user experience with intuitive design patterns that make complex workflows feel simple and engaging for our customers.",
      avatar: "HA"
    },
    {
      id: 1,
      name: "Awlad Hossain",
      role: "Senior Product Designer", 
      text: "A posture corrector works by providing support and gentle reminders to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      avatar: "AH"
    },
    {
      id: 2,
      name: "Nour Uddin",
      role: "Senior Product Designer",
      text: "Streamlined development process with comprehensive design systems that ensure consistency across all product touchpoints.",
      avatar: "NU"
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      role: "Physiotherapist",
      text: "After using this posture corrector for just 3 weeks, my patients report significant improvements in their daily comfort and reduced back pain.",
      avatar: "SM"
    },
    {
      id: 4,
      name: "David Chen",
      role: "Office Manager",
      text: "Working from home became so much better with this device. No more slouching during long meetings - it's been a game changer for my productivity.",
      avatar: "DC"
    },
    {
      id: 5,
      name: "Maria Rodriguez",
      role: "Yoga Instructor",
      text: "I recommend this to all my students. The gentle reminders help them maintain awareness of their posture even outside of class sessions.",
      avatar: "MR"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Software Engineer",
      text: "As someone who codes 8+ hours daily, this has been essential for preventing the shoulder pain I used to get from hunching over my keyboard.",
      avatar: "JW"
    },
    {
      id: 7,
      name: "Emily Foster",
      role: "Fitness Coach",
      text: "The design is so comfortable that I forget I'm wearing it. It's helped me maintain better form during workouts and daily activities.",
      avatar: "EF"
    },
    {
      id: 8,
      name: "Robert Kim",
      role: "Chiropractor",
      text: "I've seen remarkable improvements in my patients who use this consistently. The technology really works to retrain postural habits effectively.",
      avatar: "RK"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Image and Title */}
        <div className="text-center mb-12">
          <div className="mb-6">
            {/* Placeholder for customer-top.png image */}
            <div className="w-84 h-16 mx-auto rounded-lg flex items-center justify-center">
            <img src={customerTopImage} alt="" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What our customers are saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce 
            pain, and strengthen your body with ease!
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-8 w-full max-w-5xl">
              {/* Left testimonial - partially visible */}
              <div className={`hidden md:block transition-all duration-500 ${
                currentSlide === 0 ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
              }`}>
                <div className="bg-white rounded-2xl p-6 shadow-sm max-w-xs">
                  <div className="text-gray-400 text-4xl mb-4"><img src={Quote} alt="" /></div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                    {testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].text}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
                      {testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].name}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center testimonial - fully visible */}
              <div className="transition-all duration-500 transform scale-100">
                <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
                  <div className="text-teal-500 text-5xl mb-6"><img src={Quote} alt="" /></div>
                  <p className="text-gray-700 leading-relaxed mb-8 text-base">
                    {testimonials[currentSlide].text}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-medium mr-4">
                      {testimonials[currentSlide].avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonials[currentSlide].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right testimonial - partially visible */}
              <div className={`hidden md:block transition-all duration-500 ${
                currentSlide === 2 ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
              }`}>
                <div className="bg-white rounded-2xl p-6 shadow-sm max-w-xs">
                  <div className="text-gray-400 text-4xl mb-4"><img src={Quote} alt="" /></div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                    {testimonials[(currentSlide + 1) % testimonials.length].text}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
                      {testimonials[(currentSlide + 1) % testimonials.length].avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {testimonials[(currentSlide + 1) % testimonials.length].name}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {testimonials[(currentSlide + 1) % testimonials.length].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Previous button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;




