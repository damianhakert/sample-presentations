import React, { Component } from "react";
import { Layout, Fill, Fit, Text } from "spectacle";

export default class Cover extends Component {
  render() {
      return (
        <div>
          <Layout>
            <Fill><Text textColor={this.props.colorMain} textAlign="left" textSize="0.9em">8:00AM – 9:00AM</Text></Fill>
            <Fill><Text textColor={this.props.colorMain} textAlign="left" textSize="0.9em">1:00PM – 2:00PM</Text></Fill>
          </Layout>

          <Layout>
            <Fill><Text caps textColor={this.props.colorSecondary} textAlign="left" textSize="0.7em" margin="0 0 0.5em 0">Name of Topic</Text></Fill>
            <Fill><Text caps textColor={this.props.colorSecondary} textAlign="left" textSize="0.7em" margin="0 0 0.5em 0">Name of Topic</Text></Fill>
          </Layout>

          <Layout>
            <Fill><Text textColor={this.props.colorMain} textAlign="left" textSize="0.9em">9:00AM – 10:00AM</Text></Fill>
            <Fill><Text textColor={this.props.colorMain} textAlign="left" textSize="0.9em">3:00PM – 4:00PM</Text></Fill>
          </Layout>

          <Layout>
            <Fill><Text caps textColor={this.props.colorSecondary} textAlign="left" textSize="0.7em" margin="0 0 0.5em 0">Name of Topic</Text></Fill>
            <Fill><Text caps textColor={this.props.colorSecondary} textAlign="left" textSize="0.7em" margin="0 0 0.5em 0">Name of Topic</Text></Fill>
          </Layout>

          <Layout>
            <Fill><Text textColor={this.props.colorMain} textAlign="left" textSize="0.9em">10:00AM – 11:00AM</Text></Fill>
            <Fill><Text textColor={this.props.colorMain} textAlign="left" textSize="0.9em">4:00PM – 5:00PM</Text></Fill>
          </Layout>

          <Layout>
            <Fill><Text caps textColor={this.props.colorSecondary} textAlign="left" textSize="0.7em" margin="0 0 0.5em 0">Name of Topic</Text></Fill>
            <Fill><Text caps textColor={this.props.colorSecondary} textAlign="left" textSize="0.7em" margin="0 0 0.5em 0">Name of Topic</Text></Fill>
          </Layout>

          <Layout>
            <Fill><Text textColor={this.props.colorMain} textAlign="left" textSize="0.9em">11:00AM – 12:00PM</Text></Fill>
            <Fill><Text textColor={this.props.colorMain} textAlign="left" textSize="0.9em">5:00PM – 6:00PM</Text></Fill>
          </Layout>

          <Layout>
            <Fill><Text textColor={this.props.colorSecondary} caps textAlign="left" textSize="0.7em" margin="0 0 0.5em 0">Name of Topic</Text></Fill>
            <Fill><Text textColor={this.props.colorSecondary} caps textAlign="left" textSize="0.7em" margin="0 0 0.5em 0">Name of Topic</Text></Fill>
          </Layout>
        </div>
    );
  }
}