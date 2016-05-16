import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidUpdate() {

      var trace1 = {
        x: ['1 Year', '3 Year', '5 Year', 'Since Inception'],
        y: [7, 9, 9.1, 10.1],
        marker:{
          color: '#001E76'
        },
        name: 'Global Growth',
        hoverinfo: 'y',
        type: 'bar'
      };

      var trace2 = {
        x: ['1 Year', '3 Year', '5 Year', 'Since Inception'],
        y: [5.3, 5.4, 4.9, 7.9],
        marker:{
          color:'#009DF3'
        },
        name: '80% MSCI/ 20% Barclays',
        hoverinfo: 'y',
        mode: 'lines',
        type: 'bar'
      };

      var data = [trace1, trace2];

      var layout = {
        title: "Trailing Returns",
        width: 530,
        height: 450,
        margin: {
          l: 20, 
          t: 40,
          b: 20
        },
        yaxis: {
          gridcolor: '#DCDCDC',
          gridwidth: 2,
          linecolor: '#DCDCDC',
          linewidth: 2,
          autotick: false,
          ticks: 'outside',
          tick0: 0,
          dtick: 2,
          tickcolor: '#DCDCDC',
          tickwidth: 1,
          zeroline: false,
          tickfont: {
            size: 8,
          },
          showline: false
        },
        font: {
          family: 'Helvetica',
          size: 12,
          color: '#004153'
        },
        plot_bgcolor: '#f4f4f4',
        paper_bgcolor: '#f4f4f4',
        legend:{
          font: {
            size: 8,
          } 
        }
      };

      var config = {
        displayModeBar: false
      };

      P.newPlot('chart', data, layout, config);
    }

    render() {
      return (
        <div id="chart"></div>
      );
    }
}