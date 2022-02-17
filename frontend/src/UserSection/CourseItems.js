import React, { Component } from "react";
import "../Assets/UserSection/Styles/style.css";
class Itemscours extends Component {
  render() {
    const { items } = this.props;
    const theitems = items.map((item) => {
      return (
        <div id="blocbot" key={item.c1}>
          <button id="bottoncours"> {item.c1} </button>
        </div>
      );
    });

    return <div>{theitems}</div>;
  }
}
export default Itemscours;
