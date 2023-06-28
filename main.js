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