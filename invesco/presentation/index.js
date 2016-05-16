require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import React from "react";
import createTheme from "spectacle/lib/themes/default";
import Plotly1 from "./Plotly1";
import Plotly2 from "./Plotly2";
import Plotly3 from "./Plotly3";
import Cover from "./Cover";
import Footer from "./Footer";
import preloader from "spectacle/lib/utils/preloader";

import {
  Appear,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text,
  Fill,
  Layout,
  Table,
  TableRow,
  TableItem,
  TableHeaderItem,
  CodePane,
  Image
} from "spectacle";

const images = {
  logo: require("../assets/logo.png"),
  logosmall: require("../assets/logosmall.png"),
  cover: require("../assets/cover.jpg")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle>
        <Deck progress="none" transition={["slide"]} transitionDuration={500}>
          <Slide align="flex-start flex-start" transition={["slide"]} bgImage={images.cover.replace("/", "")}>
            <Cover logo={images.logo}/>
          </Slide>
                  
          <Slide align="center flex-start">
            <Heading size={2}>Performance Summary Analysis</Heading>
              <div style={{width: "1100px", margin: "0 auto"}}>
                <Layout>
                  <Fill>
                    <Plotly1/>
                  </Fill>
                  <Fill>
                    <Plotly2/>
                  </Fill>
                </Layout>
              </div>
            <Footer page={2} logo={images.logosmall}/><Footer/>
          </Slide>
           
          <Slide align="center flex-start">
            <Heading size={2}>Factor Regime Analysis</Heading>
              <div style={{width: "1200px", margin: "0 auto"}}>
                <Layout>
                  <Plotly3 fit/>
                  <Fill>
                    <List>
                      <Appear><ListItem>observation 1</ListItem></Appear>
                      <Appear><ListItem>observation 2</ListItem></Appear>
                      <Appear><ListItem>observation 3</ListItem></Appear>
                    </List>
                  </Fill>
                </Layout>
              </div>
         
            <Footer page={3} logo={images.logosmall}/><Footer/>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
