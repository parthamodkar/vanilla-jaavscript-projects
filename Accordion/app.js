const btns = document.querySelectorAll('.question-btn')

// 1. Travesing Dom Method
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         //console.log(e.currentTarget.parentElement.parentElement)
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })

// 2. Using Selectors inside the element
const questions = document.querySelectorAll('.question')

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function(){

        // Remove other show-text when another is open
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text')
            }
        })

        question.classList.toggle('show-text')
    })
})