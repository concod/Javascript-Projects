const txt = document.getElementById("counter");
const output = document.querySelector(".output");

let count = 0;

txt.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log(count);
  if (event.key === "Backspace" && count > 0) {
    count--;
  }
  if (event.key !== "Backspace") {
    if (
      ((e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 186 && e.keyCode <= 222)) &&
      count <= 20
    ) {
      count++;
      output.innerHTML = `You have typed ${count} characters.`;
    }
  }

  if (count > 20) {
    output.innerHTML = "No more characters allowed.";
    let str = txt.value;
    txt.value = str.substring(0, 10);
  }
});
