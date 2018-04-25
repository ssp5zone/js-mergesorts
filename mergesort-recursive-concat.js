/**
 * A custom polyfill for Array that moves element from one index to other.
 */
Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

/**
 * ##MergeSort
 *
 * * Simple
 * * No Extra Arrays 
 * * Uses Recursive concatinations
 * * Less space complexity
 * * Moderate to High computational complexity
 * 
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */
function mergeSort(arr) {
	var end = arr.length;
	if (end < 2) return arr;
	var center = Math.trunc(end / 2),
		i = 0,
		j = center;
	// divide, sort and merge
	arr = mergeSort(arr.slice(0, center)).concat(mergeSort(arr.slice(center)));
	// the merged array is still unsorted
	// so run 2 pointers in the merged array
	while (i < center && j < end) {
		// if higher value exists on lower side
		if (arr[i] > arr[j]) {
			arr.move(j++, i); // move it to higher end
			center++; // the center gets shifted because of the move
		}
		i++;
	}
	return arr;
}
