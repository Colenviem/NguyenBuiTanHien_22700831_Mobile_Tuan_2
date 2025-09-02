"use strict";
// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.
const fetchWithRetry = async (url, retries) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error(`Failed:`, error);
            if (attempt === retries) {
                throw new Error(`Failed after ${retries} attempts`);
            }
            await new Promise((res) => setTimeout(res, 1000));
        }
    }
};
const run27 = async () => {
    try {
        const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
        console.log("Data fetched:", data);
    }
    catch (error) {
        console.error('Error:', error);
    }
};
run27();
