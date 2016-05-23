import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidMount() {
      const revenues = {
        x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
        y: [37.7, 46.0, 22.2, 45.2, 39.2, 28.8, 34.2, 34.2, 34.5, 33.8, 6.3],
        marker: {
          color: "rgb(32, 57, 109)"
        },
        type: "bar",
        name: "net revenues ($bn)",
        hoverinfo: "value"
      };

      const earnings = {
        x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
        y: [9.5, 11.6, 4.9, 13.4, 8.4, 4.4, 7.5, 8.0, 8.5, 6.1, 1.1],
        marker: {
          color: "rgb(150, 150, 150)"
        },
        type: "bar",
        name: "net earnings ($bn)",
        hoverinfo: "value"
      };

      const ROE = {
        x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
        y: [32.8, 32.7, 4.9, 22.5, 11.5, 3.7, 10.7, 11.0, 11.2, 7.4, 6.4],
        type: "scatter",
        name: "annualized ROE (%)",
        mode: "lines+markers",
        marker: {
          color: "rgba(204, 153, 255, 1)"
        },
        hoverinfo: "value"
      };

      const data = [earnings, revenues, ROE];

      const layout = {
        width: "700px",
        height: "500px",
        showlegend: true,
        autorange: false,
        barmode: "stack",
        margin: {
          t: 0,
          b: 100,
          r: 100,
          l: 100
        },
        plot_bgcolor: "#F3F3F5",
        paper_bgcolor: "#F3F3F5",
        xaxis:{
          tickmode: "auto",
          nticks: 11,
          type: "-"
        }
      };

      const config = {
        displayModeBar: false
      };

      const gd = document.getElementById("chart");
      
      if (!gd.data) {
        P.newPlot("chart", data, layout, config);
      }

    }

    render() {
      return (
          <div id="chart" style={{margin: "0 auto", width: "700px", marginTop: "9%"}}></div>
      );
    }
}