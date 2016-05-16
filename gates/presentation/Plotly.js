import React, { Component } from "react";
import * as P from "plotly.js";
import { Layout, Fill, Heading, Text } from "spectacle";
import PlotlyA from "./PlotlyA";
import PlotlyB from "./PlotlyB";
import PlotlyC from "./PlotlyC";
import PlotlyD from "./PlotlyD";

export default class Graph extends Component {
    constructor() {
      super();
      this.state = {
        id: 0
      };
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      var data = [{
        values: [1923000, 1114000, 513000, 200000],
        text: ['1,923,000', '1,114,000', '513,000', '200,000'],
        labels: ["Global Development", "Global Health", "Global Policy & Advocacy", "United States Program"],
        marker: {
          colors: ['rgb(207, 171, 122)', 'rgb(233, 150, 25)', 'rgb(150, 129, 0)', 'rgb(114, 175, 182)']
        },
        type: "pie",
        textinfo: 'text+label', 
        hoverinfo: 'percent'
      }];

      var layout = {
        width: 485,
        height: 550,
        showlegend: false,
        margin: {
          t: 0,
          b: 0,
          r: 0,
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

      var gd = document.getElementById("chartA");
      
      if(!gd.data){
        P.newPlot("chartA", data, layout, config);
      }
      
      gd.on('plotly_click', this.handleClick);
    }

    handleClick(data) {
      this.setState({
          id: data.points[0].i
      });
    }

    render() {
      let content;
      if (this.state.id === 0) {
        content = <PlotlyA theme={this.props.theme}/>;
      } else if (this.state.id === 1) {
        content = <PlotlyB theme={this.props.theme}/>
      } else if (this.state.id === 2) {
        content = <PlotlyC theme={this.props.theme}/>
      } else if (this.state.id === 3){
        content = <PlotlyD theme={this.props.theme}/>
      }
              
      return (
        <div>
          <Heading textColor="secondary" textSize="2em" margin="0 0 70px 0">2014 Main Funding Areas</Heading>
          <div style={{clear: 'both', margin: '0 0 0 -80px', width: '1200px'}}>
            <div style={{float: 'left', width: '50%'}}>
              <div id="chartA"></div>
            </div>
            <div style={{float: 'right', width: '50%'}}>
              <div id="chartB">{content}</div>
            </div>
          </div>
          <Text textColor="secondary" textSize="0.6em" textAlign="left" margin="50px 0 0 -80px"> * Click on funding area for more detail</Text>    
        </div>
      );
    }
}