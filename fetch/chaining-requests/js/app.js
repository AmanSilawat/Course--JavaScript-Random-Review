// ! Fatch chaining request (without custome Promise objcet)
// fetch('json/config.json').then(response => {
//     return response.json();
// }).then(data => {
//     return fetch('themes/' + data.theme + '.css');
// }).then(response => {
//     return response.text();
// }).then(cssContent => {
//     console.log(cssContent);
// }).catch(err => {
//     console.log(err);
// });

// get config data
function getConfig() {
    return new Promise(function(resolve, reject) {
        fetch('json/config.json').then(response => {
            return response.json();
        }).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err)
        });
    })
}

// get Theme data
function getTheme(themeName) {
    return new Promise(function(resolve, reject) {
        fetch('themes/' + themeName + '.css')
        .then(response => {
            return response.text();
        })
        .then(cssContents => {
            return resolve(cssContents)
        }).catch(err => {
            reject(err)
        });
    })
}

// ! Fatch chaining request (without custome Promise objcet)
getConfig().then(data => {
    return getTheme(data.theme)
}).then(cssContents => {
    console.log('Theme Loaded');
    console.log(cssContents);
}).catch(err => {
    console.log(err);
})