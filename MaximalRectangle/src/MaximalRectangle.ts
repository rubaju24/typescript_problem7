const maximalRectangleDP = (matrix: number[][]): number => {
  if (!matrix.length) return 0;

  const rows = matrix.length;
  const cols = matrix[0]!.length;

  const left: number[] = new Array(cols).fill(0);
  const right: number[] = new Array(cols).fill(cols);
  const height: number[] = new Array(cols).fill(0);

  let maxArea = 0;

  for (let i = 0; i < rows; i++) {
    let currentLeft = 0;
    let currentRight = cols;

    // Update height
    for (let j = 0; j < cols; j++) {
      height[j] = matrix[i]![j] === 1 ? height[j]! + 1 : 0;
    }

    // Update left boundary
    for (let j = 0; j < cols; j++) {
      if (matrix[i]![j] === 1) {
        left[j] = Math.max(left[j]!, currentLeft);
      } else {
        left[j] = 0;
        currentLeft = j + 1;
      }
    }

    // Update right boundary
    for (let j = cols - 1; j >= 0; j--) {
      if (matrix[i]![j] === 1) {
        right[j] = Math.min(right[j]!, currentRight);
      } else {
        right[j] = cols;
        currentRight = j;
      }
    }

    // Calculate area
    for (let j = 0; j < cols; j++) {
      const area = height[j]! * (right[j]! - left[j]!);
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};
console.log(
  maximalRectangleDP([
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0],
  ]),
);
