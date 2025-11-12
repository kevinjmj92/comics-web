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
      <button className="carousel-btn carousel-btn--prev" onClick={prevSlide}>
        ‹
      </button>
      
      <button className="carousel-btn carousel-btn--next" onClick={nextSlide}>
        ›
      </button>

      <div className="carousel-slides">
        {comics.map((comic, index) => (
          <div
            key={comic.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${comic.coverImage})`,
              backgroundPosition: 'right center',
              backgroundSize: 'cover'
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

      {/* INDICADORES NUEVOS CON CLASE DIFERENTE */}
      <div 
        className="comics-dots"
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '15px',
          zIndex: '10',
        }}
      >
        {comics.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              background: index === currentSlide ? '#ff0000' : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;