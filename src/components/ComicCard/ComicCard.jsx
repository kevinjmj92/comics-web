import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ComicCard.css';

const ComicCard = ({ comic }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    console.log(`Error loading image for: ${comic.title}`);
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Función para generar color basado en el título (fallback)
  const generateColorFromTitle = (title) => {
    const colors = [
      '#ff0000', '#0000ff', '#00ff00', '#ffff00', '#ff00ff', '#00ffff',
      '#ff6b35', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'
    ];
    const index = title.length % colors.length;
    return colors[index];
  };

  return (
    <div className="comic-card">
      <Link to={`/comic/${comic.id}`}>
        <div className="comic-image-container">
          {!imageError ? (
            <>
              <img 
                src={comic.coverImage} 
                alt={comic.title}
                className={`comic-image ${imageLoading ? 'loading' : ''}`}
                onError={handleImageError}
                onLoad={handleImageLoad}
                loading="lazy"
              />
              {imageLoading && (
                <div className="image-loading">
                  <div className="loading-spinner"></div>
                </div>
              )}
            </>
          ) : (
            <div 
              className="comic-image fallback-image"
              style={{ backgroundColor: generateColorFromTitle(comic.title) }}
            >
              <div className="fallback-text">
                <span>{comic.title.split(' ').map(word => word[0]).join('').toUpperCase()}</span>
              </div>
            </div>
          )}
          <div className="comic-overlay">
            <span className="comic-status">{comic.status}</span>
            <span className="comic-rating">⭐ {comic.rating}</span>
          </div>
          {comic.isNew && <span className="new-badge">NUEVO</span>}
        </div>
        <div className="comic-info">
          <h3 className="comic-title">{comic.title}</h3>
          <p className="comic-chapters">{comic.chapters} Capítulos</p>
          <div className="comic-genres">
            {comic.genre.slice(0, 2).map((genre, index) => (
              <span key={index} className="genre-tag">{genre}</span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ComicCard;