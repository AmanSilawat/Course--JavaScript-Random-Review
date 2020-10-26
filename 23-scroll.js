// set dom variable
const para = document.createElement('p');
para.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis minima ullam itaque, fuga ipsum dignissimos at iure odit atque officiis. Repellendus earum atque, nostrum maxime quaerat rerum nisi harum doloremque.';

// create node multiple time
for (let i = 0; i < 20; i++) {
    document.body.appendChild(para.cloneNode(true));
    console.log('asdf');
}

// scorll event
window.addEventListener('scroll', () => {
    // document.documentElement.scrollHeight (get total height of document)
    const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        alert('You have reached the bottom!');
    }
});
