import React from "react";
import logo from "../logo.svg";
import "../App.css";

const AppHeader = (
  <div>
    <div class="header">
      <img src={logo} className="logo-Ej1" alt="logo" />
      <div>
        <h1 class="name">Cristina González</h1>
        <h2 class="date"> Lunes 15 de febrero de 2021</h2>
      </div>
    </div>
  </div>
);
const AppText = (
  <p class="text">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nemo
    doloremque nesciunt quaerat, a quidem deleniti voluptatum at veritatis
    tempore, aliquid corporis! Debitis voluptas ipsum corrupti iste explicabo
    quia natus!
  </p>
);
const Appfooter = (
  <div class="moretext">
    <p class="reading">Leer más.... </p>
    <span>37</span>
    <span>
      <i className="fas fa-heart"></i>
    </span>
  </div>
);
class MediaCard extends React.Component {
  render() {
    return (
      <div className="App-html">
        {AppHeader}
        {AppText}
        {Appfooter}
      </div>
    );
  }
}

export default MediaCard;
