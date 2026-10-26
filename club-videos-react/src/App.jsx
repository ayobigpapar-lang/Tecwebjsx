import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer' // Nota: tenías '././components/Footer' (funciona, pero es mejor limpiar las rutas)
import PeliculaCard from './components/PeliculaCard'
import './App.css'

function App() {
  const [busqueda, setBusqueda] = useState('') // Corregido: setBusqueda
  const [darkMode, setDarkMode] = useState(false) // Corregido: darkMode consistente
  const [generoFiltro, setGeneroFiltro] = useState('0') // Corregido: setBusqueda
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode) // Corregido: función flecha estándar
  }

  const peliculas = [
    { id: 1, titulo: 'El Padrino', año: 1972, director: 'Francis Ford Coppola', calificacion: 9.2, imagen: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', genero :'Drama' },
    { id: 2, titulo: 'Titanic', año: 1997, director: 'James Cameron', calificacion: 8.9, imagen: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg', genero :'Romance' },
    { id: 3, titulo: 'Inception', año: 2010, director: 'Christopher Nolan', calificacion: 9.0, imagen: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',genero :'Ciencia Ficción' }
  ];

  const generos = ['', 'Drama', 'Romance', 'Ciencia Ficción', 'Fantasía'];

  const peliculasFiltradas = peliculas.filter((p) => {
  const coincideBusqueda = p.titulo.toLowerCase().includes(busqueda.toLowerCase());
  const coincideGenero = generoFiltro === '' || p.genero === generoFiltro;
  return coincideBusqueda && coincideGenero;
});

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}> {/* Corregido: ternario dentro de las llaves */}
      <Header darkMode={darkMode} onToggle={toggleDarkMode} />
      <main className='main'>
        <h2 className='main__title'>Películas Destacadas</h2>
        <div className='controles__search'>
          <input
          type="text"
          className='controles_search'
          placeholder='Buscar...'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}   /* cambios abajo */
        />
        
        <select
        className="controles__select"
        value={generoFiltro}
        onChange={(e) => setGeneroFiltro(e.target.value)}
      >
        {generos.map((g) => (
          <option key={g} value={g}>
            {g === '' ? 'Todos los géneros' : g}
          </option>
        ))}
      </select>
      <button className="controles__clear"
        onClick={() => {
          setBusqueda('');
          setGeneroFiltro('');
        }}
      >
        Limpiar
      </button>


        </div>

      <p className='resultados'>
        {peliculasFiltradas.length} películas encontradas
      </p>
      <div className='peliculas-grid'>
        {
          peliculasFiltradas.map((p) => (
            <PeliculaCard
              key={p.id}
              titulo={p.titulo}
              año={p.año}
              director={p.director}
              calificacion={p.calificacion}
              imagen={p.imagen}
            />
          ))}
      </div>

        

        <div className='peliculas-grid'>
          {
            peliculasFiltradas.map((p) => (
              <PeliculaCard
                key={p.id}
                titulo={p.titulo}
                año={p.año}
                director={p.director}
                calificacion={p.calificacion}
                imagen={p.imagen}
              />
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;