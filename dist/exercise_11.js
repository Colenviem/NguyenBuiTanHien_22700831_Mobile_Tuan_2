"use strict";
// 11. Convert Exercise 1 into async/await.
const getHelloAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, Async!");
        }, 2000);
    });
};
const run = async () => {
    const message = await getHelloAsync();
    console.log(message);
};
run();
