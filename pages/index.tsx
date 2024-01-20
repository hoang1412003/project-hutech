import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import styles from "../styles/Home.module.css";

interface Slide {
  id: number;
  imageUrl: string;
}

const Slider: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      imageUrl: 'https://pubcdn.mojo.vn/mojo/mojo_ai/2023/12/16/4c4908c1-fcdb-413c-ac97-00fa38dfed0f.png'
    },
    {
      id: 2,
      imageUrl: 'https://pubcdn.mojo.vn/mojo/mojo_ai/2023/12/16/77ce3664-0be2-47ce-8c98-d73b8189f2dd.png'
    },
    {
      id: 3,
      imageUrl: 'https://pubcdn.mojo.vn/mojo/mojo_ai/2023/12/16/acf2b0ea-b171-44ad-bad2-9249309f28f9.png'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    let interval = null;

    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [currentSlide, autoPlay]);

  return (
    <div className={styles.slider}>
      <div className={`${styles.sliderContainer} ${styles.horizontal}`}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={index === currentSlide ? `${styles.slide} ${styles.active}` : styles.slide}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <img src={slide.imageUrl} alt="Travel image" className={styles.slideImage} />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Slider;