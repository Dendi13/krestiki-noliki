let cells = document.querySelectorAll('#field td');
let winner = document.querySelector('#winner')
let value = document.querySelector('#value');
let winner_text = document.querySelector('#winner_text');
let clos = document.querySelector('#close');

let i = 0;
function start(cells) {
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            if (i % 2 == 0) {
                cell.textContent = 'X'
            } else {
                cell.textContent = 'O'
            }
            this.removeEventListener('click', step);
            if (isWinner(cells) == true) {
                winner.style.display = 'flex';
                winner_text.textContent = `Победитель ${this.textContent}`;
            } else if (i == 8) {
                winner.style.display = 'flex';
                winner_text.textContent = 'Ничья';
            };
            i++;
        })
        clos.addEventListener('click', function() {
            location.reload();
        })
    }
}

start(cells);

function isWinner(cells) {
    let combs = [
        [0, 1, 2], //0
        [3, 4, 5], //1
        [6, 7, 8], //2
        [0, 3, 6], //3
        [1, 4, 7], //4
        [2, 5, 8], //5
        [0, 4, 8], //6
        [2, 4, 6]  //7
    ]
    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent && cells[comb[1]].textContent ==
            cells[comb[2]].textContent && cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;

}



