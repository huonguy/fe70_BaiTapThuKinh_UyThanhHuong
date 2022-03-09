import React, { Component } from "react";
import dataGlasses from "../data/dataGlasses.json";
import GlassesList from "./GlassesList";

export default class BaiTapThuKinh extends Component {
  state = {
    glassesCurrent: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlasses = (item) => {
    this.setState({
      glassesCurrent: {
        name: item.name,
        url: item.url,
        desc: item.desc,
      },
    });
  };

  render() {
    let { name, url, desc } = this.state.glassesCurrent;

    let backgroundStyle = {
      backgroundImage: "url(./glassesImage/background.jpg)",
      minHeight: "1000px",
      backgroundSize: "100%",
    };

    let transparentStyle = {
      backgroundColor: "rgba(0,0,0,.6)",
      minHeight: "1000px",
    };

    let imageStyle = {
      position: "absolute",
      top: "25%",
      opacity: ".6",
      width: "100%",
    };

    let contentStyle = {
      width: "50%",
      position: "absolute",
      bottom: "0",
      transform: "translateX(50%)",
      textAlign: "left",
      fontSize: "12px",
      backgroundImage:
        "linear-gradient(120deg, #ff9800 0%, rgb(253, 160, 133) 100%)",
      opacity: ".6",
    };
    return (
      <div style={backgroundStyle}>
        <div style={transparentStyle}>
          <h5
            style={{ backgroundColor: "rgba(0,0,0,.4)" }}
            className="text-light p-4 text-center"
          >
            TRY GLASSES APP ONLINE
          </h5>
          <div className="container mt-5">
            <div className="row text-center">
              <div className="col-6">
                <div style={{ position: "relative" }}>
                  <img src={"./glassesImage/model.jpg"} className="w-50" />

                  <div style={imageStyle}>
                    <img src={url} className="w-25" />
                  </div>
                  <div className="p-1" style={contentStyle}>
                    <h6 style={{ color: "blue" }}>{name}</h6>
                    <p style={{ color: "white" }}>{desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img src="./glassesImage/model.jpg" className="w-50" />
              </div>
            </div>
            <GlassesList
              dataGlasses={dataGlasses}
              changeGlasses={this.changeGlasses}
            />
          </div>
        </div>
      </div>
    );
  }
}
