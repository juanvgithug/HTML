(function ($) {
	'use strict';

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	$(window).on('load', function () {
		$('#preloader').fadeOut('slow', function () {
			$(this).remove();
		});
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */
	$('.play-icon i').click(function () {
		var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
		$(this).replaceWith(video);
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.portfolio-filter button').on('click', function () {
			$('.portfolio-filter button').removeClass('active');
			$(this).addClass('active');
		});
	});

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	//Init the slider
	$('.testimonial-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	/* ========================================================================= */
	/*	Clients Slider Carousel
	/* =========================================================================  */

	// clients logo slider
	$('.clients-logo-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */

	$('#contact-form').validate({
		rules: {
			name: {
				required: true,
				minlength: 4
			},
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true
			},
			message: {
				required: true
			}
		},
		messages: {
			name: {
				required: 'Por favor ingrese su nombre ',
				minlength: 'Su nombre debe tener al menos 2 caracteres'
			},
			email: {
				required: 'Por favor ingrese su e-mail'
			},
			subject: {
				required: 'El título no puede estar vacío',
				minlength: 'Su título debe tener al menos 2 caracteres'
			},
			message: {
				required: 'El mensaje no puede estar vacío',
				minlength: 'Su mensaje debe tener al menos 2 caracteres'
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: 'POST',
				data: $(form).serialize(),
				url: 'sendmail.php',
				success: function () {
					$('#contact-form #success').fadeIn();
				},
				error: function () {
					$('#contact-form #error').fadeIn();
				}
			});
		}
	});



	function loadMap() {
		console.log("loadMap BEGIN");
		var iframe = document.createElement('iframe');
		iframe.src = 'https://maps.google.com/maps?q=maipu%201210&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed';
		iframe.setAttribute("style", "height:100%;width:100%;frameborder='0';scrolling='no';marginheight='0';marginwidth='0';");
		document.getElementById("map").appendChild(iframe);
	}

	$(document).ready(function () {
		// Run code
		if (1==2) { loadMap(); }//  --> TBR: Not working on some browswers, CORS.
	});



})(jQuery);