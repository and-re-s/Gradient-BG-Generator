let css = document.querySelector("#style");
let color1 = document.querySelector("input[name='color1']");
let color2 = document.querySelector("input[name='color2']");
let body = document.querySelector("body");

function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.innerText = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);