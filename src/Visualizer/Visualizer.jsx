import React, { Component } from 'react';

import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ButtonsContainer from './Components/ButtonsContainer/ButtonsContainer.jsx';
import ArrayColumns from './Components/ArrayColumns/ArrayColumns.jsx';
import SlidersContainer from './Components/Sliders/SlidersContainer.jsx';

import { playAudio, randomInt } from './Helpers.js';

// Sorting Algos:
import BubbleSort from './Algorithms/Sorting/BubbleSort/BubbleSort.js';
import InsertionSort from './Algorithms/Sorting/InsertionSort/InsertionSort.js';
import SelectionSort from './Algorithms/Sorting/SelectionSort/SelectionSort.js';

// assets
import './styles.css';
import ResetSound from './assets/sounds/Reset.mp3';


class Visualizer extends Component {
	constructor(props) {
		super(props);

		// state managing number of visualized arrays and default 
		// animation speed 
		this.state = {
			array: [],
			animationRate: 25,
			numArrayCols: 8
		}

		// 'this' bindings
		this.generateArray = this.generateArray.bind(this);
		this.bubbleSort = this.bubbleSort.bind(this);
		this.insertionSort = this.insertionSort.bind(this);
		this.selectionSort = this.selectionSort.bind(this);

		this.onChangeColumnsSlider = this.onChangeColumnsSlider.bind(this);
		this.onChangeAnimationRateSlider = this.onChangeAnimationRateSlider.bind(this);
	}

	// generate an initial array for use
	componentDidMount() {
		this.generateArray();
	}

	// generates a new set of columns with element values [5, 70]
	generateArray() {
		const arr = [];
		for (let i = 0; i < this.state.numArrayCols; i++) {
			arr.push(randomInt(5, 70));
		}
		playAudio(ResetSound);
		this.setState({
			array: arr
		});
	}

	// sorts:

	bubbleSort = () => {
		BubbleSort(this.state.array, this.state.animationRate);
	}

	insertionSort = () => {
		InsertionSort(this.state.array, this.state.animationRate);
	}

	selectionSort = () => {
		SelectionSort(this.state.array, this.state.animationRate);
	}

	// sliders:

	// update number of columns in state and generate a new randomized array
	// reflecting the new number of columns
	onChangeColumnsSlider = (ev, val) => {
		// callback used to generate the new array to ensure that the state has been updated
		// since setState is async
		this.setState({
			numArrayCols: val
		}, () => {
			this.generateArray();
		});
	}

	// updates visual rate when the animation speed is adjusted on the slider
	onChangeAnimationRateSlider = (ev, val) => {
		this.setState({
			animationRate: val
		});
	}

	render() {
		return (
			<div className="mainContainer">
				<Header />
				<ButtonsContainer
				generateArray={this.generateArray}
				bubbleSort={this.bubbleSort}
				insertionSort={this.insertionSort} 
				selectionSort={this.selectionSort} />

				<ArrayColumns array={this.state.array} />

				<SlidersContainer 
				numArrayCols={this.state.numArrayCols}
				animationRate={this.state.animationRate}
				onChangeColumnsSlider={this.onChangeColumnsSlider}
				onChangeAnimationRateSlider={this.onChangeAnimationRateSlider} />

				<Footer />
			</div>
		);
	}
}

export default Visualizer;