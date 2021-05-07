import React from "react";
import Color from "./Color";
import "../App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Color />
      </div>
    );
  }
}

export default App;
