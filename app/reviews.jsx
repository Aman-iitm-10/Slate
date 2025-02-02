import React, { useState, useEffect } from 'react';
import reviewData from './review_data.json';

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardClass = (index) => {
    const diff = (index - currentIndex + reviewData.length) % reviewData.length;
    if (diff === 0) return 'transform scale-110 z-10';
    if (diff === 1 || diff === reviewData.length - 1) return 'opacity-60 scale-90';
    return 'opacity-0 scale-75';
  };

  return (
    <div className="relative w-25 h-96 overflow-hidden bg-gray-100 dark:bg-gray-800 p-4">
      <div className="flex items-center justify-center h-full">
        {reviewData.map((review, index) => (
          <div
            key={review.id}
            className={`absolute transition-all duration-500 ease-in-out ${getCardClass(index)}`}
            style={{
              left: '50%',
              transform: `translateX(-50%) ${index === currentIndex ? 'scale(1.1)' : 'scale(0.9)'}`,
            }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-64 md:w-80">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-gray-100">{review.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{review.review}</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-2xl ${i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;