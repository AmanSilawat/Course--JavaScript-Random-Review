const gameSettings = {};

// firstArg: targetObject, secondArg: custom behavior(handler)
const gameSettingProxy = new Proxy(gameSettings, {
    
    // firstArg: targetObject, secondArg: trying to retrive
    get: (o, property) => {
        console.log(o); //  {}
        console.log(property); // difficulty
        return 'asdf';
    }
});

console.log(gameSettingProxy.difficulty); // easy