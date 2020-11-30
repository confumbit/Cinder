// for pallarax
const pallarax = document.querySelectorAll(".pallarax");

window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;

    pallarax.forEach(element => {
        let speed = element.dataset.speed;
        let name = element.dataset.name;
        if (name == 'abstract-1') {
        element.style.transform = `translate(${scroll * speed}px)`;
        } 
        else {
            element.style.transform = `translate(0, ${scroll * speed}px)`;
        }
    })
})

//navbar
const navbg = document.querySelector('nav');
const links = document.querySelectorAll('#tabs');
const logo = document.querySelector('nav img');

function openNav(e) {
    navbg.style.backgroundColor = 'black';
    links.forEach(function (link) {
        link.classList.toggle('fade');
    })
    navbg.classList.toggle('open');
    e.target.removeEventListener('click', openNav);
    e.target.addEventListener('click', closeNav);
}

function closeNav(e) {
    navbg.style.backgroundColor = 'transparent';
    links.forEach( link => {
        link.classList.toggle('fade');
    })
    navbg.classList.toggle('open');
    e.target.removeEventListener('click', closeNav);
    e.target.addEventListener('click', openNav);
}

logo.addEventListener('click', openNav);

links[3].addEventListener('click', function () {
    document.querySelector('#email').focus();
})