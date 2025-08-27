// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
const myPromise5 = (succeeded: boolean): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succeeded) {
        resolve("Task succeeded");
      } else {
        reject("Task failed");
      }
    }, 1000);
  });
};

myPromise5(true)
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Done");
    });