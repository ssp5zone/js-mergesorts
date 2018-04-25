/**
 * A custom polyfill for Array that moves element from one index to other.
 */
Array.prototype.move = function (from, to) {
	this.splice(to, 0, this.splice(from, 1)[0]);
};
/**
 * ##MergeSort
 * 
 * This merge sort has following properties,
 * 
 * * Index Based
 * * No Extra Arrays 
 * * Progressive with no returns
 * * Less space complexity
 * * Moderate computational complexity
 * 
 * @param {Array<any>} arr
 * @param {number} start
 * @param {number} end
 * @returns {Array<any>}
 */
function mergeSort(arr, start, end) {
	end = end || arr.length;
	start = start || 0;

	// the edge condition, when only 2 elements are left
	if (end - start < 2) {
		if (arr[start] > arr[end]) {
			arr.move(end, start);
		}
		return;
	}

	var center = Math.trunc((start + end) / 2),
		i = start,
		j = center;

	mergeSort(arr, start, center - 1); // sort the left side
	mergeSort(arr, center, end); // sort the right side

	// sort the overall array
	// run 2 pointers
	while (i < center && j < end) {
		// if higher value exists on lower side
		if (arr[i] > arr[j]) {
			arr.move(j++, i); // move it to higher end
			center++; // the center gets shifted because of the move
		}
		i++;
	}
}
