let counter = 0;
const cells = document.querySelectorAll("#table td");
const title = document.querySelector(".title");
const btn = document.querySelector(".btn");
// const imgActive = document.querySelector("#td img");

// imgActive.addEventListener("click", (e) => {
//   if (e.target === 3) {
//     imgActive.classList.add("img-active");
//   }
// });

btn.addEventListener("click", startGame);

let totalX = 0;
let totalO = 0;
let totalDraw = 0;
let totalGame = 0;

const playerX = document.querySelector(".playerx");
const playerO = document.querySelector(".playero");
const draw = document.querySelector(".draw");
const total = document.querySelector(".total");

function isVictory() {
  let combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let combo of combos) {
    if (
      cells[combo[0]].innerHTML === cells[combo[1]].innerHTML &&
      cells[combo[1]].innerHTML === cells[combo[2]].innerHTML &&
      cells[combo[0]].innerHTML !== ""
    ) {
      return true;
    }
  }
  return false;
}

function tap(e) {
  if (counter % 2 === 0) {
    e.target.innerHTML =
      '<img src= "./images/cross-svg.svg" width=140"> <audio src="./music/melody1.mp3" autoplay preload="auto"></audio>';
    // imgActive.classList.add("img-active");
  } else {
    e.target.innerHTML =
      '<img src= "./images/zero-svg.svg" width=140"> <audio src="./music/melody1.mp3" autoplay preload="auto"></audio>';
  }

  if (isVictory()) {
    for (let cell of cells) {
      cell.removeEventListener("click", tap);
      // e.target.innerHTML =
      //   '<audio src="./music/winner.mp3" autoplay preload="auto"></audio>';
    }
    if (counter % 2 === 0) {
      title.innerHTML =
        'Player X winner! <audio src="./music/player0.mp3" autoplay preload="auto"></audio>';
      // title.innerHTML =
      //   '<audio src="./music/winner.mp3" autoplay preload="auto"></audio>';
      playerX.textContent = totalX += 1;
      // total += playerxx.innerText;
      // e.target.innerHTML =
      //   '<audio src="./music/winner.mp3" autoplay preload="auto"></audio>';
    } else {
      title.innerHTML =
        'Player O winner! <audio src="./music/player0.mp3" autoplay preload="auto"></audio>';
      playerO.textContent = totalO += 1;
    }
  } else if (counter === 8) {
    title.innerHTML =
      'Draw! <audio src="./music/draw1.mp3" autoplay preload="auto"></audio>';
    draw.textContent = totalDraw += 1;
  }

  // totalGame = totalX + totalO + totalDraw;
  total.textContent = totalX + totalO + totalDraw;

  counter++;
  e.target.removeEventListener("click", tap);
}

function startGame() {
  title.innerHTML =
    'Tic Tac Toe <audio src="./music/start.mp3" autoplay preload="auto"></audio>';
  counter = 0;

  for (let cell of cells) {
    cell.innerHTML = "";
    cell.addEventListener("click", tap);
  }
}

startGame();
