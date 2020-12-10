let user = {
    name: "Aman",
    _password: "aman_password",
    fullname: function () {
        return "Aman Silawat";
    }
}

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_') == true) {
            throw new Error('Access denied')
        }
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
    },

    set(target, prop, val) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            target[prop] = val;
            return true;
        }
    },

    deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            delete target[prop];
            return true;
        }
    },

    ownKeys(target) {
        return Object.keys(target).filter((key) => !key.startsWith('_'));
    }
});

// "get" doesn't allow to read _password
try {
    // Error: Access denied
    console.log(user._password);
} catch (e) { console.log(e.message); }


// "set" doesn't allow to write _password
try {
    // Error: Access denied
    user._password = "test";
} catch (e) { console.log(e.message); }

// "deleteProperty" doesn't allow to delete _password
try {
    // Error: Access denied
    delete user._password;
} catch (e) { console.log(e.message); }

// "ownKeys" filters out _password
for (let key in user) console.log(key); // name