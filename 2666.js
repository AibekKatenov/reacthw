function once(fn) {
    let called = false;
    let result;
  
    return function(...args) {
      if (!called) {
        called = true;
        result = fn(...args);
      }
      return undefined;
    };
  }
  
  const fn1 = (a, b, c) => a + b + c;
  const calls1 = [[1, 2, 3], [2, 3, 6]];
  const onceFn1 = once(fn1);
  
  const results1 = calls1.map(call => {
    return {
      "calls": 1,
      "value": onceFn1(...call)
    };
  });
  
  console.log(results1); 
  
