const heroSwiper = document.querySelector(".hero__swiper");
const reviewsSwiper = document.querySelector(".reviews__swiper");



if (heroSwiper) {
  const swiper = new Swiper(heroSwiper, {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 800,
    loop: true,

    navigation: {
      nextEl: ".hero__swiper-button-left",
      prevEl: ".hero__swiper-button-right",
    },
  });
}


if (reviewsSwiper) {
  const swiper = new Swiper(reviewsSwiper, {
    slidesPerView: "auto",
    spaceBetween: 40,
    speed: 800,
    loop: true,

    navigation: {
      nextEl: ".reviews__swiper-button-next",
      prevEl: ".reviews__swiper-button-prev",
    },
  });
}
