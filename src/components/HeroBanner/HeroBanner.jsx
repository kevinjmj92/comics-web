import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.css';

const HeroBanner = ({ comics }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % comics.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [comics.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % comics.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + comics.length) % comics.length);
  };

  return (
    <section className="hero-carousel">
      {/* Botones de navegación */}
      <button className="carousel-btn carousel-btn--prev" onClick={prevSlide} aria-label="Slide anterior">
        ‹
      </button>
      
      <button className="carousel-btn carousel-btn--next" onClick={nextSlide} aria-label="Slide siguiente">
        ›
      </button>

      {/* Slides */}
      <div className="carousel-slides">
        {comics.map((comic, index) => (
          <div
            key={comic.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${comic.coverImage})`,
              // Forzar que la imagen se posicione a la derecha
              backgroundPosition: 'right center'
            }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h1 className="slide-title">{comic.title}</h1>
                <p className="slide-synopsis">{comic.synopsis}</p>
                <div className="slide-meta">
                  <span className="slide-status">{comic.status}</span>
                  <span className="slide-chapters">{comic.chapters} Capítulos</span>
                  <span className="slide-rating">⭐ {comic.rating}</span>
                </div>
                <div className="slide-genres">
                  {comic.genre.map((genre, idx) => (
                    <span key={idx} className="slide-genre-tag">{genre}</span>
                  ))}
                </div>
                <Link to={`/comic/${comic.id}`} className="slide-button">
                  Leer Ahora
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores - ahora sin fondo */}
      <div className="carousel-indicators">
        {comics.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;