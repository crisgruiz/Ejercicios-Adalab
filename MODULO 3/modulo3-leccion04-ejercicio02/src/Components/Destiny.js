import React from "react";
class Destiny extends React.Component {
  handleSelectInput(ev) {
    alert(`Tu destino es viajar a ${ev.target.value}`);
  }

  render() {
    return (
      <select name="select" onChange={this.handleSelectInput}>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney" selected>
          Sydney
        </option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    );
  }
}
export default Destiny;
