const links = document.querySelectorAll('.item-menu-navegacao a');

function ativaLink(link) {
    const url = location.href;
    const href = link.href;

    if (url === href) {
        link.classList.add('ativo');
    }
}

links.forEach(ativaLink);