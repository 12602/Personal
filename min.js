$(document).ready(function()
{
  
    let $btns=$(".button-group button");
    $btns.click(function(e){
        e.target.classList.add("active");
        let selector=$(e.target).attr("data-filter");
        $('.project-area .row').isotope(
            {
                filter:selector
            }
        );
        return false;
    });

    
    $('  .grid .test-popup-link').magnificPopup({
        type: 'image'
    ,gallery:{enabled:true}
      });
        
      $('.owl-carousel').owlCarousel({

        loop:true,
        autoplay:true,
        dots:true

      });


});