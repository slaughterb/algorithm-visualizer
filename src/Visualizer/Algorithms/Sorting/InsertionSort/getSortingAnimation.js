// INSERTION SORT SORTING ANIMATION

const getSortingAnimation = (arr) => {
	const animations = [];

	animations.push(0, 0, false, 0);

	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;

		// comparison animation:
		animations.push(i, j, false, i - 1);

		while (j >= 0 && arr[j] > key) {
			// perform swap:
			[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			animations.push(j, j + 1, false, i);
			animations.push(j, j + 1, true, i);

			j--;
		}
	}

	animations.push(arr.length - 1, arr.length - 1, false, arr.length - 1);
	return animations;
}

export default getSortingAnimation;