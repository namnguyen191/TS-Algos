"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palindromicSubstringCount = (str) => {
    let count = 0;
    let matrix = [];
    for (let i = 0; i < str.length; i++) {
        matrix.push(new Array(str.length).fill(0));
    }
    // Marked all single character as palindrome
    for (let i = 0; i < str.length; i++) {
        matrix[i][i] = 1;
        count++;
    }
    // Loop through the matrix but ignore the bottom because it is mirrored to the top half. We also ignore the cross line as they represent a single character and has already been marked
    for (let col = 0; col < str.length; col++) {
        for (let row = 0; row < col; row++) {
            // Check for length 2 substring, they are right above the single character cross line
            if (row === col - 1 && str[col] === str[row]) {
                matrix[row][col] = 1;
                count++;
                continue;
            }
            // Check substring that has length > 2
            // We first check to see if the substring is a palindrome by checking the bottom left cell of the current cell, if it is then we continue to check the characters at both ends.
            if (matrix[row + 1][col - 1] === 1 && str[col] === str[row]) {
                matrix[row][col] = 1;
                count++;
            }
        }
    }
    return count;
};
exports.default = palindromicSubstringCount;
//# sourceMappingURL=palindromeSubstringCount.js.map