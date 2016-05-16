import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidMount() {
      var data = [{
        values: [1,2,4,6,9,9,9,9,13,18,20],
        labels: ["Life Sciences Partnerships", "Integrated Development", "Vaccine Development", "Special Initiatives", "Discovery Cross-Cutting", "Pneumonia", "Enteric and Diarrheal Diseases", "Neglected Infectious Diseases", "Tuberculosis", "Malaria", "HIV"],
        marker: {
          colors: ["rgb(253, 197, 128)", "rgb(250, 172, 69)", "rgb(246, 148, 0)", "rgb(255, 225, 187)", "rgb(253, 197, 128)", "rgb(250, 172, 69)", "rgb(246, 148, 0)", "rgb(255, 225, 187)", "rgb(253, 197, 128)", "rgb(250, 172, 69)", "rgb(246, 148, 0)"]
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