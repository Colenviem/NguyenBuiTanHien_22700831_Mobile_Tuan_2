"use strict";
// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.
const simulateTask29 = (id, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done ${time} ms`);
        }, time);
    });
};
const queueProcess = async () => {
    const tasks = [
        { id: 1, time: 1000 },
        { id: 2, time: 2000 },
        { id: 3, time: 3000 },
        { id: 4, time: 4000 },
        { id: 5, time: 5000 }
    ];
    console.log('Starting task processing in queue...');
    for (const task of tasks) {
        const result = await simulateTask29(task.id, task.time);
        console.log(result);
    }
    console.log('All tasks completed');
};
const run29 = async () => {
    await queueProcess();
};
run29();
