import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidMount() {
      var trace1 = {
        x: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
        y: [13, 6, 9, 10],
        marker:{
          color: '#004153'
        },
        name: 'Column 1',
        hoverinfo: 'y',
        type: 'bar'
      };

      var trace2 = {
        x: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
        y: [30, 9, 18, 28],
        marker:{
          color:'#A3DBE8'
        },
        name: 'Column 2',
        hoverinfo: 'y',
        mode: 'lines',
        type: 'bar'
      };

      var trace3 = {
        x: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
        y: [4, 5, 35, 14],
        marker:{
          color:'#007A87'
        },
        name: 'Column 3',
        hoverinfo: 'y',
        mode: 'lines',
        type: 'bar'
      };

      var data = [trace1, trace2, trace3];

      var layout = {
        height: 400,
        width: 550,
        margin: {
          l: 25, 
          t: 0
        },
        yaxis: {
          gridcolor: '#DCDCDC',
          gridwidth: 2,
          linecolor: '#DCDCDC',
          linewidth: 2,
          autotick: false,
          ticks: 'outside',
          tick0: 0,
          dtick: 10,
          tickcolor: '#DCDCDC',
          tickwidth: 1,
          zeroline: false
        },
        xaxis: {
          linecolor: '#DCDCDC',
          linewidth: 2,
          autotick: false,
          ticks: 'outside',
          tick0: 2,
          dtick: 1,
          tickcolor: '#DCDCDC'
        },
        font: {
          family: 'Overpass',
          size: 12,
          color: '#004153'
        },
        plot_bgcolor: '#f4f4f4',
        paper_bgcolor: '#f4f4f4'
      };

      var config = {
        displayModeBar: false
      };

      var gd = document.getElementById('chart');
      
      if(!gd.data){
        P.newPlot('chart', data, layout, config);
      }
    }

    render() {
      return (
        <div id='chart'></div>
      );
    }
}