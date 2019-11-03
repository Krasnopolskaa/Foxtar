$(function() {
  $( "#tabs" ).tabs();
  $('.slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
     autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
    })

        /*-------------------------------------
         jQuery for Isotope initialization
         -------------------------------------*/
         var $container = $('#isotope-container');
         if ($container.length > 0) {
 
             // Isotope initialization
             var $isotope = $container.find('.featuredContainer').isotope({
                 filter: '*',
                 animationOptions: {
                     duration: 750,
                     easing: 'linear',
                     queue: false
                 }
             });
 
             // Isotope filter
             $container.find('.isotope-classes-tab').on('click', 'a', function () {
 
                 var $this = $(this);
                 $this.parent('.isotope-classes-tab').find('a').removeClass('current');
                 $this.addClass('current');
                 var selector = $this.attr('data-filter');
                 $isotope.isotope({
                     filter: selector,
                     animationOptions: {
                         duration: 750,
                         easing: 'linear',
                         queue: false
                     }
                 });
                 return false;
 
             });
         }
     });// end window load function
 
