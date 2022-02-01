// инициализация Swiper
new Swiper('.image-slider', {
    // пагинация
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        infinity: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
    },
});