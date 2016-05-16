import React, { Component } from "react";
import * as P from "plotly.js";

export default class Graph extends Component {
    componentDidMount() {
      var data = [{
        values: [2,2,3,3,3,5,5,7,8,17,23,23],
        labels: ["Emergency Response", "Special Initiatives", "Global Libraries", "Integrated Delivery", "Nutrition", "Water, Sanitation & Hygiene", "Financial Services for the Poor", "Maternal Newborn & Child Health", "Family Planning", "Vaccine Delivery", "Agricultural Development", "Polio"],
        marker: {
          colors: ['rgb(213, 172, 117)', 'rgb(221, 190, 146)', 'rgb(231, 209, 179)', 'rgb(242, 232, 213)', 'rgb(213, 172, 117)', 'rgb(221, 190, 146)', 'rgb(231, 209, 179)', 'rgb(242, 232, 213)', 'rgb(213, 172, 117)', 'rgb(221, 190, 146)', 'rgb(231, 209, 179)', 'rgb(242, 232, 213)']
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