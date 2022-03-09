import React, { Component } from "react";
import GlassItem from "./GlassItem";

export default class GlassesList extends Component {
  renderGlasses = () => {
    let { dataGlasses, changeGlasses } = this.props;
    // console.log("dataglasses", dataGlasses);

    return dataGlasses.map((item, index) => {
      return (
        <GlassItem item={item} key={index} changeGlasses={changeGlasses} />
      );
    });
  };

  render() {
    return (
      <div className="d-flex flex-wrap">
        <div className="m-5 py-5 px-4" style={{ backgroundColor: "white" }}>
          {this.renderGlasses()}
        </div>
      </div>
    );
  }
}
