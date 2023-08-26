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

