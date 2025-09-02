// 11. Convert Exercise 1 into async/await.
const getHelloAsync = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, Async!");
        }, 2000);
    })
}

const run = async () => {
    const message = await getHelloAsync();
    console.log(message); 
}

run(); 