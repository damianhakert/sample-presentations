import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidMount() {
      const data = [{
        values: [16, 26, 58],
        labels: ["Asia", "EMEA", "Americas"],
        marker: {
          colors: ["rgb(124, 126, 167)", "rgb(115, 153, 198)", "rgb(32, 57, 109)"]
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
        title: "Diversified by Geography",
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

      const gd = document.getElementById("chart2");
      
      if (!gd.data) {
        P.newPlot("chart2", data, layout, config);
      }

    }

    render() {
      return (
          <div id="chart2"></div>
      );
    }
}