
jQuery(document).ready(function($) {
    if(typeof testimonial_settings !== "undefined"){
        var $testimonialspace = 30;
        var $testimonialspace_laptop = 20, $testimonialspace_tablet = 15, $testimonialspace_mobile = 10;
        
        if(typeof testimonial_settings['medunit_testimonial_space'] !== "undefined"){
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
        
        $('.clients-section .owl-carousel').owlCarousel({
            margin:30,
            responsiveClass:true,
            nav:testimonial_settings['medunit_show_nav'],
            items:testimonial_settings['medunit_slides_to_show'],
            dots: testimonial_settings['medunit_show_dots'],
            responsive:{
                0:{
                    items:1,
                    nav:testimonial_settings['medunit_show_nav'],
                    margin:30,
                    dots:testimonial_settings['medunit_show_dots_mobile'],
                },
                768:{
                    items:2,
                    nav:testimonial_settings['medunit_show_nav'],
                    margin:30,
                    dots: testimonial_settings['medunit_show_dots_tablet'],
                },
                1025:{
                    items:2,
                    nav:testimonial_settings['medunit_show_nav'],
                    margin:30,
                    dots: testimonial_settings['medunit_show_dots_laptop'],
                },
                1367:{
                        items:2,
                        nav:testimonial_settings['medunit_show_nav'],
                        margin:30,
                        dots: testimonial_settings['medunit_show_dots'],
                }
            }
        });
        }
}
})



    
