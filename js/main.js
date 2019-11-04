$(function() {
  $( "#tabs" ).tabs();
  $( ".product-details-tab-area" ).tabs();
  $('.dropdown-toggle').dropdown()
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
    if ($('#personal-info-form select.select2, .checkout-form-select2 select.select2').length) {
      $('#personal-info-form select.select2, .checkout-form-select2 select.select2').select2({
          theme: 'classic',
          dropdownAutoWidth: true,
          width: '100%'
      });
  }
      
    })
 





