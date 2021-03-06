$(document).ready(function () {
    $('.slider-list').slick({
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
        prevArrow: $('.slider-arrow__left'),
        nextArrow: $('.slider-arrow__right'),
        fade: true,
    });
    $('.clients-comment').slick({
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
        prevArrow: $('.clients-arrow__left'),
        nextArrow: $('.clients-arrow__right'),
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (this.getAttribute('href') != "#") {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            };
        });
    });

});