"use strict";
function somarComTexto(msg, ...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(msg + ":" + sum);
}
// somarComTexto("Soma", [1,2,3,4,5]);
somarComTexto("Soma", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
