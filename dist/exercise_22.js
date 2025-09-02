"use strict";
// 22. Call the API multiple times and log the results.
const fetchTodo1 = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};
const fetchTodosParallel = async (ids) => {
    try {
        const promises = ids.map(id => fetchTodo1(id));
        const results = await Promise.all(promises);
        results.forEach((data, index) => {
            console.log(`Todo ${index}:`, data);
        });
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
};
fetchTodosParallel([1, 2, 3, 4, 5]);
