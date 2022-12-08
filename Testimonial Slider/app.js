// Define Array of person details
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        testimonial: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Software Engineer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        testimonial: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        testimonial: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        testimonial: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    }
]

// Define Varibles
const name = document.querySelector("#author")
const img = document.querySelector("#person-img")
const job = document.querySelector("#job")
const text = document.querySelector("#info")

// Define Varibles for buttons
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// Define currentstate of Item
let currentItem = 0

// load initial Item on window load and check if it's working or not
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem)
    // console.log("content loaded")
    // const item = reviews[currentItem]
    // img.src = item.img
    // author.textContent = item.name
    // job.textContent = item.job
    // info.textContent = item.testimonial
})

// show person based on item
function showPerson() { // showPerson(person)
    const item = reviews[currentItem] //reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.testimonial
}

nextBtn.addEventListener("click", function(){
    currentItem++
    if(currentItem > reviews.length - 1){ // This means if review length is bigger than 4 then do minus 1
        currentItem = 0
    }
    showPerson(currentItem)
})

prevBtn.addEventListener("click", function(){
    currentItem--
    if(currentItem < 0){
       currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})