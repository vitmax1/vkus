const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    slidesPerView: 1,
    spaceBetween: 25,

    // Navigation arrows
    navigation: {
        nextEl: ".next-slide",
    },
    breakpoints: {
 
        // when window width is >= 480px
        640: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 4,
        },
    },
});
