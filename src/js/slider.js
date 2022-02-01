new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        loop: true,
        loopedSlides: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    },
});