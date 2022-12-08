// 1. Make varibles for buttons and slides
// 2. Using forEach function using (index * 100)% move slides to the left dynamically
// 3. Add Counter variable and set to '0'
// 4. Perform function on next and previous button add 'counter'
// 5. Setup a carousel function and add translate value to the slides
// 6. If slides is greater than length than make counter === 0
// 7. If slides.length - 1 than

const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

// Using css translate we will check index of slide and translate 100% to the left
slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
})

let counter  = 0
nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});
  
prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});

function carousel(){
    // working with slides
    // if(counter === slides.length){
    //     counter = 0
    // }
    // if(counter < 0){
    //     counter = slides.length - 1
    // }

    // working with buttons
    if (counter < 0) {
        counter = 0;
      }
      if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
      } else {
        nextBtn.style.display = "none";
      }
      if (counter > 0) {
        prevBtn.style.display = "block";
      } else {
        prevBtn.style.display = "none";
      }
      slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
      });
}

 // Hide prev on load
 prevBtn.style.display = 'none'




 