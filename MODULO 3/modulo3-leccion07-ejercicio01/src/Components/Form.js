import React, { useState } from "react";
import "../App.css";

const Form = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("");
  const handleName = (event) => {
    setName(event.currentTarget.value);
  };
  const handleText = (event) => {
    setText(event.currentTarget.value);
  };
  const handleLanguage = (event) => {
    setLanguage(event.currentTarget.value);
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="container">
      <form className="form" onSumit={handleForm}>
        <div className="name">
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" value={name} onChange={handleName} />
          <input type="submit" value="Enviar" />
        </div>
        <textarea
          className="textArea"
          name="textArea"
          cols="30"
          rows="10"
          value={text}
          onChange={handleText}
        ></textarea>
        <select
          className="select"
          value={language}
          name="select"
          onChange={handleLanguage}
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
};

export default Form;
