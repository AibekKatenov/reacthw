function counter(n) {
    return function() {
      return n++;
    };
  }
  
  const n1 = 10;
  const c1 = counter(n1);
  const result1 = ["call", "call", "call"].map(() => c1());
  console.log(result1); 