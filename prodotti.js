// Navbar

let navbar = document.querySelector('#navbar')
let navCustom = document.querySelector('.navCustom')




window.addEventListener('scroll', () =>{
    let scrolled = window.scrollY;

    if(scrolled > 0){
        navbar.classList.add('p-0')
        navCustom.classList.add('w-100')
    }else{
        navbar.classList.remove('p-0')
        navCustom.classList.remove('w-100')
    }
})

// Navbar end

// Search

fetch('./data.json').then((response) => response.json()).then((data) => {

    let containerCard = document.querySelector('#containerCard')

    function newCard(array) {
        containerCard.innerHTML = '';
        array.forEach(element => {
            let card = document.createElement('div')
            card.classList.add('col-12', 'col-md-4', 'd-flex', 'justify-content-center')
            card.innerHTML = `<div class="card rounded-5 my-5  position-relative">
            <img src="${element.img}" class="card-img-top rounded-5" alt="card">
            <div class="card-body">
            <h5 class="h3">${element.name}</h5>
            <p class="card-text color-primary">${element.category}</p>
            <p class="fs-4">${element.price}€</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`
    
            containerCard.appendChild(card)
        });
    }

    newCard(data)

    let wordInput = document.querySelectorAll('.search')
    
    
    function searchByWord(search){
        let filtrati = data.filter( (data)=> data.name.toUpperCase().includes(search.value.toUpperCase()));
        
        newCard(filtrati)
    }

    wordInput.forEach(element => {
        element.addEventListener('input', ()=>{
            searchByWord(element);
        });
        
    });

})

// Search end