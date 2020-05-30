import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Current Power", "Remaining Capacity"],
  datasets: [
    {
      data: [70, 30],
      rotation: 5,
      borderWidth: 0,
      backgroundColor: ["#FF6384", "rgba(0,0,0,0)"],
      hoverBackgroundColor: ["#FF1748", "rgba(0,0,0,0.2)"],
    },
  ],
  centerText: {
    display: true,
    text: "280",
  },
};
const donutOptions = {
  responsive: false,
  width: 500,
  height: 500,
  cutoutPercentage: 80,
};
class Section_5 extends Component {
  state = {};
  render() {
    return (
      <Doughnut
        data={data}
        options={{
          rotation: 1 * Math.PI,
          cutoutPercentage: 80,
          circumference: 1 * Math.PI,
        }}
      />
    );
  }
}

export default Section_5;
