import React, { Component } from "react";

export default class GlassItem extends Component {
  render() {
    let { item, changeGlasses } = this.props;
    return (
      <img
        src={item.url}
        alt="..."
        width="15%"
        className="border border-secondary m-2"
        style={{ cursor: "pointer" }}
        onClick={() => {
          changeGlasses(item);
        }}
      />
    );
  }
}
