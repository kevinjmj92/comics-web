import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

// Páginas temporales
const Comics = () => <div className="page-container"><h2>Todos los Cómics</h2><p>Próximamente...</p></div>;
const Generos = () => <div className="page-container"><h2>Géneros</h2><p>Próximamente...</p></div>;
const Nuevos = () => <div className="page-container"><h2>Nuevos Cómics</h2><p>Próximamente...</p></div>;
const Populares = () => <div className="page-container"><h2>Cómics Populares</h2><p>Próximamente...</p></div>;
const ComicDetail = () => <div className="page-container"><h2>Detalle del Cómic</h2><p>Próximamente...</p></div>;

function App() {
  return (
    <Router>
      {/* ESTILO EN LÍNEA PARA GARANTIZAR FONDO NEGRO */}
      <div style={{ 
        backgroundColor: '#000000', 
        margin: 0, 
        padding: 0, 
        minHeight: '100vh',
        width: '100%'
      }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="/generos" element={<Generos />} />
            <Route path="/nuevos" element={<Nuevos />} />
            <Route path="/populares" element={<Populares />} />
            <Route path="/comic/:id" element={<ComicDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;