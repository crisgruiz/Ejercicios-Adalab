import React from "react";

class Onion extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(ev) {
    this.props.handleTextarea(ev.target.value);
  }
  render() {
    return (
      <>
        <label htmlFor=""></label>
        <textarea
          onChange={this.handleInput}
          className="textArea"
          name=""
          rows="4"
          cols="50"
        ></textarea>
      </>
    );
  }
}

export default Onion;
