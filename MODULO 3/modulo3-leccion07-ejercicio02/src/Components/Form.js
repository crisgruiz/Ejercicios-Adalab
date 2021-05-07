import React from "react";
import "../App.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      text: "",
      language: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }

  function handleInput(ev) {
    const key = ev.target.name;
    this.setState({
      [key]: ev.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <form className="form">
          <div className="name">
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" value={name} onChange={handleInput} />
            <input type="submit" value="Enviar" />
          </div>
          <textarea
            className="textArea"
            name="textArea"
            cols="30"
            rows="10"
            value={text}
            onChange={handleInput}
          ></textarea>
          <select
            className="select"
            value={language}
            name="select"
            onChange={handleInput}
          >
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Francés">Francés</option>
          </select>
        </form>
        <div className="target">
          <p>{name}</p>
          <p>{text}</p>
          <p>{language}</p>
        </div>
      </div>
    );
  }
}

export default Form;
