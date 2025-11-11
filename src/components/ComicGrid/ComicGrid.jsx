import ComicCard from '../ComicCard/ComicCard';
import './ComicGrid.css';

const ComicGrid = ({ comics, title, showViewAll = false }) => {
  return (
    <section className="comic-grid-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {showViewAll && (
          <button className="view-all-btn">
            Ver Todos →
          </button>
        )}
      </div>
      <div className="comic-grid">
        {comics.map(comic => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </section>
  );
};

export default ComicGrid;