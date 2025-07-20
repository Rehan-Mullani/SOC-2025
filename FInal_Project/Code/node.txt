const grid = document.getElementById("grid");
const shuffleBtn = document.getElementById("shuffleBtn");

let tiles = [];

function renderTiles() {
  grid.innerHTML = "";
  tiles.forEach((num, index) => {
    const div = document.createElement("div");
    div.className = "tile" + (num === 0 ? " empty" : "");
    if (num !== 0) div.textContent = num;

    div.addEventListener("click", () => {
      const emptyIndex = tiles.indexOf(0);
      const isAdjacent =
        [1, -1, 4, -4].includes(index - emptyIndex) &&
        Math.abs(Math.floor(index / 4) - Math.floor(emptyIndex / 4)) <= 1;

      if (isAdjacent) {
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
        renderTiles();
        checkWin();
      }
    });

    grid.appendChild(div);
  });
}

function shuffleTiles() {
  // Generate a solvable shuffled array
  let arr;
  do {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0].sort(() => Math.random() - 0.5);
  } while (!isSolvable(arr) || isSolved(arr)); // retry if unsolvable or already solved
  tiles = arr;
  renderTiles();
}

function isSolved(arr) {
  return arr.every((val, idx) => val === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0][idx]);
}

function isSolvable(arr) {
  let invCount = 0;
  for (let i = 0; i < 15; i++) {
    for (let j = i + 1; j < 16; j++) {
      if (arr[i] && arr[j] && arr[i] > arr[j]) invCount++;
    }
  }
  return invCount % 2 === 0;
}

function checkWin() {
  if (isSolved(tiles)) {
    setTimeout(() => alert("🎉 You solved the puzzle!"), 100);
  }
}

shuffleBtn.addEventListener("click", shuffleTiles);


// ✅ Initial call to start the game
shuffleTiles();
