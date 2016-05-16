import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidMount() {
      var data = [{
        values: [80, 11, 6, 2, 2],
        labels: ["U.S. Education", "Pacific Northwest", "Advocacy", "Scholarships", "Special Initiatives"],
        marker: {
          colors: ['rgb(93, 178, 184)', 'rgb(133, 193, 199)', 'rgb(169, 210, 216)', 'rgb(133, 193, 199)', 'rgb(210, 232, 236)']
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