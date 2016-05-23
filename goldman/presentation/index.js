// Import React
import React from "react";
import Plotly1 from "./Plotly1";
import Plotly2 from "./Plotly2";
import Plotly3 from "./Plotly3";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/logo.png"),
  bullet: require("../assets/bullet.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    const header = {
      textAlign: "left",
      position: "relative",
      marginLeft: "100px"
    };

    const titleStyle = {
      color: "rgb(32, 57, 109)",
      fontWeight: "bold",
      position: "absolute",
      top: "0px",
      left: "100px",
      lineHeight: "67px"
    };

    const logoStyle = {
      position: "absolute",
      top: "0px"
    };

    const strength = {
      width: "21%",
      height:"100%",
      backgroundColor: "rgb(32, 57, 109)",
      fontWeight: "bold",
      color: "white",
      float: "left",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    const detail = {
      float: "left",
      textAlign: "left",
      marginLeft: '2vh',
      fontSize: '2.5vh'
    };

    const bullet = {
      marginBottom: "0.5vh"
    };

    return (
      <Spectacle >
        <Deck transition={["zoom", "slide"]} progress="number" transitionDuration={500}>

          <Slide maxWidth={10000} bgColor="#F3F3F5" align="flex-start flex-start">
            <div style = {header}>
              <img src={images.logo.replace("/", "")} style={logoStyle}/> 
            </div>
            <Text style={{marginTop: "25%", fontSize: "1em", color: "rgb(32, 57, 109)", fontWeight: "bold"}}>Overview of Goldman Sachs</Text>
            <Text style={{fontSize: "0.65em", marginTop: "20px", color: "rgb(32, 57, 109)"}}>May 2016</Text>
          </Slide>

          <Slide align="flex-start flex-start" maxWidth={10000} bgColor="#F3F3F5">
            <div style = {header}>
              <img src={images.logo.replace("/", "")} style={logoStyle}/> 
              <span style={titleStyle}>Key Credit Strengths</span>
            </div>

            <div style={{marginTop: "9%", marginLeft: "200px", overflow: "hidden"}}>
              <div style={{display: "block", clear: "both", fontSize: "2.5vh", color: "rgb(32, 57, 109)", height: "14vh", marginBottom: "2vh"}}>
                <Appear><div >
                <div style={strength}><span >Well-Positioned with Regulatory Capital Ratios and Strong Balance Sheet</span></div>
                <div style={detail}>
                  <div ><img  src={images.bullet.replace("/", "")} style={bullet}/><span> 13.4% for the Standardized and 12.2% for Basel III Advanced approaches</span></div>
                  <div ><img  src={images.bullet.replace("/", "")} style={bullet}/><span> Our gross leverage is 10.1x as of 1Q16</span></div>
                  <div ><img  src={images.bullet.replace("/", "")} style={bullet}/><span> 97% of balance sheet is marked to market or carried at amounts that approximate fair value as of 1Q16</span></div>  
                </div>
                </div></Appear>
              </div>
              
              <div style={{display: "block", clear: "both", fontSize: "2.5vh", color: "rgb(32, 57, 109)", height: "12vh", marginBottom: "2vh"}}>
                <Appear><div >
                <div style={strength}><span >Best in Class Liquidity Risk Management</span></div>
                <div style={detail}>
                  <div><img  src={images.bullet.replace("/", "")} style={bullet}/><span> comprehensive and conservative set of liquidity and funding policies</span></div>
                  <div><img  src={images.bullet.replace("/", "")} style={bullet}/><span> core principles of substantial liquidity and asset-liability management</span></div>
                  <div><img  src={images.bullet.replace("/", "")} style={bullet}/><span> well-positioned for the Liquidity Coverage Ratio</span></div>
                </div>
                </div></Appear>
              </div>
            
              <div style={{display: "block", clear: "both", fontSize: "2.5vh", color: "rgb(32, 57, 109)", height: "12vh"}}>
                <Appear><div >
                <div style={strength}><span >Global Core Liquid Assets</span></div>
                <div style={detail}>
                  <div><img  src={images.bullet.replace("/", "")} style={bullet}/><span> cGCLA ended 1Q16 at $196 billion, reflecting 22% of our period-end balance sheet</span></div>
                  <div><img  src={images.bullet.replace("/", "")} style={bullet}/><span> GCLA is comprised of cash, high quality and narrowly defined unencumbered assets</span></div>
                  <div><img  src={images.bullet.replace("/", "")} style={bullet}/><span> GCLA is sized well in excess of our near-term contractual and contingent outflows</span></div>
                </div>
                </div></Appear>
              </div> 
              
            </div>
          </Slide>

          <Slide align="flex-start flex-start" maxWidth={10000} bgColor="#F3F3F5">
            <div style = {header}>
              <img src={images.logo.replace("/", "")} style={logoStyle}/> 
              <span style={titleStyle}>Diversified Net Revenue Mix</span>
            </div>

            <div style={{clear: "both", width: "1000px", margin: "0 auto", marginTop: "7%"}}>
              <div style={{float: "left", width: "50%"}}>
                <Plotly1/>
              </div>
              <div style={{float: "right", width: "50%" }}>
                <Plotly2/>
              </div>
            </div>
          </Slide>

          <Slide bgColor="white" align="flex-start flex-start" maxWidth={10000} bgColor="#F3F3F5">
            <div style = {header}>
              <img src={images.logo.replace("/", "")} style={logoStyle}/> 
              <span style={titleStyle}>Financial Performance</span>
            </div>
            <Plotly3 /> 
          </Slide>
         
        </Deck>
      </Spectacle>
    );
  }
}
