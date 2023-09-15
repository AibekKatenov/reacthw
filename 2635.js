function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));
    }
    return result;
  }
  
  
  const arr1 = [1, 2, 3];
  function plusone(n) {
    return n + 1;
  }
  const result1 = map(arr1, plusone);
  console.log(result1); 
  
