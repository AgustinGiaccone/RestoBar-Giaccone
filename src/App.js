import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListConteiners from './components/itemlistconteiners/ItemListContainer.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListConteiners
        titulo="Hola, bienbenido a mi pagina"
        miNombre=" Soy, Agustin Giaccone"
        subtitulo="Estudio en Coderhouse"/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
