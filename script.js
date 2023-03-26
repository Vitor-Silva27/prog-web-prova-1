const links = document.querySelectorAll('.item-menu-navegacao a');
const menuMobile = document.querySelector('.menu-mobile');
function ativaLink(link) {
    const url = location.href;
    const href = link.href;

    if (url === href) {
        link.classList.add('ativo');
    }
}

menuMobile.addEventListener('click', function () {
    const menu = document.querySelector('.menu-navegacao');
    menu.classList.toggle('menu-ativo');
    menuMobile.classList.toggle('menu-mobile-ativo');
})

links.forEach(ativaLink);