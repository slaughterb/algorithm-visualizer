// BUBBLE SORT SORTING ANIMATION

const getSortingAnimation = (arr) => {
	const animations = [];

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			// comparison animation:
			animations.push(j, j + 1, false, false, -1);
			// perform swap, bubbling up element if next element ahead is lesser:
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				// push doSwap flag for visualization
				animations.push(j, j + 1, true, false, -1);
			}
		}
		// last item:
		animations.push(arr.length - i - 1, arr.length - i - 1, false, true, arr.length - i - 1);
	}
	// conclude animation
	animations.push(0, 0, false, true, 0);

	return animations;
}

export default getSortingAnimation;