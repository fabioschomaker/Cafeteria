const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 80)
});

let navbar = document.querySelector('.navlist');

document.querySelector('#icone-menu').onclick = () =>{
    navbar.classList.toggle('active');
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal ('.home-texto',{delay:300});

sr.reveal ('.sobre-img',{});
sr.reveal ('.btn, .sobre-texto',{delay:400});

sr.reveal ('.center-texto',{});
sr.reveal (' .btn, .box-produtos',{delay:400});

sr.reveal ('.box-clientes, .conainer-contato',{delay:400});



