function expect(val) {
    return {
      toBe: function(compareVal) {
        if (val === compareVal) {
          return {"value": true};
        } else {
          throw new Error("Not Equal");
        }
      },
      notToBe: function(compareVal) {
        if (val !== compareVal) {
          return {"value": true};
        } else {
          throw new Error("Equal");
        }
      }
    };
  }

  
  try {
    const result1 = expect(5).toBe(5);
    console.log(result1); 
  } catch (error) {
    console.error({"error": error.message});
  }
  
