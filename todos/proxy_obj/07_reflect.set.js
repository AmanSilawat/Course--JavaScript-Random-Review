let user = {
    name: "John",
  };
  
  user = new Proxy(user, {
    get(target, prop, receiver) {
      console.log(`GET ${prop}`);
      return Reflect.get(target, prop, receiver); // (1)
    },
    set(target, prop, val, receiver) {
      console.log(`SET ${prop}=${val}`);
      return Reflect.set(target, prop, val, receiver); // (2)
    }
  });
  
  let name = user.name; // shows "GET name"
  console.log(name)
  user.name = "Pete"; // shows "SET name=Pete"
//   console.log(user.name)