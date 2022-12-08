const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function(e){
    //console.log(e.target.dataset.id)
    const id = e.target.dataset.id
    if(id){ //if "id" exists
        //remove "active class" from buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active')
        })  
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        }) 
        // Display 'Content' which has matching 'id'
        const element = document.getElementById(id)
        element.classList.add('active')
    }
})