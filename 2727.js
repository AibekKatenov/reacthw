function isEmpty(obj) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj).length === 0;
    }
    return false;
  }
    
  const obj1 = {"x": 5, "y": 42};
  console.log(isEmpty(obj1)); // Выведет false
  
  const obj2 = {};
  console.log(isEmpty(obj2)); // Выведет true
