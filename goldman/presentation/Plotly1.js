import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidMount() {
      const data = [{
        values: [15, 15, 5, 9, 9, 31, 16],
        labels: ["Investing & Lending", "Investment Management", "Securities Services", "Commissions and Fees", "Equities Client Execution", "FICC Client Execution", "Investment Banking"],
        marker: {
          colors: ["rgb(204, 153, 255)", "rgb(44, 135, 89)", "rgb(186, 187, 188)", "rgb(150, 150, 150)", "rgb(124, 126, 167)", "rgb(113, 150, 194)", "rgb(32, 57, 100)"]
        },
        type: "pie",
        textinfo: "label",
        hoverinfo: "percent",
        insidetextfont: {
          color: "white",
          size: 14
        }
      }];

      const layout = {
        title: "Diversified by Business",
        font: {
          size: 14,
          color: "rgb(32, 57, 109)"
        },
        width: 450,
        height: 550,
        showlegend: false,
        margin: {
          t: 100,
          b: 0,
          r: 0,
          l: 0
        },
        plot_bgcolor: "#F3F3F5",
        paper_bgcolor: "#F3F3F5"
      };

      const config = {
        displayModeBar: false
      };

      const gd = document.getElementById("chart1");
      
      if (!gd.data) {
        P.newPlot("chart1", data, layout, config);
      }

    }

    render() {
      return (
          <div id="chart1"></div>
      );
    }
}