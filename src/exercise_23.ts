// 23. Write an async function that fetches a list of todos and filters out those that are not completed.
type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}

const fetchAndFilterTodos = async () => {
    try {
        const todos = await fetchTodos();
        const completedTodos = todos.filter(todo => todo.completed === true);
        console.log("Completed Todos:");
        completedTodos.slice(0,5).forEach(todo => console.log(todo));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndFilterTodos();