const fetchUsers = fetch('data/users.json');
const fetchColors = fetch('data/colors.json');

// multiple promises.
Promise.all([fetchUsers, fetchColors]).then(values => {
    return Promise.all(values.map(res => res.json()));
}).then(([users, colors]) => {
    console.log(users);
    console.log(colors);
}).catch(err => {
    console.log(err);
});