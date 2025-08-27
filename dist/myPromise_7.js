"use strict";
const simulateTask3 = (time) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Resolved after ${time}ms`);
    }, time);
});
Promise.race([
    simulateTask3(3000),
    simulateTask3(1000),
    simulateTask3(2000),
])
    .then((result) => {
    console.log("First resolved:", result);
})
    .catch((error) => {
    console.error("An error occurred:", error);
});
