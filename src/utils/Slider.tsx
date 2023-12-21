import React, { useState, useEffect } from 'react';

interface SlideShowProps {
  slides: string[];
}

const SlideShow: React.FC<SlideShowProps> = ({ slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change the duration as needed

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="relative h-80">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`slide-${index + 1}`}
          className={`border absolute top-0 left-0 w-96 h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default SlideShow;
