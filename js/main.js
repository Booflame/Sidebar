const btn = document.getElementById("btn");
const sidebar = document.querySelector(".sidebar")
const searchBtn = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}

console.log(btn);