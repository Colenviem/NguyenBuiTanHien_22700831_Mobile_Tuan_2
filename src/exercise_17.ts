// 17. Use for await...of to iterate over an array of Promises.
const delayAndReturn = (num: number, delay: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num);
        }, delay);
    });
}

const run17 = async () => {
    const promises = [
        delayAndReturn(1, 1000),
        delayAndReturn(2, 2000),
        delayAndReturn(3, 3000)
    ];
    for await (const result of promises) {
        console.log("Waiting for promise to resolve...");
        console.log(result);
    }
}

run17();