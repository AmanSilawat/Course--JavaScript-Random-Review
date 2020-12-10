function delay(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }
  
  function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }
  
  console.log(sayHi.length); // 1 (function length is the arguments count in its declaration)
  
  sayHi = delay(sayHi, 3000);
  sayHi = delay(sayHi, 3000);
  
  console.log(sayHi.length); // 0 (in the wrapper declaration