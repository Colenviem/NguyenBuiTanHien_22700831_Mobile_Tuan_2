"use strict";
// Use .then() and .catch() to handle a Promise that returns a random number.
const myPromise4 = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num > 0) {
        resolve(num);
    }
    else {
        reject("random error");
    }
});
myPromise4
    .then(message => {
    console.log(message);
})
    .catch(error => {
    console.error(error);
});
