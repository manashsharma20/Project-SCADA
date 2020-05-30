import { Bar } from "react-chartjs-2";
import React, { Component } from "react";

const GraphHeight = 332;

const state = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      responsive: true,
      label: "Solar intensity",
      // backgroundColor: "#FFF200",
      // backgroundColor: "#FFFDD0",
      borderColor: "#0FA7FA",
      borderWidth: 3,
      barThickness: 15,
      maintainAspectRatio: false,
      position: "bottom",
      data: [65, 59, 80, 81, 56, 9, 20, 100, 120, 85, 95, 30],
    },
  ],
};

class Section_2 extends Component {
  render() {
    return (
      <Bar
        data={state}
        height={GraphHeight}
        options={{
          title: {
            display: true,
            text: "Solar Intensity over year",
            fontSize: 10,
          },
          legend: {
            display: true,
            boxWidth: 3,
            position: "bottom",
          },
        }}
      />
    );
  }
}
export default Section_2;
