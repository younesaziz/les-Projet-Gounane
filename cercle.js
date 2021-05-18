var circle = document.querySelector(".circle");

function changeColor(event) {
    circle.classList.toggle("colorate");

}
circle.onmouseover = changeColor;
circle.onmouseleave = changeColor;

function Xcordinatecircle(event) {
    return document.body.clientWidth / 2 - event.clientX;

}

function Ycordinatecircle(event) {
    return document.body.clientHeight / 2 - event.clientY;

}

document.addEventListener('mousemove', function(event) {
    circle.style.cssText = "left: " + Xcordinatecircle(event) + "px; top: " + Ycordinatecircle(event) + "px;";
});