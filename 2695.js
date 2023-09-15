class ArrayWrapper {
    constructor(nums) {
      this.nums = nums;
    }
  
    add(otherArrayWrapper) {
      const combinedArray = this.nums.concat(otherArrayWrapper.nums);
      return combinedArray.reduce((sum, num) => sum + num, 0);
    }
    toString() {
      return "[" + this.nums.join(",") + "]";
    }
  }

  
  const obj1 = new ArrayWrapper([1, 2]);
  const obj2 = new ArrayWrapper([3, 4]);
  
  console.log(obj1.add(obj2));
