// Меню
const menuBody = document.querySelector('.menu');
const iconMenu = document.querySelector('.menu__icon');


iconMenu.addEventListener('click', function (e) {
	if (iconMenu){
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
		document.body.classList.toggle('lock');
	} 
});


// Анимация появления блоков ScrollReveal
const sr = ScrollReveal({
	distance: '50px',
	duration: 2500,
	// reset: true,
})
sr.reveal(`.home__logo, .home__subtitle, .home__button, .footer__body, .menu-footer__column, .footer__main`, {
	origin: 'top',
	interval: 100,
});
sr.reveal(`.block-title, .home__title`, {
	distance: '0px',
	scale: 0.7
});
sr.reveal(`.capabilities__box`, {
	distance: '0px',
	opacity: 0.3
});
sr.reveal(`.story__descr, .signup__title`, {
	origin: 'left',
});
sr.reveal(`.story__card, .signup__form`, {
	origin: 'right',
	interval: 300
});
sr.reveal(`.capabilities__card`, {
	origin: 'top',
	interval: 200
});
sr.reveal(`.build__title`, {
	origin: 'top',
	interval: 200
});
sr.reveal(`.build__link `, {
	origin: 'left',
});

// height 100vh
const changeHeight = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};
changeHeight();
window.addEventListener('resize', () => {
	changeHeight();
});

// BTN HOVER
const btn1 = document.querySelector('.general-link span');
btn1.onmousemove = function(e){
	const x = e.pageX - btn1.offsetLeft;
	const y = e.pageY - btn1.offsetTop;
	btn1.style.setProperty('--x', x + 'px');
	btn1.style.setProperty('--y', y + 'px');
}