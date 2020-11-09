// JS proxy Object
// acts as a layer between operations on an object (traps)
// useful for validation and adding custom befaviour

const gameSettings = {
    // difficulty: 'easy'
};

// firstArg: targetObject, secondArg: custom behavior(handler)
const gameSettingProxy = new Proxy(gameSettings, {});

console.log(gameSettingProxy.difficulty); // undefined