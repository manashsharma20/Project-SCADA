import React, { Component } from "react";
import App from "./graph";
import Navbar from "./navbar";
import Header_Top from "./header";
import Line_chart from "./section_1";
import Section_2 from "./section_2";
import Section_5 from "./section_5";
import Section_test from "./section_test";
class main extends Component {
  state = {};
  style1 = {
    // boxShadow: "inset 10px 10px 150px #000",
    // borderRadius: 30,
  };
  style2 = {
    boxShadow:
      " 0px 0px 40px rgba(255,255,255,0.08),inset 0px 0px 20px rgba(0,0,0,0.3)",
    margin: 10,
    padding: 20,
    textAlign: "center",
    // borderRadius: 20,
  };
  render() {
    return (
      <div
        className="row justify-content-center"
        style={{
          // backgroundColor: "#32373D",
          backgroundImage: "linear-gradient(360deg, #191919, #272A2F)",
        }}
      >
        <Header_Top />
        <Navbar />
        <div className="row col-xl-8 col-lg-8 col-md-12 col-sm-12">
          <div style={this.style1} className="col-xl-12">
            <div className="col-md-12" style={this.style2}>
              <Line_chart />
            </div>
          </div>
          <div style={this.style1} className="col-xl-4 col-lg-8">
            <div className="col-md-12" style={this.style2}>
              <Section_2 />
            </div>
          </div>
          <div style={this.style1} className="col-xl-8 col-lg-8">
            <div className="col-md-12" style={this.style2}>
              <App />
            </div>
          </div>
          <div style={this.style1} className="col-xl-12 col-lg-12">
            <div className="col-md-12" style={this.style2}>
              <App />
            </div>
          </div>
        </div>

        <div className="column col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
          <div style={this.style1} className="col-xl-12 col-lg-12 my-auto">
            <div className="col-md-12" style={this.style2}>
              <Section_5 />
            </div>
          </div>
          <div style={this.style1} className="col-xl-12 col-lg-12">
            <div className="col-md-12" style={this.style2}>
              <Section_test />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default main;
