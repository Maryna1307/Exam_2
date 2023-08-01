$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger,.menu').toggleClass('active');
        $('.header__burger span').toggleClass('hide');
        $('.header__burger::before').toggleClass('rotate');
    })
})




