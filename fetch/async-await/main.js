async function loadUsers() {
    //type one
    const response = await fetch('./fetch/chaining-requests/json/config.json');
    const users = await response.json();
    return users;

    // type two
    return (await fetch('./fetch/chaining-requests/json/config.json')).json();
}

document.addEventListener('DOMContentLoaded', async () => {
    let users = [];

    try {
        users = await loadUsers();
    } catch(e) {
        console.log('Error');
        console.log(e);
    }

    console.log(users);
});