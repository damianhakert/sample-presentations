// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Slide,
  Spectacle,
  Text,
  Table, 
  TableItem, 
  TableRow, 
  TableHeaderItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Plotly from "./Plotly";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  cover: require("../assets/cover4.jpg"),
  logo: require("../assets/logo.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "rgb(88, 49, 24)",
    secondary: "rgb(70,47,19)",
    tertiary: "rgb(251,247,242)"
  },
  {
    primary: "Crimson Text",
    secondary: "Lora"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="none" transition={["slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgImage={images.cover.replace("/", "")}>
            <Image src={images.logo.replace("/", "")} width="7em" margin="15px 30px 0 0"/>
            <Text textFont="secondary" textColor="rgb(243, 242, 243)" textSize="0.5em" style={{display: 'inline-block'}} margin="0 0 5px 0" > 2014 annual report  </Text>         
          </Slide>

          <Slide bgColor = "tertiary" align="center flex-start">
            <Plotly margin="0 auto" theme={theme}/>
          </Slide>

          <Slide bgColor = "tertiary" align="center flex-start">
            <Heading textColor="secondary" textSize="2em" margin="0 0 70px 0">2014 Summary</Heading>
            <Layout>
              <Table >
                <thead>
                  <TableRow>
                    <TableHeaderItem bgColor="rgb(115, 175, 182)" textAlign="left" textColor="white" padding="0 0 0 10px" textSize="0.7em">PROGRAM AREAS</TableHeaderItem>
                    <TableHeaderItem bgColor="rgb(115, 175, 182)"/>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableItem textAlign="left" bgColor="rgb(240, 233, 212)" padding="0 0 0 10px" textColor="secondary" textSize="0.7em">Global Development</TableItem>
                    <TableItem textAlign="right" bgColor="rgb(240, 233, 212)" padding="0 10px 0 0" textColor="secondary" textSize="0.7em">1,923,000</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textAlign="left" padding="0 0 0 10px" textColor="secondary" textSize="0.7em">Global Health</TableItem>
                    <TableItem textAlign="right" padding="0 10px 0 0" textColor="secondary" textSize="0.7em">1,114,000</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textAlign="left" bgColor="rgb(240, 233, 212)" padding="0 0 0 10px" textColor="secondary" textSize="0.7em">United States Program</TableItem>
                    <TableItem textAlign="right" bgColor="rgb(240, 233, 212)" padding="0 10px 0 0" textColor="secondary" textSize="0.7em">513,000</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textAlign="left" padding="0 0 0 10px" textColor="secondary" textSize="0.7em">Global Policy & Advocacy</TableItem>
                    <TableItem textAlign="right" padding="0 10px 0 0" textColor="secondary" textSize="0.7em">200,000</TableItem>
                  </TableRow>
                </tbody>
              </Table>
              </Layout>
              <Layout>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderItem bgColor="rgb(115, 175, 182)" textAlign="left" textColor="white" padding="0 0 0 10px" textSize="0.7em">NON-PROGRAM AREAS</TableHeaderItem>
                    <TableHeaderItem bgColor="rgb(115, 175, 182)"/>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableItem textAlign="left" bgColor="rgb(240, 233, 212)" padding="0 0 0 10px" textColor="secondary" textSize="0.7em">Communications</TableItem>
                    <TableItem textAlign="right" bgColor="rgb(240, 233, 212)" padding="0 10px 0 0" textColor="secondary" textSize="0.7em">41,000</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textAlign="left" padding="0 0 0 10px" textColor="secondary" textSize="0.7em">Other Charitable Giving</TableItem>
                    <TableItem textAlign="right" padding="0 10px 0 0" textColor="secondary" textSize="0.7em">69,000</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textAlign="left" bgColor="rgb(208, 201, 192)" padding="0 0 0 10px" textColor="secondary" textSize="0.7em">Total Direct Grantee Support</TableItem>
                    <TableItem textAlign="right" bgColor="rgb(208, 201, 192)" padding="0 10px 0 0" textColor="secondary" textSize="0.7em">3,860,000</TableItem>
                  </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
