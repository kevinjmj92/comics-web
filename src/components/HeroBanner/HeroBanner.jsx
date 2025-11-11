import { Link } from 'react-router-dom';
import './HeroBanner.css';

const HeroBanner = ({ comic }) => {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${comic.coverImage})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{comic.title}</h1>
          <p className="hero-synopsis">{comic.synopsis}</p>
          <div className="hero-meta">
            <span className="hero-status">{comic.status}</span>
            <span className="hero-chapters">{comic.chapters} Capítulos</span>
            <span className="hero-rating">⭐ {comic.rating}</span>
          </div>
          <div className="hero-genres">
            {comic.genre.map((genre, index) => (
              <span key={index} className="hero-genre-tag">{genre}</span>
            ))}
          </div>
          <Link to={`/comic/${comic.id}`} className="hero-button">
            Leer Ahora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;