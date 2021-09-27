let colors = document.querySelector("span");
const arrayColors = ["Blue", "Green", "Red", "Yellow", "DarkSlateGray", "Violet", "Orange", "Brown", "Grey", "Magenta"];


function clickme() {
  let randomColor = Math.floor(Math.random() * 10);
  if (randomColor === 0) {
    document.body.style.backgroundColor = arrayColors[0];
    colors.innerText = arrayColors[0];
  }
  if (randomColor === 1) {
    document.body.style.backgroundColor = arrayColors[1];
    colors.innerText = arrayColors[1];
  }
  if (randomColor === 2) {
    document.body.style.backgroundColor = arrayColors[2];
    colors.innerText = arrayColors[2];
  }
  if (randomColor === 3) {
    document.body.style.backgroundColor = arrayColors[3];
    colors.innerText = arrayColors[3];
  }
  if (randomColor === 4) {
    document.body.style.backgroundColor = arrayColors[4];
    colors.innerText = arrayColors[4];
  }
  if (randomColor === 5) {
    document.body.style.backgroundColor = arrayColors[5];
    colors.innerText = arrayColors[5];
  }
  if (randomColor === 6) {
    document.body.style.backgroundColor = arrayColors[6];
    colors.innerText = arrayColors[6];
  }
  if (randomColor === 7) {
    document.body.style.backgroundColor = arrayColors[7];
    colors.innerText = arrayColors[7];
  }
  if (randomColor === 8) {
    document.body.style.backgroundColor = arrayColors[8];
    colors.innerText = arrayColors[8];
  }
  if (randomColor === 9) {
    document.body.style.backgroundColor = arrayColors[9];
    colors.innerText = arrayColors[9];
  }


}