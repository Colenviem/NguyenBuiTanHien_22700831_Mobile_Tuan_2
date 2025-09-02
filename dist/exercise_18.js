"use strict";
const fetchUser = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
};
const run18 = async () => {
    const user = await fetchUser(2);
    console.log(user);
};
run18();
