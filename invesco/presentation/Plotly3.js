import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidMount() {
      var xValues = [
        'MSCI Asia Bull Markets', 
        'MSCI Asia Bear Markets', 
        'MSCI Asia Growth Markets', 
        'MSCI Asia Value Markets', 
        'MSCI Asia Low Market Volatility', 
        'MSCI Asia High Market Volatility'
      ];
      
      var yValues = [
        'Portfolio', 
        'Benchmark (+/-)', 
        'Market Beta', 
        'Value', 'Growth', 
        'Quality', 
        'Sentiment'
      ];

      var data = [
        [2,3,4,5,6,-1],
        [-46,-4,0,35,23,12],
        [0,35,23,12,2,2],
        [-4, 0,35,23,12,2],
        [35,23,5,12,2,2],
        [4,3,-2,44,10,22]
      ];

      var zValues = [];
      var annotations = [];

      data.forEach(function(set, index){
        var array = [];

        for(var x = 0; x<set.length; x++){
          var annotation = {};
          annotation['x'] = xValues[x];
          annotation['y'] = yValues[index];
          annotation['text'] = set[x]+'%';
          annotation['showarrow'] = false;
          annotations.push(annotation);

          if(set[x] <= -9){
            array.push(1);
          }else if(set[x] >-9 && set[x] <= 9){
            array.push(0.5);
          }else if(set[x] >= 10){
            array.push(0);
          }
        };

        zValues.push(array);
      });
      
      var colorscaleValue = [
        [0, '#009DF3'],
        [0.5, '#f4f4f4'],
        [1, '#FF7C7F']
      ];

      var coloring = [{
        x: xValues,
        y: yValues,
        z: zValues,
        type: 'heatmap',
        colorscale: colorscaleValue,
        showscale: false
      }];

      var layout = {
        hovermode: false,
        width: 700,
        height: 450,
        margin: {
          l: 100, 
          t: 100,
          b: 0,
          r: 0
        },
        xaxis: {
          ticks: '',
          side: 'top'
        },
        yaxis: {
          ticks: '',
          autorange: 'reversed'
        },
        font: {
          family: 'Helvetica',
          size: 10,
          color: '#004153'
        },
        plot_bgcolor: '#f4f4f4',
        paper_bgcolor: '#ffffff',
        legend:{
          font: {
            size: 8,
          } 
        },
        annotations: annotations
      };

      var config = {
        displayModeBar: false
      };

      var gd = document.getElementById('chart3');
      if(!gd.data) {
        console.log('test');
        P.newPlot('chart3', coloring, layout, config);
      }
    }

    render() {
      const style = {
        margin: "0 auto"
      };

      return (
        <div id="chart3" style={style}></div>
      );
    }
}