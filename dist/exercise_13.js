"use strict";
// 13. Handle errors using try/catch with async/await.
const simulateTask13 = (time) => new Promise((resolve, reject) => {
    if (time < 0) {
        reject("Time cannot be negative");
        return;
    }
    setTimeout(() => {
        resolve("Task done");
    }, time);
});
const run13 = async () => {
    try {
        const result = await simulateTask13(-11);
        console.log(result);
    }
    catch (error) {
        console.error("Error:", error);
    }
};
run13();
