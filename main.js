const container = document.querySelector(".container");
const header = document.querySelector("h1");

if (localStorage.headColor) {
  header.style.color = localStorage.headColor;
}

// Math.floor(Math.random() * 16)
let letters = "0123456789ABCDEF";

randomColor();
function randomColor() {
  for (let i = 0; i < 16; i++) {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    let div = document.createElement("div");
    div.classList.add("color");
    container.appendChild(div);
    div.appendChild(document.createTextNode(color));
    div.style.backgroundColor = `${color}`;
  }
}
let colors = document.querySelectorAll(".color");

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    header.style.color = `${e.target.innerText}`;
    localStorage.setItem("headColor", e.target.innerText);
  });
});
