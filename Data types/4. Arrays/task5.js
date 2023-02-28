'use strict';

function getMaxSubSum(arr) {
    let sum = 0;
    let res = 0;
    for (let i of arr) {
        res += i;
        sum = Math.max(sum, res);
        if (res < 0) res = 0;
    }

    console.log(sum);
}

getMaxSubSum([-2, -1, 1, 2]);