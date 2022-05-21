let css = document.querySelector("#style");
let color1 = document.querySelector("input[name='color1']");
let color2 = document.querySelector("input[name='color2']");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");

function randomGradient() {
    let randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    randomColor1.length === 6 ? randomColor1 = randomColor1 + Math.floor(Math.random()*10) : 0;
    randomColor1.length === 5 ? randomColor1 = randomColor1 + Math.floor(Math.random()*100) : 0;
    randomColor1.length === 4 ? randomColor1 = randomColor1 + Math.floor(Math.random()*1000) : 0;
    let randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    randomColor2.length === 6 ? randomColor2 = randomColor2 + Math.floor(Math.random()*10) : 0;
    randomColor2.length === 5 ? randomColor2 = randomColor2 + Math.floor(Math.random()*100) : 0;
    randomColor2.length === 4 ? randomColor2 = randomColor2 + Math.floor(Math.random()*1000) : 0;
    h1.style.background = `linear-gradient(to right, ${randomColor2}, ${randomColor1})`
    h1.style.webkitBackgroundClip = "text";
    h1.style.webkitTextFillColor = "transparent";
    body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
    color1.value = randomColor1;
    color2.value = randomColor2;
    css.innerText = body.style.background;
}

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

window.onload = randomGradient();
