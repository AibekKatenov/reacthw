function cancellable(fn, args, t, cancelT) {
    let timeoutId;
    let isCancelled = false;
  
    const executeFn = () => {
      if (!isCancelled) {
        const result = fn(...args);
        console.log({"time": t, "returned": result});
      }
    };
  
    timeoutId = setTimeout(executeFn, t);
  
    const cancel = () => {
      if (!isCancelled) {
        isCancelled = true;
        clearTimeout(timeoutId);
      }
    };
  
    setTimeout(cancel, cancelT);
  
    return cancel;
  }
  
  
  const fn1 = (x) => x * 5;
  const args1 = [2];
  const t1 = 20;
  const cancelT1 = 50;
  
  const cancel1 = cancellable(fn1, args1, t1, cancelT1);
  