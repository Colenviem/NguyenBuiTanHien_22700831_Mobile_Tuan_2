"use strict";
const fetchUser1 = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
};
const fetchUsers = async (ids) => {
    const userPromises = ids.map(id => fetchUser1(id));
    return Promise.all(userPromises);
};
const run19 = async () => {
    const users = await fetchUsers([1, 2, 3]);
    console.log(users);
};
run19();
