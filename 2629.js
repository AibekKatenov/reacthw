function composeFunctions(functions) {
    return function(x) {
      let result = x;
      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    };
  }
  
  
  const functions1 = [x => x + 1, x => x * x, x => 2 * x];
  const composedFunction1 = composeFunctions(functions1);
  const x1 = 4;
  const result1 = composedFunction1(x1);
  console.log(result1); 
  
