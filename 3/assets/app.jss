


let burger = document.querySelector("div#hamburger");
let nav = document.querySelector("nav");
burger.addEventListener("click", showMenu);
function showMenu() {
    nav.classList.toggle("show");
}


