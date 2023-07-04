// Navbar

let navbar = document.querySelector('#navbar')
let navCustom = document.querySelector('.navCustom')
let filtri = document.querySelector('#filtri')




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
    
    let searched = '';
    let finalid = 'All'

    function searchByWord(array){
        let filtrati = array.filter( (annuncio)=> annuncio.name.toUpperCase().includes(searched.toUpperCase()));
        
        return filtrati
    }

    wordInput.forEach(element => {
        element.addEventListener('input', ()=>{
            searched = element.value
            
            globalFilter(finalid)
        });
    });
    
    // Search end

    // Filter Category

    function categorie() {
        let categorie = data.map((element) => element.category)
        let categoria = Array.from(new Set(categorie))
        
        categoria.forEach(el => {
            let ul = document.createElement('ul')
            ul.innerHTML = `
            <li class="dropdown-item" id="${el}">${el}</li>
            `
            filtri.appendChild(ul)
        });
    }
    
    categorie()
    
    let itemsDropdown = document.querySelectorAll('.dropdown-item') 
    
    function filtraCategorie(id , array) {

        if(id == 'All'){
            return array;
           } else{
               let filtered = array.filter( (annuncio)=> annuncio.category == id );
  
               return filtered;
           }
    }

    function globalFilter(id){
        let filteredByCategory = filtraCategorie(id, data);
        let filteredByWord = searchByWord(filteredByCategory);
        newCard(filteredByWord);
    }

    let filtroSelezionato = document.querySelector('#filtroSelezionato')

    itemsDropdown.forEach( (el) => {
        el.addEventListener('click' , () => {
            filtroSelezionato.innerHTML = el.id
            finalid = el.id
            globalFilter(finalid)
        })
    })

    // // Filter Category end

})