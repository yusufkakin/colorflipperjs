const colorlist = ["Blue", "Red", "Yellow", "Green"];

let buttonChooser = document.querySelector(".clickbutton");
let nameChooser = document.querySelector(".colorname");

buttonChooser.addEventListener("click", function () {
  let randomColor = colorRandomizer();

  document.querySelector(".main").style.backgroundColor =
    colorlist[randomColor];
  nameChooser.textContent = colorlist[randomColor];
});

// get random number between 0-4
let colorRandomizer = function () {
  return Math.floor(Math.random() * colorlist.length);
};
