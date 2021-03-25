"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findCircleNum = (isConnected) => {
    let count = 0;
    for (let row = 0; row < isConnected.length; row++) {
        for (let col = 0; col < isConnected.length; col++) {
            if (isConnected[row][col] === 1) {
                dfs(isConnected, col);
                count++;
            }
        }
    }
    return count;
};
const dfs = (isConnected, col) => {
    for (let i = 0; i < isConnected.length; i++) {
        if (isConnected[col][i] === 1) {
            isConnected[col][i] = 0;
            dfs(isConnected, i);
        }
    }
};
exports.default = findCircleNum;
//# sourceMappingURL=numberOfProvinces.js.map