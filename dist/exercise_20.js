"use strict";
// Hàm fetchUser giả lập API (cho delay tùy chỉnh)
const fetchUser2 = (id, delay = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User_${id}` });
        }, delay);
    });
};
// Hàm fetchUserWithTimeout (timeout = 2 giây)
const fetchUserWithTimeout = (id, delay = 1000) => {
    return Promise.race([
        fetchUser2(id, delay),
        new Promise((_, reject) => setTimeout(() => reject(new Error("⏰ Timeout after 2s")), 2000))
    ]);
};
// Test thử
const run20 = async () => {
    try {
        console.log("Fetching user...");
        const user = await fetchUserWithTimeout(1, 3000); // API mất 3s => timeout
        console.log("User received:", user);
    }
    catch (error) {
        console.error("Error:", error);
    }
};
run20();
