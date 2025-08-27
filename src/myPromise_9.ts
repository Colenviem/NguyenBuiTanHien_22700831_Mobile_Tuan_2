const filterEvenNumbers = (numbers: number[]): Promise<number[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
};

const myArray = [1, 2, 3, 4, 5, 6];

filterEvenNumbers(myArray)
    .then(results => {
        console.log("Even numbers:")
        results.forEach(result => {
            console.log(`Result: ${result}`)
        })
    });