import React from "react";
import "../App.css";
import App from "./App";

class HalfPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default HalfPage;
