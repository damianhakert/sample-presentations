import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidMount() {
      var trace1 = {
        x: [0, 10, 20, 30, 40, 50, 60, 70],
        y: [20, 35, 43, 17, 18, 19, 17, 1],
        mode: 'lines',
        name: 'A',
        line:{
          dash: 'dot', 
          width: 2,
          color: '#004153'
        }
      };

      var trace2 = {
        x: [0, 10, 20, 30, 40, 50, 60, 70],
        y: [16, 25, 11, 10, 1, 4, 40, 2],
        mode: 'lines',
        name: 'B',
        line: {
          color: '#A3DBE8'
        }
      };

      var trace3 = {
        x: [0, 10, 20, 30, 40, 50, 60, 70],
        y: [2, 39, 15, 22, 30, 10, 2, 10],
        mode: 'lines',
        name: 'C',
        line: {
          color: '#007A87'
        }
      };

      var data = [ trace1, trace2, trace3 ];

      var layout = {
        height: 350,
        width: 800,
        yaxis: {
          gridcolor: '#DCDCDC',
          gridwidth: 2,
          linecolor: '#DCDCDC',
          linewidth: 2,
          autotick: false,
          ticks: 'outside',
          tick0: 10,
          dtick: 10,
          tickcolor: '#DCDCDC',
          tickwidth: 2,
          zeroline: false
        },
        xaxis: {
          zeroline: false,
          showline: false
        },
        font: {
          family: 'Overpass',
          size: 12,
          color: '#004153'
        },
        margin: {
          t: 0,
          l: 25
        },
        plot_bgcolor: '#f4f4f4',
        paper_bgcolor: '#f4f4f4'
      };

      var config = {
        displayModeBar: false
      };

      var gd = document.getElementById('chart2');

      
      if(!gd.data){
        
        P.newPlot('chart2', data, layout, config);
      }
    }

    render() {
      var style = {
        margin: "0 auto"
      };

      return (
        <div style={style} id='chart2'></div>
      );
    }
}