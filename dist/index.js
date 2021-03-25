"use strict";
// import palindromicSubstringCount from './string-problems/palindromeSubstringCount';
// import findCircleNum from './matrix-problems/numberOfProvinces';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firstUniqueCharacter_1 = __importDefault(require("./string-problems/firstUniqueCharacter"));
// console.log('Palindrome substring count problem: ');
// console.log(
//   `Input string: aabaaca. Result: ${palindromicSubstringCount('aabaaca')}`
// );
// let isConnected = [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1]
// ];
// let numOfProvinces = findCircleNum(isConnected);
// console.log('Number of provinces: ', numOfProvinces);
const str = 'loveleetcode';
console.log(firstUniqueCharacter_1.default(str));
//# sourceMappingURL=index.js.map