// 24. Write an async function postData() that sends a POST request to a test API.
type Post = {
    userId: number,
    id?: number,
    title: string,
    body: string    
}

const postData = async (post: Post): Promise<Post> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}

const newPost: Post = {
    userId: 1,
    title: "foo",
    body: "bar"
};

postData(newPost)
    .then(data => console.log("Post created:", data))
    .catch(error => console.error('Error:', error));