$(function () {
    // banner slick
$('#banner').slick({
    arrows:false,
    dots:true, 
    dotsClass: "banner_slider_dot container",
    autoplay: true,
    autoplaySpeed: 1600,
    slidesToScroll: 1,
     });
//   banner end
// tooltip start
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// tooltip end

// beauty cream slick slider start
$('#arrivSlider').slick({
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:".beautyleft",
    nextArrow:".beautyright",
    responsive: [
      {
      breakpoint: 991,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        }
      },
      {
      breakpoint: 767,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        }
      },
      {
      breakpoint: 575,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        mobileFirst:true,
        }
      }
    ]
  });

  // beauty cream slick slider end

  // DEALS DAYS START
  // COUNT DOWN START

  $(".timer")
  .countdown("2033/07/16", function(event) {
    $(`.days`).html(event.strftime('%D '));
    $(`.hour`).html(event.strftime(' %H'));
    $(`.min`).html(event.strftime('%M'));
    $(`.sec`).html(event.strftime('%S'));
  });
  // COUNT DOWN END
   //  deals slick slider start
   $('#dealSlider').slick({
    arrows:false,
    dots:true, 
    dotsClass: "deal_slider_dot ",
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 767,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        mobileFirst:true,
        }
      },
    ]
    });
  //  deals slick slider end
  // DEALS DAYS END

   // LATEST NEWS START
   $('#latestSlider').slick({
    arrows:false,
    dots:true, 
    dotsClass: "newsBox_slider_dot container",
    autoplay: true,
    autoplaySpeed: 1600,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: false,
    centerPadding: '0px',
    responsive: [
      {
      breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        mobileFirst:true,
        centerPadding: '0px',
        }
      },
      {
      breakpoint: 575,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        mobileFirst:true,
        }
      },
      {
      breakpoint: 768,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        mobileFirst:true,
        }
      },
    ]
    });
    // LATEST NEWS END
// About page

// LEADERSHIP START
// LEADER SLIDER START
$('#leaderSlider').slick({
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:".leaderleft",
  nextArrow:".leaderright",
  centerPadding:"0px",
  responsive: [
    {
    breakpoint: 991,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
      }
    },
    {
    breakpoint: 767,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows:false,
      }
    },
    {
    breakpoint: 575,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      mobileFirst:true,
      }
    }
  ]
 });
// LEADER SLIDER END
// LEADERSHIP END
// AEYOR ABOUT INSTAGRAM START
$('#aboutInstaSlider').slick({
  arrows:false,
  dots:true, 
  dotsClass: "instaBox_slider_dot container",
  autoplay: true,
  autoplaySpeed: 1600,
  slidesToShow: 6,
  slidesToScroll: 6,
  variableWidth: false,
  centerPadding: '0px',
  responsive: [
    {
    breakpoint: 768,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
      mobileFirst:true,
      centerPadding: '0px',
      }
    },
    {
    breakpoint: 575,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows:false,
      mobileFirst:true,
      centerPadding: '0px',
      }
    },
    {
    breakpoint: 992,
      settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows:false,
      mobileFirst:true,
      centerPadding: '0px',
      }
    },
  ]
    
 });
 // LEATHER JACKET SLIDER START
$('#leatherSlider').slick({
  arrows:true,
  fade: true,
  asNavFor: '#sub-leatherSlider',
  prevArrow:".jacketleft",
  nextArrow:".jacketright",
});
// sub slider start
$('#sub-leatherSlider').slick({
  arrows:false,
  slidesToScroll: 1,
  slidesToShow:5,
  asNavFor: '#leatherSlider',
  centerPadding:"0px",
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
    breakpoint: 991,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    }
    },
    {
    breakpoint: 767,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:false,
    }
    },
    {
    breakpoint: 575,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    mobileFirst:true, 
    }
    }
  ]
});
// sub slider end
// LEATHER JACKET SLIDER END
// RELETED SLIDER START
$('#reletedSlider').slick({
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows:true,
  prevArrow:".beautyleft",
  nextArrow:".beautyright",
  responsive: [
    {
    breakpoint: 991,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
      }
    },
    {
    breakpoint: 767,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows:false,
      }
    },
    {
    breakpoint: 575,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      mobileFirst:true,
      }
    }
  ]
});

});