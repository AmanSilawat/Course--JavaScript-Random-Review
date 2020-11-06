// create two instance of the same class
const settIns1 = new Setting();
const settIns2 = new Setting();

console.log(settIns1.settingObj.version); // 750
console.log(settIns2.settingObj.version); // 750

console.log(settIns1 === settIns2); // true