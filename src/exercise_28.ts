// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
const simulateTask28 = (id: number, time: number): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done ${time} ms`);
        }, time);
    });
}

const batchProcess = async () => {
    const tasks = [
        simulateTask28(1, 1000),
        simulateTask28(2, 2000),
        simulateTask28(3, 3000),
        simulateTask28(4, 4000),
        simulateTask28(5, 5000)
    ];

    try {
        const results = await Promise.all(tasks);
        results.forEach(result => console.log(result));
    } catch (error) {
        console.error('Error processing tasks:', error);
    }
}

const run28 = async () => {
    await batchProcess();
}

run28();