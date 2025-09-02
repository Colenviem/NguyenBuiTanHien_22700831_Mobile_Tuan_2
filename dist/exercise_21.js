"use strict";
// 21. Use fetch to get data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).
const fetchTodo = async () => {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
        const data = await resp.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
};
fetchTodo();
