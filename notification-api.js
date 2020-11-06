function showNotification() {

    // define a notification
    const notification = new Notification('new msg!', {
        body: 'Hey user, how are ya? You wnat to catch up soon?',
        icon: 'http://127.0.0.1:5500/img/monitor.png'
    });

    notification.onclick = () => {
        window.location.href = 'https://google.com';
    }
}


// permission is three possible value default, granted, denied
console.log(Notification.permission);

if( Notification.permission == 'granted') {
    showNotification();
} else if (Notification.permission != 'denied') {
    Notification.requestPermission().then(permission => {
        if(permission == 'granted') {

            showNotification();
        }
    });
}