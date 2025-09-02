"use strict";
const fetchUser2 = (id, delay = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User_${id}` });
        }, delay);
    });
};
const fetchUserWithTimeout = (id, delay = 1000) => {
    return Promise.race([
        fetchUser2(id, delay),
        new Promise((_, reject) => setTimeout(() => reject(new Error("⏰ Timeout after 2s")), 2000))
    ]);
};
const run20 = async () => {
    try {
        console.log("Fetching user...");
        const user = await fetchUserWithTimeout(1, 3000);
        console.log("User received:", user);
    }
    catch (error) {
        console.error("Error:", error);
    }
};
run20();
