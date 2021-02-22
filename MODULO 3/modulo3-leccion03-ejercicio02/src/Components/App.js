import React from "react";
import HalfPage from "./HalfPage";
import "../App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HalfPage>
          <h1>Estoy en la izquierda</h1>
          <p>Estoy en la izquierda</p>
        </HalfPage>
        <HalfPage>
          <h2>Estoy en la derecha</h2>
          <p>Estoy en la derecha</p>
        </HalfPage>
      </div>
    );
  }
}

export default App;
