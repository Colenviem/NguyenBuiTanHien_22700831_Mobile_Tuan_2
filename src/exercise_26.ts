// 26. Use async/await with setTimeout to simulate a 5-second wait.
const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const run26 = async () => {
    console.log("Waiting for 5 seconds...");
    await delay(5000);
    console.log("5 seconds have passed!");
}

run26();