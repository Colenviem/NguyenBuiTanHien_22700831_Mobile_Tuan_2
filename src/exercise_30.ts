// 30. Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status.
// 30. Use async/await + Promise.allSettled()

const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

const run30 = async () => {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2", 
        "https://jsonplaceholder.typicode.com/invalid-url"
    ];

  const results = await Promise.allSettled(urls.map((url) => fetchData(url)));

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`API ${index + 1} succeeded:`, result.value);
        } else {
            console.warn(`API ${index + 1} failed:`, result.reason);
        }
    });
};

run30();
