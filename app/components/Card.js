import React from "react";
import classNames from "classnames";
import Draggable from "react-draggable"; 

export default class Card extends React.Component {
	constructor() {
		super();
		this.flip = this.flip.bind(this);
		this.state = {
			orientation: "left"
		};
	}

	flip() {
		this.setState({
			orientation: this.state.orientation === "left" ? "right" : "left"
		});
	}

	render({ data } = this.props) {
		console.log(data);
		return (
			<Draggable>
				<div className={classNames("Card", this.state.orientation)} onDoubleClick={this.flip}>
					<div className="Card-left" style={{ "background": data.leftSide }} />
					<div className="Card-right" style={{ "background": data.rightSide }} />
				</div>
			</Draggable>
		);		
	}
		
}