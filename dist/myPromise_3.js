"use strict";
const myPromise3 = new Promise((resole, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong"));
    }, 1000);
});
myPromise3
    .then(message => {
    console.log(message);
})
    .catch(error => {
    console.error(error);
});
