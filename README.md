# typescript_problem7
MaximalRectangle
# Maximal Rectangle Algorithm (Dynamic Programming)

## Overview
This project provides an efficient algorithm for solving the **Maximal Rectangle Problem** – finding the largest rectangle containing only `1`s in a binary matrix. The algorithm uses a Dynamic Programming approach.

## Example
For the following matrix:
[0, 1, 1, 0]
[1, 1, 1, 1]
[1, 1, 1, 1]
[1, 1, 0, 0]

## How It Works
The algorithm processes the matrix row by row, maintaining three auxiliary arrays:
- height[j] – height of consecutive 1s ending at column j
- left[j] – left boundary where the rectangle can start at column j
- right[j] – right boundary where the rectangle can end at column j

## Complexity
- Time: O(rows × cols)
- Space: O(cols)

## Prerequisites
- Node.js (version 12 or higher)
- TypeScript

## Setup and Execution

1. Save the code in a file named maximalRectangle.ts

2. Install TypeScript:
npm install -g typescript

3. Compile the file:
tsc maximalRectangle.ts

4. Run the compiled file:
node maximalRectangle.js

## Usage

const matrix = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0]
];

const result = maximalRectangleDP(matrix);
console.log(result);

## Test Cases

Empty matrix: [] -> 0
Single row: [[1, 1, 1, 1]] -> 4
All zeros: [[0, 0], [0, 0]] -> 0
All ones: [[1, 1], [1, 1]] -> 4

## Features
- Optimal performance – single pass through the matrix
- Memory efficient
- Handles edge cases
- Written in TypeScrip