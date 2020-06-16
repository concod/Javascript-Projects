input = document.querySelector(".input");
keyCode = document.querySelector(".keycode");
code = document.querySelector(".code");

input.addEventListener("keyup", (e) => {
  input.value = "";
});

input.addEventListener("keydown", value);
function value(e) {
  keyCode.innerHTML = `${e.keyCode}`;
  code.innerHTML = `${e.code}`;
}

window.addEventListener("click", () => {
  input.focus();
});
