Promise.resolve(2)
    .then(num => num * num)
    .then(result => result * 2)    
    .then(result => result + 5) 
    .then(result => {
        console.log(result);
    })