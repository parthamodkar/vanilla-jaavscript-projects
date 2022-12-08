// 1. classList - show/gets all classes
// 2. contains - checks class for specific class
// 3. add class
// 4. remove class
// 5. toggle class

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    // if(links.classList.contains('show-links')){  //if show-links class is there then remove from the list
    //     links.classList.remove('show-links')
    // }
    // else{
    //     links.classList.add('show-links')
    // }
    links.classList.toggle('show-links')
})