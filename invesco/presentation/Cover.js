import React, { Component } from "react";
import {
  Layout,
  Fill,
  FIt,
  Image,
  Text
} from "spectacle";

export default class Cover extends Component {
    render() {  
      return (
        <div>
          <Layout>
            <div style = {{padding: "0 18% 0 0"}}>
              <Image fit width="2em" src={this.props.logo.replace("/", "")}/>
            </div>
            <Fill>          
              <Text fontWeight="bold" textSize="0.7em" textColor="black" textAlign="left" lineHeight={1.05}> Model Portfolio Analysis </Text>
              <Text fontWeight="bold" textSize="0.7em" textColor="black" textAlign="left" lineHeight={1.05}> Global Growth Fund </Text>
              <Text textSize="0.4em" lineHeight={1.8} textColor="black" textAlign="left"> April 2016 </Text>   
            </Fill>
          </Layout>
        </div>  
      );
    }
}