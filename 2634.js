function filter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
  
  
  const arr1 = [0, 10, 20, 30];
  function greaterThan10(n) {
    return n > 10;
  }
  const result1 = filter(arr1, greaterThan10);
  console.log(result1); 
  
