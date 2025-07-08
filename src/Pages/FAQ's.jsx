import React, { useState } from "react";

const faqs = [
  {
    question: "What materials are used in your jewelry?",
    answer:
      "We use high-quality materials such as sterling silver, 18k gold plating, and ethically sourced gemstones to ensure durability and elegance in every piece.",
  },
  {
    question: "How do I care for my jewelry?",
    answer:
      "To maintain shine and quality, store your jewelry in a dry place, avoid water and chemicals, and gently wipe with a soft cloth after use.",
  },
  {
    question: "Do you offer customization?",
    answer:
      "Yes! We offer personalized engraving and custom design options. Please contact us with your requirements to discuss pricing and details.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 7 days of delivery. Items must be unworn and in original packaging. Custom pieces are non-returnable.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 1-2 business days. Standard delivery takes 4-6 working days, while express options are available at checkout.",
  },
  {
    question: "Is international shipping available?",
    answer:
      "Yes, we ship globally. Shipping costs and delivery time vary by location. Customs duties may apply based on your country.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 font-medium flex justify-between items-center focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="ml-2 text-pink-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
