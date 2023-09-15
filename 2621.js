function sleep(millis) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(millis);
      }, millis);
    });
  }

  
  const millis1 = 100;
  let t1 = Date.now();
  sleep(millis1).then(result => {
    console.log(result); 
    console.log(Date.now() - t1); 
  });
  
