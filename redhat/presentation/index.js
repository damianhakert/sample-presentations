require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import React from "react";
import createTheme from "spectacle/lib/themes/default";
import Plotly1 from "./PlotlyGraph";
import Plotly2 from "./PlotlyGraph2";
import Cover from "./Cover";
import Footer from "./Footer";
import ThankYou from "./ThankYou";
import Agenda from "./Agenda";
import BasicTable from "./BasicTable";
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

const theme = createTheme({
  primary: "#cc0000",
  secondary: "#004153",
  tertiary: "#f6f6f6",
  quartenary: "#a30000"
},{
  primary: "Overpass"
});

const images = {
  logo: require("../assets/logo.png"),
  logosmall: require("../assets/logosmall.png"),
  cover: require("../assets/cover.jpg"),
  thankyou: require("../assets/thankyou.jpg"),
  background: require("../assets/background.jpg"),
  google: require("../assets/google.png"),
  linkedIn: require("../assets/linkedIn.png"),
  youtube: require("../assets/youtube.png"),
  facebook: require("../assets/facebook.png"),
  twitter: require("../assets/twitter.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    var style = {
      width: "85%",
      height: "77%",
      margin: "9% 0 0 9%"
    };

    return (
      <Spectacle theme={theme}>
        <Deck progress="none" transition={["slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgImage={images.cover.replace("/", "")}>
            <Cover logo={images.logo} title={"presentation title should not exceed two lines"} subheading={"Subheading goes here"} presenter={"Presenter"} presenterTitle={"Presenter's Title"} date={"Date"}/>
          </Slide>
          
          <Slide bgImage={images.background.replace("/", "")}>
              <Heading size={1}>Agenda</Heading>

              <div style={style}>
                <Text textColor="secondary" textAlign="left" textSize="1em" margin="0 0 1em 0">Date and/or title of event</Text>
                <Agenda colorMain={"#004153"} colorSecondary={"#4C4C4C"}/>
              </div>

              <Footer page={2} designator={"| insert designator if needed"} logo={images.logosmall}/><Footer/>
              
          </Slide>
                    
          <Slide bgImage={images.background.replace("/", "")}>
            <Heading size={1} textAlign="left">Chart 1</Heading>
            
            <div style={style}>
              <div style={{margin: "15% 0 0 0"}}>
                <Layout>
                    <Plotly1 fit/>
                    <Fill>
                      <List margin="0 0 0 9%">
                        <Appear><ListItem textSize="0.9em" >Observation 1</ListItem></Appear>
                        <Appear><ListItem textSize="0.9em" >Observation 2</ListItem></Appear>
                        <Appear><ListItem textSize="0.9em" >Observation 3</ListItem></Appear>
                      </List>
                    </Fill>
                </Layout>
              </div>
            </div>

            <Footer page={3} designator={"| insert designator if needed"} logo={images.logosmall}/><Footer/>
            
          </Slide>
           
          <Slide bgImage={images.background.replace("/", "")}>
            <Heading size={1} textAlign="left">Chart 2</Heading>
            
            <div style={style}>
              <div style={{margin: "15% 0 0 0"}}>
                <Layout align="center middle">
                  <Plotly2 fit/>
                </Layout>
              </div>
            </div>

            <Footer page={4} designator={"| insert designator if needed"} logo={images.logosmall}/><Footer/>
          </Slide>

          <Slide bgImage={images.background.replace("/", "")}>
            <Heading size={1} textAlign="left">Code Sample</Heading>
            
            <div style={style}>
              <CodePane lang="jsx" source={require("raw!../assets/deck.example")} margin="15% auto 0 auto" width="60%"/>
            </div>
            
            <Footer page={5} designator={"| insert designator if needed"} logo={images.logosmall}/><Footer/>
          </Slide>

          <Slide bgImage={images.background.replace("/", "")}>
              <Heading size={1} textAlign="left">Table</Heading>
              
              <div style={style}>
                <BasicTable/>
              </div>

              <Footer page={6} designator={"| insert designator if needed"} logo={images.logosmall}/><Footer/>
          </Slide> 

          <Slide transition={["slide"]} bgImage={images.thankyou.replace("/", "")}>         
            <ThankYou logo={images.logo} google={images.google} linkedIn={images.linkedIn} youtube={images.youtube} facebook={images.facebook} twitter={images.twitter}/>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
