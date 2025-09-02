// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
type User1 = {
    id: number;
    name: string;
};

const fetchUser1 = (id: number): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}

const fetchUsers = async (ids: number[]): Promise<User1[]> => {
    const userPromises = ids.map(id => fetchUser1(id));
    return Promise.all(userPromises);
}

const run19 = async () => {
    const users = await fetchUsers([1, 2, 3]);
    console.log(users);
}

run19();
