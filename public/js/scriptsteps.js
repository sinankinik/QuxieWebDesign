// Divs
const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const forth = document.getElementById("forth")
const fifth = document.getElementById("fifth")
// Buttons
const firstButton = document.getElementById("firstButton")
const secondButton = document.getElementById("secondButton")
const thirdButton = document.getElementById("thirdButton")
const forthButton = document.getElementById("forthButton")
const fifthButton = document.getElementById("fifthButton")

firstButton.addEventListener("click", function(e){
    first.classList.remove("grid")
    first.classList.add("hidden")
    second.classList.remove("hidden")
    second.classList.add("grid")
})
secondButton.addEventListener("click", function(e){
    second.classList.remove("grid")
    second.classList.add("hidden")
    third.classList.remove("hidden")
    third.classList.add("grid")
})
third.addEventListener("click", function(e){
    third.classList.remove("grid")
    third.classList.add("hidden")
    forth.classList.remove("hidden")
    forth.classList.add("grid")
})
forthButton.addEventListener("click", function(e){
    forth.classList.remove("grid")
    forth.classList.add("hidden")
    fifth.classList.remove("hidden")
    fifth.classList.add("grid")
})


