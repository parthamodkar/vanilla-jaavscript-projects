// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

/********** Set Date ************/

const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

/********** Close Links ************/

const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
const navbar = document.querySelector('#nav')
const topLinks = document.querySelector('.top-link')

navToggle.addEventListener('click', function(){
  //linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height

  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
  }
  else{
    linksContainer.style.height = 0
  }
})

/********** Fixed Navbar ************/

window.addEventListener('scroll', function(){
  //console.log(this.pageYOffset)
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height

  if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav')
  }
  else{
    navbar.classList.remove('fixed-nav')
  }

  if(scrollHeight > 500){
    topLinks.classList.add('show-link')
  }
  else{
    topLinks.classList.remove('show-link')
  }
})


/********** Smooth Scroll ************/

const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault()
    // Navigate to specific section
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav')
    
    let position = element.offsetTop - navHeight

    if(!fixedNav){  //This means if navbar is not fixed which means when it is static
      position = position - navHeight
    }
    if(navHeight > 82){
      position = position + containerHeight
    }
    
    window.scrollTo({
      top: position,
      left: 0,
    })
    linksContainer.style.height = 0 // close menu when click in mobile view
  })
})