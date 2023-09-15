function createCounter(init) {
    let currentValue = init;
  
    return {
      increment: function() {
        currentValue++;
        return currentValue;
      },
      decrement: function() {
        currentValue--;
        return currentValue;
      },
      reset: function() {
        currentValue = init;
        return currentValue;
      }
    };
  }
  
  
  const counter1 = createCounter(5);
  const result1 = ["increment", "reset", "decrement"].map((action) =>
    counter1[action]()
  );
  console.log(result1);
  
