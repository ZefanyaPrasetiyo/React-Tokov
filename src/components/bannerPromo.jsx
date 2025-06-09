import React, { useEffect, useState, useRef } from "react";
import gambarSatu from "../assets/image/Gambar1.jpg";
import gambarDua from "../assets/image/Gambar2.png";

const images = [gambarSatu, gambarDua];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();

  // Auto-slide setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Update posisi slider saat index berubah
  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentIndex * (100 / images.length)}%)`;
  }, [currentIndex]);

  // Tombol Prev
  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Tombol Next
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden h-80 mt-2">
        <div
          id="slider"
          className="flex transition-transform duration-500"
          ref={slideRef}
          style={{ width: `${images.length * 50}%` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={img}
                className="w-full h-80 rounded-xl object-contain"
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigasi */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`dot w-4 h-4 rounded-full cursor-pointer transition-all ${
              index === currentIndex ? "bg-blue-500" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export { ImageSlider };
