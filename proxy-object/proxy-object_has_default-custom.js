const gameSettings = {};

// firstArg: targetObject, secondArg: custom behavior(handler)
const gameSettingProxy = new Proxy(gameSettings, {
    
    // firstArg: targetObject, secondArg: trying to retrive
    get: (o, property) => {
        // if my property doesn't exist
        return property in o ? o[property] : 'elsePart';
    },

    set: (o, property, value) => {
        if (property === 'difficulty' && !['easy', 'mediam', 'hard'].includes(value.toLowerCase())) {
            throw new Error('Difficulty is invalid!');
        }

        o[property] = value;
    },

    has: (o, property) => {

        // change default behavior
        if(property == 'difficulty') {
            return false;
        }

        return property in o;
    }

});

gameSettingProxy.difficulty = 'easy';
console.log( 'difficulty' in gameSettingProxy ); // false