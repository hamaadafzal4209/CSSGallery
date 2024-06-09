let navMiddle = document.querySelector(".nav-middle")
let navRight = document.querySelector(".nav-right")
let menu = document.querySelector(".menu")
let navBar = document.querySelector("nav")

menu.addEventListener("click",function(){
    navMiddle.classList.toggle("height")
    navRight.classList.toggle("height")
    navBar.classList.toggle("color")
})


