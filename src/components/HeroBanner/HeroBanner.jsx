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

  return (
    <section className="hero-carousel">
      <div className="carousel-slides">
        {comics.map((comic, index) => (
          <div
            key={comic.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            {/* CONTENIDO A LA IZQUIERDA */}
            <div className="slide-content-container">
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

            {/* IMAGEN A LA DERECHA */}
            <div className="slide-image-container">
              <img 
                src={comic.coverImage} 
                alt={comic.title}
                className="slide-image"
              />
              {/* Efecto de difuminado opcional entre contenido e imagen */}
              <div className="image-gradient"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Puntos indicadores */}
      <div className="carousel-indicators">
        {comics.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;