// Use Promise.all() to run 3 simulated Promises in parallel and print the result.
const simulateTask2 = (time: number): Promise<string> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time}ms`);
        }, time);
    });

Promise.all([
    simulateTask2(1000),
    simulateTask2(2000),
    simulateTask2(3000),
]).then((results) => {
    console.log("All tasks completed:");
    results.forEach((result, index) => {
        console.log(`Task ${index + 1}: ${result}`);
    });
});