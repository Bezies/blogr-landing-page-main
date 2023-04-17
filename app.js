const scrollingButton = document.querySelectorAll(".scrolling-button");
const scrollingMenu = document.querySelectorAll(".scrolling-menu");

for (let i = 0; i < scrollingButton.length; i++) {
    scrollingButton[i].addEventListener("click", () => {
        scrollingMenu[i].classList.toggle("scrolling-menu");
        scrollingButton[i].classList.toggle("scrolling-button--on");
        scrollingButton[i].classList.toggle("links-arrow-down");
    })
}




// MOBILE MENU 

const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const menu = document.querySelector(".menu");

// OPEN 
hamburger.addEventListener("click", () => {
    menu.classList.add("menu--on");
    hamburger.classList.replace("hamburger", "hamburger--off");
    cross.classList.replace("cross", "cross--on");
})


// CLOSE 
cross.addEventListener("click", ()=> {
    menu.classList.remove("menu--on");
    hamburger.classList.replace("hamburger--off", "hamburger");
    cross.classList.replace("cross--on", "cross");
})