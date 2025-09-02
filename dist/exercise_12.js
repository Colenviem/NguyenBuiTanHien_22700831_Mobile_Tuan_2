"use strict";
// 12. Write an async function that calls simulateTask(2000) and logs the result.
const simulateTask12 = (time) => new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task done");
    }, time);
});
const run12 = async () => {
    const result = await simulateTask12(2000);
    console.log(result); // Output: Task done (sau 2 giây)
};
run12();
