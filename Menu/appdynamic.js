// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')
// const filterBtns = document.querySelectorAll('.filter-btn')

//load menu items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu)
    // reduce functn have extra parameters and also need to have initial value (here values, item are two parameteres) 
    // to get unique category from 
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values // for every reduce iteration must need to return values othewrwise functionality not work
    },['all'])
    //console.log(categories)

    /******** Meaning of Above code 
    if(!value.includes (if value does not includes "item.category" which is category on each menu array then values which is array of "all" => push item.category ))
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values // for every reduce iteration must need to return values othewrwise functionality not work
    },['all']) 

    *********/

    // Create Dynamic Category Buttons
    const categoryBtns = categories.map(function(category){
        return `
        <button class="filter-btn" type="button" data-id=${category}>${category}</button>
        `
    }).join('')
    btnContainer.innerHTML = categoryBtns //To add dynamic buttons inside "btn-container"
    const filterBtns = document.querySelectorAll('.filter-btn')
    //filter items (moved here to create dynamic)
    // now this works because we have added btns dynamically above "const filterBtns"
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            console.log(e.currentTarget.dataset.id)
            const category = e.currentTarget.dataset.id
            //Filter menu array based on category (here parameter is mandatory in each function, map, filter and forEach function)
            const menuCategory = menu.filter(function(menuItem){
                //console.log(menuItem.category)
                if(menuItem.category === category){
                    return menuItem
                }
            })
            //console.log(menuCategory)
            if(category === 'all'){
                displayMenuItems(menu)
            }
            else{
                displayMenuItems(menuCategory)
            }
        })
    })
    //console.log(categoryBtns)
})

// Function to display menu items
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        //console.log(item)
        return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
            <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
            </div>
        </article>`;
    })
    displayMenu = displayMenu.join("") //to join menu-item in section-center & add ("") to avoid comma in code
    sectionCenter.innerHTML = displayMenu //this will dynamically show data in "Section Center"
}