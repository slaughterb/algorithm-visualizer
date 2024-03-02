
import getSortingAnimation from './getSortingAnimation.js';
import {
	updateBackground,
	updateBoxShadow,
	swapColumns,
	resetColumnStyles,
	enableButtons,
	disableButtons,
	playCompletedSound
} from '../../../Helpers.js';

const BubbleSort = (arr, animationRate) => {
	disableButtons();

	// retrieve animations generated for Bubble Sort:
	const animations = getSortingAnimation(arr);

	for (let i = 0; i < animations.length; i += 5) {
		const elt1 = animations[i];
		const elt2 = animations[i + 1];
		const doSwap = animations[i + 2];
		const isLastElt = animations[i + 3];
		const finalElt = animations[i + 4];

		const buttonPromise1 = new Promise(function(resolve, reject) {
			setTimeout(() => {
				updateBackground(elt1, "rgba(242, 202, 0, 0.9)");
				updateBackground(elt2, "rgba(242, 202, 0, 0.9)");

				// highlight elements to be swapped and swap values
				// if swap flag is enabled:
				if (doSwap) {
					updateBackground(elt1, "rgba(29, 224, 29, 0.9)");
					updateBackground(elt2, "rgba(29, 224, 29, 0.9)");
					swapColumns(elt1, elt2);
				}
			}, animationRate * i);
			// resolve on completion of setTimeout, thereby allowing buttons 
			// to re-enable
			resolve();
		});

		const buttonPromise2 = new Promise(function(resolve, reject) {
			setTimeout(() => {
				if (isLastElt) {
					updateBackground(finalElt, "rgba(29, 224, 29, 0.6)");
					updateBoxShadow(finalElt, "5px 5px 50px 5px rgba(29, 224, 29, 0.2)");
				}
				else {
					updateBackground(elt1, "rgba(9, 173, 171, 0.6)");
					updateBoxShadow(elt1, "rgba(9, 173, 171, 0.3");
				}

				if (finalElt === 0) {
					resolve();
				}
			}, animationRate * (i + 5));
		});

		// Perform post-sorting actions:
		Promise.all([buttonPromise1, buttonPromise2]).then(playCompletedSound).then(enableButtons).catch((err) => {
			console.log(err);
		});
	}
	// re-color columns post completion:
	resetColumnStyles(arr, animationRate * (animations.length + 5));
}

export default BubbleSort;