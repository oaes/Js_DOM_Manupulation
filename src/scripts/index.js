let btn = document.querySelector("#btn");
let p = document.querySelector("#para");
let para = false;

btn.addEventListener("click", function () {
  if (para) {
    (p.style.visibility = "hidden"), (para = false);
    btn.innerHTML = "show";
  } else {
    (p.style.visibility = "visible"), (para = true);
    btn.innerHTML = "hide";
  }
});
