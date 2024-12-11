const swiper = new Swiper('.trust_pic_swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	centeredSlides: true,
	centeredSlides: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
});

const swiperTwo = new Swiper('.comments_nav', {
	// slidesPerView: 5,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	breakpoints: {
        580: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      },
});

const swiperOne = new Swiper('.comments_content', {
	initialSlide: 2,
	thumbs: {
		swiper: swiperTwo,
	},
});
