import React, { Component } from "react";
import Chart from "chart.js";
// import classes from "./LineGraph.module.css";

export default class Section_text extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    Chart.defaults.global.elements.line.tension = 0;
    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
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
            label: "Sales",
            data: [65, 59, 80, 81, 56, 9, 20, 100, 120, 85, 95, 30],
          },
        ],
      },
      options: {
        // responsive: true,
        // maintainAspectRatio: false,
        //Customize chart options
      },
    });
  }
  render() {
    return <canvas id="myChart" ref={this.chartRef} />;
  }
}
