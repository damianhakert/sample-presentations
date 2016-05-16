import React, { Component } from "react";
import {Text, Image, Layout, Fill} from "spectacle";

export default class Footer extends Component {
    render() {
		var style={
			width: '100%',
			height: '6%',
			position: 'fixed',
			bottom: 0,
			left: 0,
			borderTop: 'solid #DCDCDC 2px'
		};

		return (
			<div style={style}>
				<Layout>
					<Fill>
						<Text caps style={{margin:"2% 0 0 5%"}} textSize="0.3em" textColor="#004153" textAlign="left">{this.props.page} {this.props.designator}</Text>
					</Fill>
					<Fill>
						<Image fit style={{margin:"0 0 2% 84%"}} src={this.props.logo}/>
					</Fill>
				</Layout>
			</div>
		);
    }
}