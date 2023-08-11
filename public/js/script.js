const menuButton = document.querySelector("#mobileopen");
const menuButtoncls = document.querySelector("#mobilecls");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", function(e){
    menu.classList.remove("hidden");
    menuButton.classList.add("hidden")
    menuButtoncls.classList.remove("hidden")
});
menuButtoncls.addEventListener("click", function(e){
    menu.classList.add("hidden");
    menuButton.classList.remove("hidden")
    menuButtoncls.classList.add("hidden")
});