// create textarea and div
const txtArea = document.createElement('textarea');
const remainChar = document.createElement('div');

txtArea.rows = 6;
txtArea.cols = 30;
remainChar.textContent = '250 characters remaining';

// append my Element to body
document.body.appendChild(txtArea);
document.body.appendChild(remainChar);

// static variable
const MAX_CHARS = 250;

// event on input
txtArea.addEventListener('input', () => {
    const remaining = MAX_CHARS - txtArea.value.length;
    const color = remaining < MAX_CHARS * 0.1 ? 'red' : null;

    remainChar.textContent = `${remaining} characters remaining`;
    remainChar.style.color = color;
});
