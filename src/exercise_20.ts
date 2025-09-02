// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
type User2 = {
    id: number;
    name: string;
};

// Hàm fetchUser giả lập API (cho delay tùy chỉnh)
const fetchUser2 = (id: number, delay = 1000): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User_${id}` });
    }, delay);
  });
};

// Hàm fetchUserWithTimeout (timeout = 2 giây)
const fetchUserWithTimeout = (id: number, delay = 1000): Promise<User> => {
  return Promise.race([
    fetchUser2(id, delay), 
    new Promise<User>((_, reject) =>
      setTimeout(() => reject(new Error("⏰ Timeout after 2s")), 2000)
    )
  ]);
};

// Test thử
const run20 = async () => {
  try {
    console.log("Fetching user...");
    const user = await fetchUserWithTimeout(1, 3000); // API mất 3s => timeout
    console.log("User received:", user);
  } catch (error) {
    console.error("Error:", error);
  }
};

run20();