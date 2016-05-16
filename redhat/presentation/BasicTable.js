import React, { Component } from "react";
import * as P from "plotly.js";

export default class Cover extends Component { 
    componentDidMount(){
      var data = [
        ["<b>VALUE</b>", "<b>VALUE</b>", "<b>VALUE</b>", "<b>VALUE</b>", "<b>VALUE</b>"],
        ["<b>value</b>", "<b>value</b>", "<b>value</b>", "<b>value</b>", "<b>value</b>"],
        ["<b>value</b>", "<b>value</b>", "<b>value</b>", "<b>value</b>", "<b>value</b>"],
        ["<b>value</b>", "<b>value</b>", "<b>value</b>", "<b>value</b>", "<b>value</b>"]
      ];

      var fillColors = [
        [0, '#004151'], 
        [0.5, '#ccc'],
        [1, '#e6e6e6']
      ];

      var annotations = [];
      var nbHorizontalLines = data.length+1;
      var nbVerticalLines = data[0].length+1;
      var fillHorizontal = [];
      var fillVertical = [];
      var traces = [];

      for(var x = 0; x<data.length; x++){
        data[x].forEach(function(text, index){
          var annotation = {};
          annotation["showarrow"]= false;
          annotation["font"] = {};
          (x===0) ? annotation.font["color"] = "white": annotation.font["color"] = "#5f5e5f";
          annotation.font["family"] = "Overpass";;
          annotation.font["size"] = 16;
          annotation["x"] = index;
          annotation["y"] = data.length-1-x;
          annotation["text"] = text;
          annotations.push(annotation);
        });
      };

      for(var x = 0; x<nbVerticalLines; x++){
        fillHorizontal.push(x-0.5);
      };

      for(var x = 0; x<nbHorizontalLines; x++){
        fillVertical.push(x-0.5);
      };

      for(var x = 0; x<nbVerticalLines; x++){
        var trace = {};
        trace['type'] = 'scatter';
        trace['mode'] = 'lines+text';
        trace['line'] = {color: 'white'};
        trace['x'] = Array(nbHorizontalLines).fill(x-0.5);
        trace['y'] = fillVertical;
        traces.push(trace);
      };

      for(var x = 0; x<nbHorizontalLines; x++){
        var trace1 = {};
        trace1['type'] = 'scatter';
        trace1['mode'] = 'lines+text';
        trace1['line'] = {color: 'white'};
        trace1['x'] = fillHorizontal;
        trace1['y'] = Array(nbVerticalLines).fill(x-0.5);
        traces.push(trace1);
      };

      var coloring={};
        coloring['type'] = 'heatmap';
        coloring['colorscale'] = fillColors;
        coloring['showscale'] = false;
        coloring['z'] = [];

      for(var x = 0; x<nbHorizontalLines-1; x++){
        if(x===nbHorizontalLines-2){
          coloring.z.push(Array(nbVerticalLines-1).fill(0));
        }else if(x%2===0){
          coloring.z.push(Array(nbVerticalLines-1).fill(0.5));
        }else{
          coloring.z.push(Array(nbVerticalLines-1).fill(1));
        } 
      };
      traces.push(coloring);

      var layout = {
        hovermode: false,
          "annotations": annotations,
          xaxis: {
            autorange: true,
            showgrid: false,
            zeroline: false,
            showline: false,
            showticklabels: false
          },
          yaxis: {
            autorange: true,
            showgrid: false,
            zeroline: false,
            showline: false,
            showticklabels: false     
          },
          margin:{
            t: 0,
            b: 0,
            l: 0,
            r: 0
          },
          plot_bgcolor: '#f4f4f4',
          paper_bgcolor: '#f4f4f4',
          showlegend: false
      };

      var config = {
          displayModeBar: false,
          scrollZoom: false
      };

      console.log('and it mounts');
      var gd = document.getElementById('chart');

      if(!gd.data){
        console.log('and it plots');
        P.newPlot('chart', traces, layout, config); 
      };
    }

    render() {
      var style = {
        width: '100%',
        height: '300px',
        margin: '15% auto 0 auto'
      };

      return (
        <div id='chart' style={style}></div>  
      );
    }

}