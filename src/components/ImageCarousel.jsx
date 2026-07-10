import { useEffect, useState } from 'react';
import '../styles/ImageCarousel.scss';

function ImageCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || children.length < 2) return undefined;

    const timerId = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % children.length);
    }, 5000);

    return () => window.clearTimeout(timerId);
  }, [activeIndex, children.length, isPaused]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  return (
    <div
      className="image-carousel__slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {children.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="image-carousel__slider__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              aria-label={`Mostrar imagen ${index + 1}`}
              className={
                activeIndex === index
                  ? "image-carousel__slider__links-small image-carousel__slider__links-small-active"
                  : "image-carousel__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Imagen siguiente"
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <button
        type="button"
        aria-label="Imagen anterior"
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    </div>
  );
}

export default ImageCarousel;
