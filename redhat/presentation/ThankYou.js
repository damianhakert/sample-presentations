import React, { Component } from "react";
import {Text, Layout, Fill, Fit, Image, Link} from "spectacle";

export default class Footer extends Component {
    render() {
      var style = {
        width: "80%",
        marginLeft: "12%",
        marginTop: "14%"
      };

      return (
      	<div style={style}>
          <Image margin="0 100% 0 2%" src={this.props.logo}/>

        	<Text caps style={{letterSpacing: "10px"}} bold textSize="1.5em" textColor="white" textAlign="left" margin="2% 0 4% 9%">Thank you</Text>
		
            <Layout>
                  <Fill>
                    <Link href="http://www.plus.google.com/+RedHat">
                      <Layout>
                        <Image fit src={this.props.google} margin="0 0 2% 18%"/>
                       <Fill>
                          <Text textAlign="left" textColor="white" textSize="0.6em" margin="5% 0 0 5%">plus.google.com/+RedHat</Text>
                        </Fill>
                      </Layout>
                    </Link>
                  </Fill>
                  
                  <Fill>
                    <Link href="http://www.linkedin.com/company/red-hat">
                      <Layout>
                        <Image fit src={this.props.linkedIn} margin="0 0 2% 10%"/> 
                        <Fill>
                          <Text textAlign="left" textColor="white" textSize="0.6em" margin="5% 0 0 5%">linkedin.com/company/red-hat</Text>
                        </Fill>
                      </Layout>
                    </Link>
                  </Fill>
            </Layout>

            <Layout>
                  <Fill>
                    <Link href="http://www.youtube.com/user/RedHatVideos">
                      <Layout>
                        <Image fit src={this.props.youtube} margin="0 0 2% 18%"/>
                        <Fill>
                          <Text textAlign="left" textColor="white" textSize="0.6em" margin="5% 0 0 5%">youtube.com/user/RedHatVideos</Text>
                        </Fill>
                      </Layout>
                    </Link>
                  </Fill>

                  <Fill>
                    <Link href="http://www.facebook.com/redhatinc">
                      <Layout>
                        <Image fit src={this.props.facebook} margin="0 0 2% 10%"/>
                        <Fill>
                          <Text textAlign="left" textColor="white" textSize="0.6em" margin="5% 0 0 5%">facebook.com/redhatinc</Text>
                        </Fill>
                      </Layout>
                    </Link>
                  </Fill>
            </Layout>
            
            <Layout>
                  <Fill>
                    <Link href="http://www.twitter.com/RedHatNews">
                    <Layout>
                        <Image fit src={this.props.twitter} margin="0 0 2% 18%"/>
                        <Fill>
                          <Text textAlign="left" textColor="white" textSize="0.6em" margin="5% 0 0 5%">twitter.com/RedHatNews</Text>
                        </Fill>
                    </Layout>
                    </Link>
                  </Fill>
                  <Fill>
                    <Text></Text>
                  </Fill>
            </Layout>  
      	</div>
      );
    }
}