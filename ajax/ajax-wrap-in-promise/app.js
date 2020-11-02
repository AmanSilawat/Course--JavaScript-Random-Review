function promiseAjx(url, parseJson) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (parseJson) {
                try {
                    console.log(this);
                    resolve(this);
                } catch (e) {
                    reject(e);
                }
            } else {
                resolve(this.responseText);
            }
        }

        xhr.onerror = function () {
            reject(new Error('Network error'));
        };

        xhr.open('get', url);
        xhr.send();
    });
}

promiseAjx('/ajax/ajax-wrap-in-promise/user.json', true)
    .then(function (xhr) {
        if (xhr.status !== 200) {
            console.log('Some error');
        } else {
            console.log(xhr.responseText);
        }
        console.log(jsonString);
    }).catch(function(err){
        console.log(err);
    })