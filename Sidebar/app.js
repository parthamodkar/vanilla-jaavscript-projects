const navToggle = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn') 
const sidebar = document.querySelector('.sidebar')

navToggle.addEventListener('click', function(){
    //sidebar.classList.toggle('show-sidebar')
    sidebar.classList.add('show-sidebar');
})

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
})