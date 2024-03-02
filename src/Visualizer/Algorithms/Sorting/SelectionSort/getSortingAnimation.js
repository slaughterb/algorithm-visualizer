// SELECTION SORT SORTING ANIMATION

const getSortingAnimation = (arr) => {
	const animations = [];

	let minIndex = 0;
	for (let i = 0; i < arr.length; i++) {
		minIndex = i;
		animations.push(i, i, minIndex, false, false, -1);

		for (let j = i + 1; j < arr.length; j++) {
			animations.push(i, j, minIndex, false, false, -1);

			if (arr[j] < arr[minIndex]) {
				minIndex = j;
				animations.push(i, j, minIndex, false, false, -1);
			}
		}
		// perform swap:
		if (minIndex !== i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
			animations.push(i, i, minIndex, true, false, -1);
		}
		animations.push(i, i, i, false, true, i);
	}
	return animations;
}

export default getSortingAnimation;