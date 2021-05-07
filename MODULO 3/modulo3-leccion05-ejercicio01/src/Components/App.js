import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.state = {
      text: "",
    };
  }
  handleText(ev) {
    console.log(ev.target.value);
    this.setState({
      text: ev.target.value,
    });
  }
  render() {
    return (
      <div className="App">
        <label htmlFor=""></label>
        <input
          onChange={this.handleText}
          className="input"
          type="text"
          name="text"
        ></input>
        <p className="text">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
