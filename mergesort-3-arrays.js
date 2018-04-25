/**
 * ##MergeSort - 3 Arrays
 * 
 * This merge sort has following properties,
 * 
 * * Simple
 * * Uses 3 Arrays - Left Sub-Array, Right Sub-Array, Merged
 * * High space complexity (Uses more memory)
 * * Very Low computational complexity (Good performance)
 * 
 * @param {Array<any>} arr
 * @param {number} start
 * @param {number} end
 * @returns {Array<any>}
 */
function mergeSort(arr) {
	if (arr.length < 2) return arr; // last one

	var center = Math.trunc(arr.length / 2),
		arr1 = mergeSort(arr.slice(0, center)), // create sorted left sub array
		arr2 = mergeSort(arr.slice(center)), // create sorted right sub array
		merge = []; // the main merged array 

	// merge till one of the arrays exhausts
	while (arr1.length && arr2.length) {
		// pick the smaller element out of 2 and put it in main array
		merge.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
	}

	return merge.concat(arr1.length ? arr1 : arr2); // concat whichever one is remaining
}
