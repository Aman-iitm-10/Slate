import React, { useState } from 'react';
import faqData from './faq_data.json';
import Tooltip from "../app/components/Tooltip";
import "./faq.css";

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Tooltip />
      <h2 className="text-3xl title font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqData.map((faq, index) => (
          <div 
            key={faq.id} 
            className="mb-4 border faq-item border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-xl ">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {activeIndex === index && (
              <div className="p-4 bg-white dark:bg-gray-900 toggle">
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;