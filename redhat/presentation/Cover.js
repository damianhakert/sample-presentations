import React, { Component } from "react";
import {
  Image,
  Text
} from "spectacle";

export default class Cover extends Component {
    render() {
      var style = {
        width: "80%",
        marginTop: "10%",
        marginLeft: "8%"
      };
      
      return (
        <div style={style}>
          <Image margin="0 70% 0 0" width="4em" src={this.props.logo.replace("/", "")}/>
          <Text margin="2% 0 2% 13%" caps textColor="white" textAlign="left" lineHeight={1.25}> {this.props.title} </Text>
          <Text margin="0 0 1% 13%" textSize="0.7em" lineHeight={1.8} textColor="white" textAlign="left"> {this.props.subheading} </Text>
          <Text margin="0 0 0 13%" textSize="0.7em" lineHeight={1.25} textColor="white" textAlign="left"> {this.props.presenter} </Text>
          <Text margin="0 0 0 13%" textSize="0.7em" lineHeight={1.25} textColor="white" textAlign="left"> {this.props.presenterTitle} </Text> 
          <Text margin="0 0 0 13%" textSize="0.7em" lineHeight={1.25} textColor="white" textAlign="left"> {this.props.date} </Text> 
        </div>  
      );
    }
}