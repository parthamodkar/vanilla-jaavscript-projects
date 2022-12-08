// Set initial count
let count = 0

//select value and buttons
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){ //e used for which button is clicked
        const btnstyle = e.currentTarget.classList //btnstyle is  for using specific btn class
        if(btnstyle.contains('decrease')){ //if varibale contains specific class then do " -- "
            count--
        }
        else if(btnstyle.contains('increase')){
            count++
        }
        else{
            count = 0
        }
        //to change color
        if(count > 0){
            value.style.color = 'green'
        }
        if(count < 0){
            value.style.color = 'red'
        }
        if(count === 0){
            value.style.color = 'black'
        }
        value.textContent = count
    })
})

 