import React, { useState } from 'react';

const faqData = [
  {
    question: "How does Sendigo ensure fast and safe delivery?",
    answer: "Sendigo uses a smart delivery routing system and trained delivery agents to ensure every parcel reaches its destination securely and on time.",
  },
  {
    question: "Can I track my parcel in real time?",
    answer: "Absolutely! Sendigo offers real-time tracking with live status updates from pickup to delivery.",
  },
  {
    question: "What areas does Sendigo currently operate in?",
    answer: "Sendigo currently operates in major urban areas. You can check availability on our website or app before scheduling a pickup.",
  },
  {
    question: "Is there a limit to parcel weight or size?",
    answer: "Yes, parcels must not exceed 15kg or 50cm in any dimension. Oversized packages may incur extra charges or be declined.",
  },
  {
    question: "How can I schedule a pickup?",
    answer: "Just log in to your Sendigo dashboard, click 'Schedule Pickup', fill in the details, and confirm!",
  },
  {
    question: "What happens if my package is damaged or lost?",
    answer: "In the rare case of damage or loss, our support team will assist you with compensation or resolution within 3-5 working days.",
  },
  {
    question: "How do I become a delivery partner?",
    answer: "Go to the 'Become a Partner' page, fill out the registration form, and our team will reach out within 48 hours.",
  },
  {
    question: "What payment options does Sendigo support?",
    answer: "We accept bKash, Nagad, Rocket, and Cash on Delivery depending on the customer's preference.",
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions (FAQ)</h2>
      <p className="text-center text-gray-600 mb-8">
        Got questions about Sendigo? Here's what people ask us most.
      </p>

      <div className="space-y-4">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center text-left text-lg font-semibold"
              onClick={() => toggleExpand(index)}
            >
              {faq.question}
              <span>{expandedIndex === index ? "−" : "+"}</span>
            </button>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-lime-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-lime-600 transition"
        >
          {showAll ? "See Less FAQ's" : "See More FAQ's"}
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
