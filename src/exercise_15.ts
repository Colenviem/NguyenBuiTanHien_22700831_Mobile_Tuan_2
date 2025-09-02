// 15. Call multiple async functions sequentially using await.
const multiplyAfterDelay1 = (num: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}

const multiplyAfterDelay2 = (num: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000);
    });
}

const run15 = async () => {
    const firstResult = await multiplyAfterDelay1(5);
    console.log(firstResult); 
    const secondResult = await multiplyAfterDelay2(firstResult);
    console.log(secondResult); 
}

run15();