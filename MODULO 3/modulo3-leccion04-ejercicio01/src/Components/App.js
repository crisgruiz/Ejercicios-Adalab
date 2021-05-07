import React from "react";
import Onion from "./Onion";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextarea = this.handleTextarea.bind(this);
  }
  handleTextarea(pepito) {
    const word = "cebolla ";
    if (pepito.includes(word)) {
      alert("ODIO LA CEBOLLA");
    }
  }
  render() {
    return (
      <div className="App">
        <Onion handleTextarea={this.handleTextarea} />
      </div>
    );
  }
}

export default App;
