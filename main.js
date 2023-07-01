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

// Section Numeri

let primoNumero = document.querySelector('#primoNumero')
let secondoNumero = document.querySelector('#secondoNumero')

function createInterval(total, element, timing) {
    
    let counter = 0
    let interval = setInterval(() =>{
        if (counter < total) {
            counter++
            element.innerHTML = counter
        }else{
            clearInterval(interval)
        }
    }, timing)
}


let check = true

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && check) {
            createInterval(1500, primoNumero, 1)
            createInterval(2500, secondoNumero, 1)
            check = false
            setTimeout(() => {
                check = true
            }, 17000)
        }
    });
})

observer.observe(primoNumero)

// Section Numeri end

// Section Carousel

var swiper = new Swiper('.mySwiper', {
    // Optional parameters  
    loop: true,
    effect: "fade",
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
  });

// Articoli

let rowArticolo = document.querySelector('#rowArticolo')

let newArticle = ['primo_articolo', 'secondo_articolo', 'terzo_articolo']


newArticle.forEach(el => {
    el <= el.length
    let article = document.createElement('div')

    article.classList.add('col-12', 'col-md-3')
        
    article.innerHTML = `
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, totam! Omnis earum enim iste, possimus fuga facilis nemo eveniet corporis, sit pariatur maxime nihil eos eaque laboriosam, quo recusandae exercitationem!</p>
    `
    
    rowArticolo.appendChild(article)
})

// Articoli end

// Section Carousel end

// Section Card
let containerCard = document.querySelector('#containerCard')

let elementCard = [
    {titolo: 'Prodotto', descrizione: `Some quick example text to build on the card title and make up the bulk of the card's content.`, immagineProdotto: './media/card1.jpeg'
}]

function newCard(title, desciption, imgProduct) {
    elementCard.push({titolo: title, descrizione: desciption, immagineProdotto: imgProduct})
}
let display

function newElementCard() {

    elementCard.forEach(element => {
        let card = document.createElement('div')
        
        card.classList.add('col-12', 'col-md-4', 'd-flex', 'justify-content-center')
        
        card.innerHTML = `<div class="card rounded-5 my-5  position-relative">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger spinner-grow w-25 fs-5" id'newLabel' role="status">
        New
      </span>
        <img src="${element.immagineProdotto}" class="card-img-top rounded-5" alt="card">
        <div class="card-body">
        <h5 class="h3">${element.titolo}</h5>
        <p class="card-text color-primary">${element.descrizione}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`

        containerCard.appendChild(card)
    });
}

newCard('Prodotto1','prova Prodotto 1','./media/card2.jpeg')
newCard('Prodotto2','prova Prodotto 2','./media/card3.jpeg')
newCard('Prodotto3','prova Prodotto 3','./media/card4.jpeg')
newCard('Prodotto4','prova Prodotto 4','./media/card5.jpeg')

newElementCard()

let newProductTitle
let newProductDescription
let newProductImg

addProduct.addEventListener('click', () => {
    newProductTitle = nomeProdotto.value
    newProductDescription = descrizioneProdotto.value
    newProductImg = immagineProdotto.value
    newCard(newProductTitle, newProductDescription, newProductImg)
    containerCard.innerHTML = ''
    containerCard.appendChild(buttonAdd)
    newElementCard()
})

let buttonAdd = document.querySelector('#containerButton')

// Section Card end