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
	slidesPerView: 5,
	loop: true,

});

const swiperOne = new Swiper('.comments_content', {
	initialSlide: 2,
	thumbs: {
		swiper: swiperTwo,
	},
});

