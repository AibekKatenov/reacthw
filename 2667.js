function createHelloWorld() {
    return function() {
      return "Hello World";
    };
  }
  
let a = createHelloWorld({},'assa')
console.log(a())