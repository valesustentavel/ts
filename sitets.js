(function() {
    const menu = document.querySelector('.menu-0');

    menu.onclick = () => {
        menu.classList.toggle('open');
    }
}) ();


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
    }
}

$('.carousel').carousel({
    interval: 100
})