/*
 * Free Code Camp
 * 08 - 11 - Chunky Monkey
 *
 * Created by Jeff Stautz, 2015-11-12
 *
 * Instructions:
 *   Write a function that splits an array (first argument) into groups the length
 *    of size (second argument) and returns them as a multidimensional array.
 *   Remember to use Read-Search-Ask if you get stuck. Write your own code.
 *   Here are some helpful links:
 *   Array.push() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 */


function chunk(arr, size) {
  if (size > arr.length) {
    return arr;
  }
  
  var chunkedArray = [];
  var chunk = [];
  var chunkCount = 0;
  
  for (i = 0; i < arr.length; i++) {
    if (chunkCount < size) {
      chunk.push(arr[i]);
      chunkCount++;
    } 
    // Otherwise, this chunk is done
    else {
      chunkedArray.push(chunk);
      chunk = [];
      chunk.push(arr[i]);
      chunkCount = 1;
    }
  }
  // Could get here with chunkCount still set if last bit is incomplete chunk
  if (chunkCount > 0) {
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

chunk([0,1,2,3,4,5], 2);
