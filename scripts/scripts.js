(function($) {
    "use strict";
    
    /* COUNTDOWN */
	$("#countdown").countdown({
		date: "7 December 2013 15:00:00", // Put your date here
		format: "on"
	});
	
	/* BACKGROUND SLIDER */
  /*
    $.backstretch([
        'images/slide/01.jpg',
        'images/slide/02.jpg'
    ], {duration: 5000, fade: 750});
  */
//	$.backstretch('http://placehold.it/2000x2000'); // For single image use this instead
	
	/* SMOOTH SCROLL */
    $('.smooth').click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 750);
    });
    
    /* TOOLTIPS */
    $('.tool-tip').tooltip();
    
    /* CONTACT FORM */
	$('#contact-form').ketchup().submit(function() {
        if ($(this).ketchup('isValid')) {
			$('#contact-form-submit').button('loading');
            var action = $(this).attr('action');
            $.ajax({
                type: "POST",
                url : action,
                data: {
                    contactname: $('#contact-name').val(),
                    contactemail: $('#contact-email').val(),
                    contactwebsite: $('#contact-website').val(),
                    contactmessage: $('#contact-message').val()
                },
                success: function() {
					$('#contact-form-submit').button('reset');
                    $('#contact-error').fadeOut();
                    $('#contact-success').fadeOut();
                    $('#contact-success').html('Success! Thanks for contacting us!').fadeIn();
                },
                error: function() {
					$('#contact-form-submit').button('reset');
                    $('#contact-error').fadeOut();
                    $('#contact-success').fadeOut();
                    $('#contact-error').html('Sorry, an error occurred.').fadeIn();
                }
            });
        }
        return false;
    });
	
	/* NEWSLETTER FORM */
	$('#newsletter-form').ketchup().submit(function() {
		if ($(this).ketchup('isValid')) {
			$('#newsletter-submit').button('loading');
			var action = $(this).attr('action');
			$.ajax({
				url: action,
				type: 'POST',
				data: {
					newsletter_email: $('#newsletter-email').val()
				},
				success: function(data) {
					$('#newsletter-submit').button('reset');
                    $('#newsletter-error').fadeOut();
                    $('#newsletter-success').fadeOut();
                    $('#newsletter-success').html(data).fadeIn();
                },
                error: function() {
					$('#newsletter-submit').button('reset');
                    $('#newsletter-error').fadeOut();
                    $('#newsletter-success').fadeOut();
                    $('#newsletter-error').html('Sorry, an error occurred.').fadeIn();
                }
			});
		}
		return false;
	});
    
    /* ANIMATIONS */
    jQuery('.logo').bind('inview', function (event, visible) {
		if (visible === true) {
			jQuery(this).addClass('animated fadeInDown');
		}
	});
	jQuery('.countdown li').bind('inview', function (event, visible) {
		if (visible === true) {
			jQuery(this).addClass('animated fadeInUp');
		}
	});
	jQuery('.smooth').bind('inview', function (event, visible) {
		if (visible === true) {
			jQuery(this).addClass('animated bounceIn');
		}
	});
	jQuery('.heading').bind('inview', function (event, visible) {
		if (visible === true) {
			jQuery(this).addClass('animated fadeInUp');
		}
	});
	jQuery('.about-item').bind('inview', function (event, visible) {
		if (visible === true) {
			jQuery(this).addClass('animated fadeInUp');
		}
	});
	jQuery('#newsletter-form').bind('inview', function (event, visible) {
		if (visible === true) {
			jQuery(this).addClass('animated bounceIn');
		}
	});
	jQuery('.contact-infos').bind('inview', function (event, visible) {
		if (visible === true) {
			jQuery(this).addClass('animated fadeInLeft');
		}
	});
	jQuery('#contact-form').bind('inview', function (event, visible) {
		if (visible === true) {
			jQuery(this).addClass('animated fadeInRight');
		}
	});
	jQuery('.social-icon').bind('inview', function (event, visible) {
		if (visible === true) {
			jQuery(this).addClass('animated bounceIn');
		}
	});
    
})(jQuery);