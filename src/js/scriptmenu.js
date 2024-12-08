// const body = document.querySelector('body');

const menuButton = document.querySelector('.menu_button');
const menuCloseButton = document.querySelector('.nav_close');
const menu = document.querySelector('.nav');
const bodyK = document.querySelector('.body');

menuButton.addEventListener('click', function () {
	menu.classList.add('active');
	bodyK.classList.add('body--overflow_hidden');
});

menuCloseButton.addEventListener('click', function () {
	menu.classList.remove('active');
	bodyK.classList.remove('body--overflow_hidden');
});
