"use strict";
// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
const multiplyAfterDelay = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
};
const run14 = async () => {
    const result = await multiplyAfterDelay(5);
    console.log(result);
};
run14();
