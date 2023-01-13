let cells = document.querySelectorAll('#field td');

let i = 0;
function start(cells) {
    for (let cell of cells) {
        cell.addEventListener('click', function cellsing() {
            if (i % 2 == 0) {
                cell.textContent = 'X'
            } else {
                cell.textContent = 'O'
            }
            i++;
            this.removeEventListener('click', cellsing)
        })

    }
}
start(cells);