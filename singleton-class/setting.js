class Setting {
    constructor() {
        // first time calling the instance Setting.instance property is undefined
        if (Setting.instance instanceof Setting) {
            return Setting.instance;
        }

        this.settingObj = {
            'background': 'red',
            'version': Math.floor(Math.random() * 4000)
        };

        // freeze the this.settingObj
        Object.freeze(this.settingObj);

        // freeze this class
        Object.freeze(this);

        // this class instance assign in the instance property
        Setting.instance = this;
    }

    get(key) {
        return this.settingObj[key];
    }
}