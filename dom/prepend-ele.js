const heading = document.getElementById('subHead');
const strong = document.createElement('strong');
const em = document.createElement('em');
const textNode = document.createTextNode('Text Node Only')

strong.textContent = 'Strong';
em.textContent = 'em';

// both line same work
heading.prepend(strong, em, textNode);
// heading.prepend(strong, em, 'same work both line');