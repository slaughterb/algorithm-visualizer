// The slider controlling the animation rate range:

import React, { Component } from 'react';
import { Slider } from '@mui/material';


import './styles.css';



class AnimationRateSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			animationRate: this.props.animationRate
		}
	}

	render() {
		return (
			<div className="animationSliderContainer">
				<p id="animation-rate-label">Animation Rate (ms)</p>
				<span>Note: lower value is faster!</span>
				<Slider id="animation-rate-slider"
				min={10}
				max={200}
				defaultValue={this.state.animationRate}
				valueLabelDisplay="auto"
				onChangeCommitted={this.props.onChangeAnimationRateSlider} />
			</div>
		)
	}
}

export default AnimationRateSlider;

