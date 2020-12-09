const NameList = {
    names: [],
    onNewName: null,

    init: function (newNameCallback) {
        this.onNewName = newNameCallback;
    },

    addName: function (name) {
        this.names.push(name);
        this.onNewName(name, this.names);
    },
};

// set as a callBack function
NameList.init(function (newName, allNames) {
    console.log(newName);
    console.log('Current name list is: ' + allNames);
});

// pass name in a function
NameList.addName('Aman');
NameList.addName('Saleh Majeet');
NameList.addName('Moien Bhai');
