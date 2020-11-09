const gameSettings = {
    date: '2020-11-09'
};

// firstArg: targetObject, secondArg: custom behavior(handler)
const gameSettingProxy = new Proxy(gameSettings, {

    // firstArg: targetObject, secondArg: trying to retrive
    get: (o, property) => {
        // if my property doesn't exist
        return property in o ? o[property] : 'elsePart';
    },

    set: (o, property, value) => {
        o[property] = value;
    }
});

console.log(gameSettingProxy.date); // 2020-11-09
console.log(gameSettingProxy.difficulty); // elsePart


// assign in default settings
// gameSettings.difficulty = 'easy';

// assign in custom settings
gameSettingProxy.difficulty = 'easy';
console.log(gameSettingProxy.difficulty); // easy 
