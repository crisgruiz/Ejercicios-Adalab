import React from "react";
import Onion from "./Onion";
import "../App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextarea = this.handleTextarea.bind(this);
  }
  handleTextarea(textareaValue) {
    const word = "cebolla";
    const container = document.querySelector(".App");
    if (textareaValue.includes(word)) {
      container.classList.add("color");
      // alert("ODIO LA CEBOLLA");
    } else {
      container.classList.remove("color");
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
