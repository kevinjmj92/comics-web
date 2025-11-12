import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ComicGrid from '../../components/ComicGrid/ComicGrid';
import { comicsData } from '../../data/comicsData';
import './Home.css';

const Home = () => {
  // Para el carousel, usamos los primeros 3-5 cómics populares
  const featuredComics = comicsData.filter(comic => comic.isPopular).slice(0, 5);
  const newReleases = comicsData.filter(comic => comic.isNew);
  const popularComics = comicsData.filter(comic => comic.isPopular);
  const allComics = comicsData;

  return (
    <div 
      className="home-page"
      style={{
        backgroundColor: '#000000',
        margin: 0,
        padding: 0,
        width: '100%',
        minHeight: '100vh'
      }}
    >
      {/* Pasar múltiples cómics al HeroBanner carousel */}
      <HeroBanner comics={featuredComics} />
      
      <div className="container">
        <ComicGrid 
          comics={newReleases} 
          title="Nuevos Lanzamientos"
          showViewAll={true}
        />

        <ComicGrid 
          comics={popularComics} 
          title="Populares"
          showViewAll={true}
        />

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