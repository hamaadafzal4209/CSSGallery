let menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "450px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}