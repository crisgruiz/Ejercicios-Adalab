import React from "react";

class Onion extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }
  //Hacemos esta función para mandar a la madre los datos que necesitamos mandar, no toda la información. Sólo recibe el valor que a la madre le interesa
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
