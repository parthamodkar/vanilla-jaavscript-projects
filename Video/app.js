 const btn = document.querySelector('.switch-btn')
 const video = document.querySelector('.video-container')
 const preloader = document.querySelector('.preloader')

 window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader')
 })

 btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){ //if btn doesn't have 'slide' class then add 'slide' class
        btn.classList.add('slide')
        video.pause()
    }
    else{
        btn.classList.remove('slide')
        video.play()
    }
 })