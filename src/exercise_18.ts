// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).
type User = {
  id: number;
  name: string;
};

const fetchUser = (id: number): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}

const run18 = async () => {
    const user = await fetchUser(2);
    console.log(user);
}

run18();