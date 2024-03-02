
import React, { Component } from 'react';
import './styles.css';

class ButtonsContainer extends Component {
	render() {
		return (
			<div className="buttonsContainer">
				<button id="reset-button" onClick={() => this.props.generateArray()}>
					Create New Array
				</button>
				<button id="bubble-sort-button"
				onClick={() => this.props.bubbleSort()}
				className="btn-1">
					Bubble Sort
				</button>
				<button id="insertion-sort-button"
				onClick={() => this.props.insertionSort()}
				className="btn-1">
					Insertion Sort
				</button>
				<button id="selection-sort-button"
				onClick={() => this.props.selectionSort()}
				className="btn-1">
					Selection Sort
				</button>
			</div>
		);
	}
}

export default ButtonsContainer;