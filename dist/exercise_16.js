"use strict";
// 16. Call multiple async functions in parallel using Promise.all().
const multiplyAfterDelay3 = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
};
const multiplyAfterDelay4 = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000);
    });
};
const run16 = async () => {
    const [result1, result2] = await Promise.all([
        multiplyAfterDelay3(5),
        multiplyAfterDelay4(5)
    ]);
    console.log(result1);
    console.log(result2);
};
run16();
