function sumPromises(promise1, promise2) {
    return Promise.all([promise1, promise2])
      .then(values => values.reduce((a, b) => a + b, 0));
  }
  
  
  const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
  const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
  
  sumPromises(promise1, promise2)
    .then(result => {
      console.log(result); 
    });
  
