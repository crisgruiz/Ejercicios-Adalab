import React from "react";
import "../App.css";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "blue",
    };
    this.handleColor = this.handleColor.bind(this);
  }

  handleColor() {
    this.setState((previewColor) => {
      let newColor;
      if (previewColor.className === "blue") {
        newColor = "red";
      } else {
        newColor = "blue";
      }
      return {
        className: newColor,
      };
    });
  }
  render() {
    return (
      <div className={this.state.className} onClick={this.handleColor}></div>
    );
  }
}
export default Color;
