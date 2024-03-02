
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

const InsertionSort = (arr, animationRate) => {
	disableButtons();

	const animations = getSortingAnimation(arr);
	
	for (let i = 0; i < animations.length; i += 4) {
		const elt1 = animations[i];
		const elt2 = animations[i + 1];
		const doSwap = animations[i + 2];
		const sortedUntil = animations[i + 3];

		const buttonPromise1 = new Promise(function(resolve, reject) {
			setTimeout(() => {
				updateBackground(elt1, "rgba(242, 202, 0, 0.9)");
				updateBackground(elt2, "rgba(242, 202, 0, 0.9)");

				if (doSwap) {
					updateBackground(elt1, "rgba(29, 224, 29, 0.9)");
					updateBackground(elt2, "rgba(29, 224, 29, 0.9)");

					swapColumns(elt1, elt2);
				}
			}, animationRate * i);

			resolve();
		});

		const buttonPromise2 = new Promise(function(resolve, reject) {
			setTimeout(() => {
				// update column colors up to the current sorted point:
				for (let c = 0; c <= sortedUntil; c++) {
					updateBackground(c, "rgba(29, 224, 29, 0.6)");
					updateBoxShadow(c, "5px 5px 50px 5px rgba(29, 224, 29, 0.2)");
				}

				if (elt1 === arr.length - 1 && elt2 === arr.length - 1) {
					resolve();
				}
			}, animationRate * (i + 4));
		});

		Promise.all([buttonPromise1, buttonPromise2]).then(playCompletedSound).then(enableButtons).catch((err) => {
			console.log(err);
		});
	}
	resetColumnStyles(arr, animationRate * (animations.length + 4));
}

export default InsertionSort;