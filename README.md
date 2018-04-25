 # MergeSorts in JavaScript
 
 Various [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort) implimentations in pure javascript.
 
 ## Details
 
 The above files use different approaches to perform a merge sort.
 
 ### 1. mergesort-recursive-concat.js
 
 * Splits the input, uses recursive concatination and then sorts
 * Does not store in extra Arrays 
 * Moderate space complexity
 * Moderate - High computational complexity
 
 ### 2. mergesort-indexed.js
 
 * Uses index rather than splitting the array
 * Progressive with no returns (Modifies the input array itself)
 * Very Low space complexity (Less Memory)
 * Moderate computational complexity
 
 ### 3. mergesort-3-arrays.js
 
 * Simple
 * Uses 3 Arrays - Left Sub-Array, Right Sub-Array, Merged
 * High space complexity (Uses more memory)
 * Very Low computational complexity (Good performance)

 ## Usage
 
 When using _mergesort-recursive-concat.js_ or _mergesort-3-arrays.js_
 ```javascript
  var sortedArray = mergeSort(unsortedArray); 
 ```
 
 When using _mergesort-indexed.js_, the input array would be modified
 ```javascript
  mergeSort(unsortedArray); 
 ```
 
## Licence
Licenced under GNU GENERAL PUBLIC LICENSE v3.0. It is free to copy, use and distribute.
