"use strict";
// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
const downloadFile = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("File downloaded");
        }, 3000);
    });
};
const run25 = async () => {
    console.log("Starting download...");
    const message = await downloadFile();
    console.log(message);
};
run25();
