function reduce(nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
      result = fn(result, nums[i]);
    }
    return result;
  }

  
  const nums1 = [1, 2, 3, 4];
  function sum(accum, curr) {
    return accum + curr;
  }
  const init1 = 0;
  const result1 = reduce(nums1, sum, init1);
  console.log(result1); 
  
