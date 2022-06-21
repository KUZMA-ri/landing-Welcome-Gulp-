// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Splide from '@splidejs/splide';



document.addEventListener('DOMContentLoaded', () => {

	AOS.init();

	console.log ("hello world");
	let header = document.querySelector(".header");
	
	document.addEventListener("scroll", () => {
		if (document.documentElement.scrollTop > 1) {
		header.classList.add("header_has-bg");
		} else {
		header.classList.remove("header_has-bg");
		}
	});
	
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	// Accordion start----------------------------------------------
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	var acc = document.getElementsByClassName("accordion-button");
	var i;
	
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			/* Toggle between adding and removing the "active" class,
			to highlight the button that controls the panel */
			this.classList.toggle("active");
	
			/* Toggle between hiding and showing the active panel */
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	};
	// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	// Accordion end------------------------------------------------
	// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	// Scroll start-------------------------------------------------
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	(function () {
	
		const smoothScroll = function (targetEl, duration) {
			const headerElHeight =  document.querySelector('.header__nav').clientHeight;
			let target = document.querySelector(targetEl);
			let targetPosition = target.getBoundingClientRect().top - headerElHeight;
			let startPosition = window.pageYOffset;
			let startTime = null;
		
			const ease = function(t,b,c,d) {
				t /= d / 2;
				if (t < 1) return c / 2 * t * t + b;
				t--;
				return -c / 2 * (t * (t - 2) - 1) + b;
			};
		
			const animation = function(currentTime){
				if (startTime === null) startTime = currentTime;
				const timeElapsed = currentTime - startTime;
				const run = ease(timeElapsed, startPosition, targetPosition, duration);
				window.scrollTo(0,run);
				if (timeElapsed < duration) requestAnimationFrame(animation);
			};
			requestAnimationFrame(animation);
	
		};
	
		const scrollTo = function () {
			const links = document.querySelectorAll('.js-scroll');
			links.forEach(each => {
				each.addEventListener('click', function () {
					const currentTarget = this.getAttribute('href');
					smoothScroll(currentTarget, 1000);
				});
			});
		};
		scrollTo();
	}());
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Scroll end-------------------------------------------------------
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Slider start-----------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	new Splide( "#comments-slider", {
		type: "loop",
		gap: "40px",
		classes: {
			arrow : 'splide__arrow comments-slider__arrow',
		},
		pagination: false,
		breakpoints: {
			560: {
				arrows: false,
				pagination: true,	
				classes: {
					pagination: 'splide__pagination comments-slider__pagination',
				},
			},
	}
	} ).mount();


	new Splide( "#author-comments", {
		type: "loop",
		gap: "40px",
		classes: {
			arrow : 'splide__arrow comments-slider__arrow',
		},
		pagination: false,
		breakpoints: {
			560: {
				arrows: false,
				pagination: true,	
				classes: {
					pagination: 'splide__pagination comments-slider__pagination',
				},
			},
	}
	} ).mount();
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Slider end----------------------------------------------------------
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Mobile menu start--------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

headerBurger.addEventListener("click", function(event){
	headerBurger.classList.toggle("burger_closed");
	headerNav.classList.toggle("header__nav_opened");
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Mobile menu end
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<




})

