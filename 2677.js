function chunkArray(arr, size) {
    const chunkedArray = [];
    let index = 0;
  
    while (index < arr.length) {
      chunkedArray.push(arr.slice(index, index + size));
      index += size;
    }
  
    return chunkedArray;
  }
  

  
  const arr1 = [1, 2, 3, 4, 5];
  const size1 = 1;
  console.log(chunkArray(arr1, size1));