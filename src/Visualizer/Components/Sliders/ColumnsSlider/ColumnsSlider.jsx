
import React, { Component } from 'react';
import { Slider } from '@mui/material';

import './styles.css';

class ColumnsSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numArrayCols: this.props.numArrayCols
		}
	}

	render() {
		return (
			<div className="colSliderContainer">
				<p id="array-size-label">Array Size</p>

				<Slider id="array-columns-slider"
				min={2}
				max={12}
				step={1}
				defaultValue={this.state.numArrayCols}
				valueLabelDisplay="auto"
				marks
				onChangeCommitted={this.props.onChangeColumnsSlider} />
			</div>
		);
	}
}

export default ColumnsSlider;