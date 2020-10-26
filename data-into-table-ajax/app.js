// get table body Element
const rankingsBody = document.querySelector('#rankings-table > tbody');

// Create an xhr object and run the function when the DOM is loaded
function loadRakings() {
    const request = new XMLHttpRequest();

    request.open('get', 'rankings.json');
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populateRakings(json);
        } catch (e) {
            console.warn('Could not load ranking.');
        }
    };

    request.send();
}

function populateRakings(json) {
    // Clear Exixting data
    while (rankingsBody.firstChild) {
        rankingsBody.removeChild(rankingsBody.firstChild);
    }

    // Populate table
    json.forEach((row) => {
        const tr = document.createElement('tr');

        row.forEach((cell) => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });

        rankingsBody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadRakings();
});
