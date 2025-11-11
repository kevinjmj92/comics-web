import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ComicGrid from '../../components/ComicGrid/ComicGrid';
import { comicsData } from '../../data/comicsData';
import './Home.css';

const Home = () => {
  // Filtrar cómics para diferentes secciones
  const featuredComic = comicsData[0];
  const newReleases = comicsData.filter(comic => comic.isNew);
  const popularComics = comicsData.filter(comic => comic.isPopular);
  const allComics = comicsData;

  return (
    <div className="home-page">
      <HeroBanner comic={featuredComic} />
      
      <div className="container">
        {/* Nuevos Lanzamientos */}
        <ComicGrid 
          comics={newReleases} 
          title="Nuevos Lanzamientos"
          showViewAll={true}
        />

        {/* Populares */}
        <ComicGrid 
          comics={popularComics} 
          title="Populares"
          showViewAll={true}
        />

        {/* Todos los Cómics */}
        <ComicGrid 
          comics={allComics} 
          title="Todos los Cómics"
          showViewAll={false}
        />
      </div>
    </div>
  );
};

export default Home;