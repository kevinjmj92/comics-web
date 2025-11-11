import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchQuery);
    // Cerrar menú después de buscar (opcional)
    // setIsMenuOpen(false);
  };

  const handleMobileSearch = (e) => {
    e.preventDefault();
    console.log('Buscando desde móvil:', searchQuery);
    setIsMenuOpen(false); // Cerrar menú después de buscar
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <h1>ComicVerse</h1>
          </Link>
        </div>

        {/* Navegación Desktop */}
        <nav className="nav-desktop">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/comics">Todos los Cómics</Link></li>
            <li><Link to="/generos">Géneros</Link></li>
            <li><Link to="/nuevos">Nuevos</Link></li>
            <li><Link to="/populares">Populares</Link></li>
          </ul>
        </nav>

        {/* Barra de Búsqueda - Solo Desktop */}
        <div className="search-container desktop-search">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Buscar cómics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              🔍
            </button>
          </form>
        </div>

        {/* Menú Mobile Hamburger */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Overlay para cerrar menú */}
        {isMenuOpen && (
          <div className="mobile-overlay" onClick={toggleMenu}></div>
        )}

        {/* Menú Mobile con Búsqueda Integrada */}
        <nav className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-header">
            <h3>Menú</h3>
            <button className="close-menu" onClick={toggleMenu}>✕</button>
          </div>

          {/* Barra de Búsqueda Móvil */}
          <div className="mobile-search-container">
            <form onSubmit={handleMobileSearch} className="search-form mobile-search-form">
              <input
                type="text"
                placeholder="Buscar cómics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input mobile-search-input"
              />
              <button type="submit" className="search-button mobile-search-button">
                🔍
              </button>
            </form>
          </div>

          <ul>
            <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/comics" onClick={toggleMenu}>Todos los Cómics</Link></li>
            <li><Link to="/generos" onClick={toggleMenu}>Géneros</Link></li>
            <li><Link to="/nuevos" onClick={toggleMenu}>Nuevos</Link></li>
            <li><Link to="/populares" onClick={toggleMenu}>Populares</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;