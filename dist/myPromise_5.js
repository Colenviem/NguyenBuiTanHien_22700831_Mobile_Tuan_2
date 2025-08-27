"use strict";
// Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.
const simulateTask = (time) => new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task done");
    }, time);
});
simulateTask(1500)
    .then(result => {
    console.log(result); // Output: Task done (sau 1.5 giây)
});
