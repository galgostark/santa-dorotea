$(document).ready(function($) {

	"use strict";

	// Configuración Global de Fancybox (CEEC 50, Galería y presentaciones)
	if ($.fancybox) {
		$.fancybox.defaults = $.extend(true, {}, $.fancybox.defaults, {
			loop: true,
			arrows: true,
			infobar: true,
			toolbar: true,
			buttons: [
				"slideShow",
				"zoom",
				"close"
			],
			slideShow: {
				autoStart: false,
				speed: 3500
			},
			idleTime: false,
			protect: false,
			animationEffect: "fade",
			transitionEffect: "slide",
			touch: {
				vertical: true,
				momentum: true
			},
			mobile: {
				arrows: true,
				toolbar: true,
				infobar: true,
				buttons: [
					"slideShow",
					"zoom",
					"close"
				],
				idleTime: false,
				clickContent: function() { return false; },
				clickSlide: "close"
			}
		});

		// Diccionario de textos para controles de Fancybox
		$.fancybox.defaults.i18n = $.fancybox.defaults.i18n || {};
		$.fancybox.defaults.i18n.es = {
			CLOSE: "Cerrar",
			NEXT: "Siguiente",
			PREV: "Anterior",
			ERROR: "El contenido solicitado no pudo ser cargado.<br/>Por favor, intente más tarde.",
			PLAY_START: "Iniciar presentación",
			PLAY_STOP: "Pausar presentación",
			FULL_SCREEN: "Pantalla completa",
			THUMBS: "Miniaturas",
			DOWNLOAD: "Descargar",
			SHARE: "Compartir",
			ZOOM: "Zoom"
		};
		$.fancybox.defaults.i18n.de = {
			CLOSE: "Schließen",
			NEXT: "Weiter",
			PREV: "Zurück",
			ERROR: "Die angeforderten Inhalte konnten nicht geladen werden.<br/>Bitte versuchen Sie es später noch einmal.",
			PLAY_START: "Diashow starten",
			PLAY_STOP: "Diashow anhalten",
			FULL_SCREEN: "Vollbild",
			THUMBS: "Vorschaubilder",
			DOWNLOAD: "Herunterladen",
			SHARE: "Teilen",
			ZOOM: "Vergrößern"
		};
		$.fancybox.defaults.i18n.fr = {
			CLOSE: "Fermer",
			NEXT: "Suivant",
			PREV: "Précédent",
			ERROR: "Le contenu demandé n'a pas pu être chargé.<br/>Veuillez réessayer plus tard.",
			PLAY_START: "Démarrer le diaporama",
			PLAY_STOP: "Mettre en pause le diaporama",
			FULL_SCREEN: "Plein écran",
			THUMBS: "Vignettes",
			DOWNLOAD: "Télécharger",
			SHARE: "Partager",
			ZOOM: "Zoom"
		};
		var currentLang = localStorage.getItem("preferred_lang") || "es";
		$.fancybox.defaults.lang = currentLang;
	}

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			stagePadding: 5,
			nav: false,
			navText: ['<span class="ion-md-arrow-back">', '<span class="ion-md-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

		$('.nonloop-block-13').owlCarousel({
	    center: false,
	    items: 1,
	    loop: false,
			stagePadding: 0,
	    margin: 20,
	    nav: true,
			navText: ['<span class="ion-md-arrow-back">', '<span class="ion-md-arrow-forward">'],
	    responsive:{
        600:{
        	margin: 20,
          items: 2
        },
        1000:{
        	margin: 20,
          items: 2
        },
        1200:{
        	margin: 20,
          items: 3
        }
	    }
		});

		$('.loop-block-31').owlCarousel({
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			margin: 0,
			nav: true,
			items: 1,
			autoplay: true,
			autoplayTimeout: 6000,
			autoplayHoverPause: true,
			stagePadding: 0,
			navText: ['<span class="ion-md-arrow-back">', '<span class="ion-md-arrow-forward">'],
			animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		});

		$('.nonloop-block-11').owlCarousel({
	    center: true,
	    items: 1,
	    loop: false,
			stagePadding: 0,
	    margin: 30,
	    nav: true,
			navText: ['<span class="ion-md-arrow-back">', '<span class="ion-md-arrow-forward">'],
	    responsive:{
        600:{
        	stagePadding: 0,
          items:1
        },
        800:{
        	stagePadding: 40,
          items:2
        },
        1000:{
        	stagePadding: 80,
          items:3
        }
	    }
		});

		$('.nonloop').owlCarousel({
	    center: true,
	    items:2,
	    loop:false,
	    margin:10,
	    nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
	    responsive:{
        600:{
          items:2
        }
	    }
		});
	};
	carousel();

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var counter = function() {
		
		$('.section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$(this.element).find('.ftco-number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();
	
	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();

});

