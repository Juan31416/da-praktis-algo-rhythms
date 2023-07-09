/** 
 * Transpose Matrix
 * input: array of arrays
 * output: array of arrays
 * assumptions: the input will always have at least one input
 * */ 

function transposeMatrix(matrix){
  const newYsize = matrix[0].length;
  const newXsize = matrix.length;
 
  if(newXsize <= 1 && newYsize <= 1) return matrix;
  
  const newTransposedMatrix = [...Array(newYsize)].map(e => Array(newXsize));

  matrix.forEach((rowElement, yIndex) => {
    rowElement.forEach((individualElement, xIndex) => {
      newTransposedMatrix[xIndex][yIndex] = individualElement;
    })
    
  })

  return newTransposedMatrix;
}

// Do not edit the line bellow.
export.transposeMatrix = transposeMatrix;

/** 
 * Solution 1
 * Switching Axis Approach
 * Time: O(w*h)
 * Space: O(w*h)
 * Check length size of both matrix
 * If it is smaller than 1 return the Matrix
 * else create a new empty one with the inverse quantiy of 
 * space, then traverse the original and switch the x and y 
 * elements for each element.
 * */ 


