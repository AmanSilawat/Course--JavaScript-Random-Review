// // Regular event listener (not working on newly add content)
// document.addEventListener('DOMContentLoaded', function () {
//     const rows = document.querySelectorAll('tr[data-href]');

//     rows.forEach(row => {
//         row.addEventListener('click', () => {
//             window.location.href = row.dataset.href;
//         });
//     });
// });

function addPerson() {
    document.querySelector('tbody').insertAdjacentHTML('beforeend', `
    <tr data-href="https://developer.mozilla.org/">
        <td>15</td>
        <td>unknown</td>
        <td>600</td>
    </tr>
    `)
}

// delegated event listener
$(document).ready(function() {
    $(document.body).on('click', 'tr[data-href]', function() {
        window.location.href = this.dataset.href;
    })
})