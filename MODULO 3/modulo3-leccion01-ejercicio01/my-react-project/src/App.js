import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>¡Hola, mundo!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <div className="header">
          <img src={logo} className="logo-Ej1" alt="logo" />
          <div>
            <h1 className="header__name">Cristina González</h1>
            <h2 className="header__date"> Lunes 15 de febrero de 2021</h2>
          </div>
        </div>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nemo
          doloremque nesciunt quaerat, a quidem deleniti voluptatum at veritatis
          tempore, aliquid corporis! Debitis voluptas ipsum corrupti iste
          explicabo quia natus!
        </p>
        <div className="moretext">
          <p className="reading">Leer más.... </p>
        </div>
      </div>
    </div>
  );
}

export default App;
