import "../styles/index.scss";


function $(selector){
    return document.querySelector(selector)
}

let btn = $("#open");
let colors = ["cyan", "tomato", "lime", "blue"];

let i = 0;

btn.addEventListener("click", function () {
  let h1 = $(".heading");
  h1.style.background = colors[i];

  if (i > colors.length) {
    i = 0;
  } else {
    i++;
  }
});

// basic styling
let p =$('.para')
p.style.color='tomato'
p.style.fontSize='1rem'
p.style.padding='5px'
