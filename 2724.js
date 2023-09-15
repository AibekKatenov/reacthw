function customSort(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
  }

  const arr1 = [5, 4, 1, 2, 3];
  const fn1 = (x) => x;
  console.log(customSort(arr1, fn1));
  
