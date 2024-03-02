
import {
	updateBackground,
	updateBoxShadow,
	swapColumns,
	resetColumnStyles,
	enableButtons,
	disableButtons,
	playCompletedSound
} from '../../../Helpers.js';

import getSortingAnimation from './getSortingAnimation.js';

const SelectionSort = (arr, animationRate) => {
	disableButtons();

	const animations = getSortingAnimation(arr);

	const DEFAULT_COLOR = "rgba(9, 173, 171, 0.6)";

	for (let i = 0; i < animations.length; i += 6) {
		const elt1 = animations[i];
		const elt2 = animations[i + 1];
		const minIndexElt = animations[i + 2];
		const doSwap = animations[i + 3];
		const isLastElt = animations[i + 4];
		const finalElt = animations[i + 5];

		const buttonPromise1 = new Promise(function(resolve, reject) {
			setTimeout(() => {
				updateBackground(minIndexElt, "rgba(179, 255, 255, 0.9)");
				updateBackground(elt1, "rgba(255, 255, 255, 0.9)");
				updateBackground(elt2, "rgba(242, 202, 0, 0.9)");

				if (doSwap) {
					updateBackground(minIndexElt, "rgba(29, 224, 29, 0.9)");
					updateBackground(elt1, "rgba(29, 224, 29, 0.9)");
					swapColumns(elt1, minIndexElt);
				}
			}, animationRate * i);
			resolve();
		});

		const buttonPromise2 = new Promise(function(resolve, reject) {
			setTimeout(() => {
				if (isLastElt) {
					updateBackground(finalElt, "rgba(29, 224, 29, 0.6)");
					updateBoxShadow(finalElt, "5px 5px 50px 5px rgba(29, 224, 29, 0.2)");
				}
				else {
					updateBackground(elt2, DEFAULT_COLOR);
					updateBackground(minIndexElt, DEFAULT_COLOR);
				}

				if (finalElt === arr.length - 1) {
					resolve();
				}
			}, animationRate * (i + 6));
		});

		Promise.all([buttonPromise1, buttonPromise2]).then(playCompletedSound).then(enableButtons).catch((err) => {
			console.log(err);
		});
	}
	resetColumnStyles(arr, animationRate * (animations.length + 6));
}

export default SelectionSort;