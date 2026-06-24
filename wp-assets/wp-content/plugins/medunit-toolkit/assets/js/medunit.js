jQuery(document).ready(function($) {
    if(typeof testimonial_settings !== "undefined"){
        
        var $testimonialspace = 30;
        var $testimonialspace_laptop = 20, $testimonialspace_tablet = 15, $testimonialspace_mobile = 10;
        
        
        if(typeof testimonial_settings['medunit_testimonial_space'] !== "undefined" || testimonial_settings['medunit_testimonial_space'] != ""){
            $testimonialspace = testimonial_settings['medunit_testimonial_space']['size']; 
        }
        if(typeof testimonial_settings['medunit_testimonial_space_laptop'] !== "undefined"){
            $testimonialspace_laptop = testimonial_settings['medunit_testimonial_space_laptop']['size'];
        }
        if(typeof testimonial_settings['medunit_testimonial_space_tablet'] !== "undefined"){
            $testimonialspace_tablet = testimonial_settings['medunit_testimonial_space_tablet']['size'];
        }
        if(typeof testimonial_settings['medunit_testimonial_space_mobile'] !== "undefined"){
            $testimonialspace_mobile = testimonial_settings['medunit_testimonial_space_mobile']['size'];
        }

        if(typeof testimonial_settings !== "undefined"){
            let dots = testimonial_settings['medunit_show_dots'];
            let nav = testimonial_settings['medunit_show_nav'];
        jQuery('#immersive').owlCarousel({
            margin:$testimonialspace,
            responsiveClass:true,
            loop: true,
            nav:(nav=='true')?true:false,
            items:testimonial_settings['medunit_slides_to_show'],
            dots: (dots=='true')?true:false,
            responsive:{
                0:{
                    items:testimonial_settings['medunit_slides_to_show_mobile'],
                    nav: (nav=='true')?true:false,
                    margin:$testimonialspace_mobile,
                    dots: (dots=='true')?true:false,
                },
                768:{
                    items:testimonial_settings['medunit_slides_to_show_tablet'],
                    nav: (nav=='true')?true:false,
                    margin:$testimonialspace_tablet,
                    dots: (dots=='true')?true:false,
                },
                1025:{
                    items:testimonial_settings['medunit_slides_to_show_laptop'],
                    nav: (nav=='true')?true:false,
                    margin:$testimonialspace_laptop,
                    dots: (dots=='true')?true:false,
                },
                1367:{
                    items:testimonial_settings['medunit_slides_to_show'],
                    nav: (nav=='true')?true:false,
                    margin:$testimonialspace,
                    dots: (dots=='true')?true:false,
                }
            }
            
        });
        }
    }
    jQuery('.owl-carouselfour').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                dotsEach: 0,
                items: 1,
                margin: 15
            },
            600: {
                dotsEach: 1,
                items: 2,
                margin: 15
            },
            700: {
                dotsEach: 1,
                items: 2,
                margin: 15
            },
            1000: {
                dotsEach: 1,
                items: 3
            }
        }
    })  
    jQuery('.blog-section-style-2').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                dotsEach: 0,
                items: 1,
                margin: 15
            },
            600: {
                dotsEach: 1,
                items: 2,
                margin: 15
            },
            700: {
                dotsEach: 1,
                items: 2,
                margin: 15
            },
            1000: {
                dotsEach: 1,
                items: 3
            }
        }
    }) 
    jQuery('.owl-carouseltwo').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                dotsEach: 1,
                items: 1,
                margin: 15
            },
            600: {
                dotsEach: 1,
                items: 2,
                margin: 15
            },
            700: {
                dotsEach: 1,
                items: 2,
                margin: 15
            },
            1024: {
                dotsEach: 1,
                items: 3
            }
        }
    })
    jQuery('.owl-carouselone').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2,
                margin: 15
            },
            750: {
                items: 3,
                margin: 15
            },
            1000: {
                items: 3
            },
            1400: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    })
    jQuery('.teamcarousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2,
                margin: 15
            },
            768: {
                items: 3,
                margin: 15
            },
            1103: {
                items: 4
            },
            1600: {
                items: 4
            }
        }
    })
    jQuery('.images-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1,
                margin: 15
            },
            768: {
                items: 2,
                margin: 15
            },
            1103: {
                items: 2
            },
            1600: {
                items: 2
            }
        }
    })
    jQuery(document).ready(function($){
        var owl = $('.dentist-carousel');
        owl.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        with:350,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                margin: 15,
            },
            1000: {
                items: 3,
            }
        }
    });
    setTimeout(function(){owl.trigger('refresh.owl.carousel');},1000);
    // Function to trigger Owl Carousel refresh
    function refreshOwl() {
        owl.trigger('refresh.owl.carousel');
    }

    // Call refreshOwl when the carousel becomes visible or on window resize
    jQuery(window).on('resize scroll', function() {
        refreshOwl();
    });

    // Call refreshOwl when the element containing the carousel becomes visible
    jQuery('.healthacare-carousel').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
        refreshOwl();
    });
});
    jQuery('.dentist-testimonial-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
    jQuery('.services-carousel-2').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                margin: 15
            },
            768:{
                items:3,
            },
            1200: {
                items: 4
            }
        }
    })
    jQuery('.healthcare-blog').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                dotsEach: 0,
                items: 1,
                margin: 15
            },
            600: {
                dotsEach: 1,
                items: 2,
                margin: 15
            },
            700: {
                dotsEach: 1,
                items: 2,
                margin: 15
            },
            1000: {
                dotsEach: 1,
                items: 3
            }
        }
    }) 
    jQuery(document).ready(function($){
        var owl = $('.healthacare-carousel');
        owl.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2,
                margin: 15
            },
            600: {
                items: 2,
                margin: 15
            },
            1000: {
                items: 3
            }
        }
    });
    setTimeout(function(){owl.trigger('refresh.owl.carousel');},1000);
    // Function to trigger Owl Carousel refresh
    function refreshOwl() {
        owl.trigger('refresh.owl.carousel');
    }

    // Call refreshOwl when the carousel becomes visible or on window resize
    jQuery(window).on('resize scroll', function() {
        refreshOwl();
    });

    // Call refreshOwl when the element containing the carousel becomes visible
    jQuery('.healthacare-carousel').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
        refreshOwl();
    });
});
    jQuery('#search i').click(function(){
        jQuery('#search').submit();
    });
})



