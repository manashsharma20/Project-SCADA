import React, { Component } from "react";
import { Line } from "react-chartjs-2";

// Chart.defaults.global.elements.line.tension = 0;

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
      label: "Rainfall",
      type: "line",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "#4DF526",
      borderWidth: 0,
      data: [65, 59, 80, 81, 56, 9, 20, 100, 120, 85, 95, 30],
    },
    {
      type: "bar",
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      // backgroundColor: "rgba(75,192,192,1)",
      borderColor: "#4DF526",
      barThickness: 1,
      borderWidth: 3,
      data: [65, 59, 80, 81, 56, 9, 20, 100, 120, 85, 95, 30],
    },
  ],
};

class Line_chart extends Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          height={50}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
export default Line_chart;
