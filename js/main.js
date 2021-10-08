
const btn = document.getElementById("btn");
const sidebar = document.querySelector(".sidebar")
const searchBtn = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
    menuBtnChange();
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
    menuBtnChange();
}

function menuBtnChange() {
    if(sidebar.classList.contains("active")){
      btn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the icons class
    }else {
      btn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the icons class
    }
}