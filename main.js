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
        console.log(counter);
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
            }, 5000)
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