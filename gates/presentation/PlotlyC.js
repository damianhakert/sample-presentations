import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidMount() {
      var data = [{
        values: [1,2,2,6,7,15,19,20,30],
        labels: ["Special Initiatives", "China Programs", "Africa Representation", "India Programs", "Philanthropic Partnerships", "Tobacco Control", "Development Policy & Finance", "Donor Government Relations", "Program Advocacy & Communications"],
        marker: {
          colors: ['rgb(152, 132, 0)', 'rgb(179, 160, 58)', 'rgb(229, 218, 177)', 'rgb(202, 187, 115)', 'rgb(152, 132, 0)', 'rgb(179, 160, 58)', 'rgb(229, 218, 177)', 'rgb(202, 187, 115)', 'rgb(179, 160, 58)']
        },
        type: "pie",
        textinfo: 'label', 
        hoverinfo: 'percent'
      }];

      var layout = {
        width: 600,
        height: 550,
        showlegend: false,
        margin: {
          t: 0,
          b: 0,
          r: 120,
          l: 0
        },
        font: {
          family: this.props.theme.screen.fonts.primary,
          color: this.props.theme.screen.colors.secondary
        },
        plot_bgcolor: '#fbf7f2',
        paper_bgcolor: '#fbf7f2'
      };

      var config = {
        displayModeBar: false
      };

      var gd = document.getElementById("chart");
      
      if(!gd.data){
        P.newPlot("chart", data, layout, config);
      }
    }

    render() {
      return (
          <div id="chart"></div>
      );
    }
}