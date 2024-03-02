
import CompletedSound from './assets/sounds/Completed.mp3';

const frontColColor = document.getElementsByClassName("frontColFill");
const backColColor = document.getElementsByClassName("backColFill");
const leftColColor = document.getElementsByClassName("leftColFill");
const rightColColor = document.getElementsByClassName("rightColFill");
const bottomColColor = document.getElementsByClassName("bottom");
const textValue = document.getElementsByClassName("colValue");


// return array representation of each sides' colors of an array 
// column at the specified index
export function getColStyle(index) {
	if (!frontColColor[index] || !backColColor[index] || !leftColColor[index] ||
		!rightColColor[index] || !bottomColColor[index]) {
		throw new Error("Warning - column style undefined ");
	}
	const colStyles = [
		frontColColor[index].style,
		backColColor[index].style,
		leftColColor[index].style,
		rightColColor[index].style,
		bottomColColor[index].style
	];
	return colStyles;
}

// update all sides of indexed column to specified color
export function updateBackground(index, color) {
	const eltStyle = getColStyle(index);

	for (let side = 0; side < eltStyle.length; side++) {
		eltStyle[side].backgroundColor = color;
	}
}

// update all sides of indexed col to provided shadow style
export function updateBoxShadow(index, shadow) {
	const eltStyle = getColStyle(index);

	for (let side = 0; side < eltStyle.length; side++) {
		eltStyle[side].boxShadow = shadow;
	}
}

// swap height values of two array columns
export function swapColumns(pos1, pos2) {
	const eltStyle1 = getColStyle(pos1);
	const eltStyle2 = getColStyle(pos2);

	for (let side = 0; side < 4; side++) {
		const tempH = eltStyle1[side].height;
		eltStyle1[side].height = eltStyle2[side].height;
		eltStyle2[side].height = tempH;

		// get numerical height values and update columns' visual height:
		const eltHeight1 = parseInt(eltStyle1[side].height, 10);
		const eltHeight2 = parseInt(eltStyle2[side].height, 10);

		eltStyle1[side].transform = `translateY(${70 - eltHeight1}vh)`;
		eltStyle2[side].transform = `translateY(${70 - eltHeight2}vh)`;

	}
	// Update the front text values of the columns post swap (substring removes vh suffix from label):
	textValue[pos1].innerText = eltStyle1[0].height.substring(0, eltStyle1[0].height.length - 2);
	textValue[pos2].innerText = eltStyle2[0].height.substring(0, eltStyle2[0].height.length - 2);
}

// update columns' styles to default value 
export function resetColumnStyles(arr, animationRate) {
	setTimeout(() => {
		for (let s = 0; s < arr.length; s++) {
			updateBackground(s, "rgba(9, 173, 171, 0.6)");
			updateBoxShadow(s, "5px 5px 50px 5px rgba(9, 173, 171, 0.3)");
		}
	}, animationRate);
}

export function randomInt(low, high) {
	return Math.floor(Math.random() * (1 + high - low) + low);
}

export function enableButtons() {
	document.getElementById("reset-button").disabled = false;
	document.getElementById("sliders-container").opacity = 1;
	document.getElementById("sliders-container").visibility = "visible";
	document.getElementById("bubble-sort-button").disabled = false;
	document.getElementById("insertion-sort-button").disabled = false;
	document.getElementById("selection-sort-button").disabled = false;
}

export function disableButtons() {
	document.getElementById("reset-button").disabled = true;
	document.getElementById("sliders-container").opacity = 0;
	document.getElementById("sliders-container").visibility = "hidden";
	document.getElementById("bubble-sort-button").disabled = true;
	document.getElementById("insertion-sort-button").disabled = true;
	document.getElementById("selection-sort-button").disabled = true;
}

export function playAudio(audio) {
	const sound = new Audio(audio);
	sound.preload = "auto";
	const playing = sound.play();
	playing.then(() => {}).catch((err) => {
		console.log(err);
	});
}

export function playCompletedSound() {
	playAudio(CompletedSound);
}




