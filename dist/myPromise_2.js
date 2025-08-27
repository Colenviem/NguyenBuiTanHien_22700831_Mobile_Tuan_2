"use strict";
// Write a function that returns a Promise resolving with the number 10 after 1 second.
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
myPromise2
    .then(message => {
    console.log(message);
});
