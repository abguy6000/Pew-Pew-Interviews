let wel = document.getElementById("wel");
let i = 0;

while (i < 50) {
  let randomTop = Math.floor(Math.random() * window.innerHeight) + "px";
  let randomLeft = Math.floor(Math.random() * window.innerWidth) + "px";
  wel.style.top = randomTop;
  wel.style.left = randomLeft;
  i++;
}
