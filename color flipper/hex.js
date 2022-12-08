// Break down problem in fragments

// 1. Define Hex varible with values
// 2. define btn and color varible
// 3. on button click check console if it's working or not
// 4. declare get random function

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.querySelector("#btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let hexColor = "#"
    for(i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}