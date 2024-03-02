// Contains the two sliders controlling the number of 
// array-backed columns and the speed at which updates are
// visualized:

import React, { Component } from 'react';
import ColumnsSlider from './ColumnsSlider/ColumnsSlider.jsx';
import AnimationRateSlider from './AnimationRateSlider/AnimationRateSlider.jsx';

import './styles.css';

class SlidersContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numArrayCols: this.props.numArrayCols,
			animationRate: this.props.animationRate
		}
	}

	render() {
		return (
			<div id="sliders-container">
				<div className="column">
					<ColumnsSlider numArrayCols={this.state.numArrayCols}
					onChangeColumnsSlider={this.props.onChangeColumnsSlider} />
				</div>
				<div className="column">
					<AnimationRateSlider animationRate={this.state.animationRate}
					onChangeAnimationRateSlider={this.props.onChangeAnimationRateSlider} />
				</div>
			</div>
		);
	}
}

export default SlidersContainer;