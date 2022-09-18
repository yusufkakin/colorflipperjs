let count = 0;

let counterNumber = document.querySelector(".counter");
let buttons = document.querySelectorAll(".btn");


buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains ("decrease")) {
      count--;
    } else if (styles.contains ("increase")) {
      count++;
    } else {
        count = 0;
    }
    counterNumber.textContent = count;
  });
});
