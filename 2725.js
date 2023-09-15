function cancellable(fn, args, t, cancelT) {
    let currentTime = 0;
    let results = [];
  
    const executeFn = () => {
      const result = fn(...args);
      results.push({"time": currentTime, "returned": result});
    };
  
    const intervalId = setInterval(() => {
      if (currentTime >= cancelT) {
        clearInterval(intervalId);
      } else {
        executeFn();
        currentTime += t;
      }
    }, t);
  
    setTimeout(() => {
      clearInterval(intervalId);
    }, cancelT);
  
    return () => {
      clearInterval(intervalId);
    };
  }

  
  const fn1 = (x) => x * 2;
  const args1 = [4];
  const t1 = 35;
  const cancelT1 = 190;
  
  const cancel1 = cancellable(fn1, args1, t1, cancelT1);
  console.log(cancel1()); 
  

  