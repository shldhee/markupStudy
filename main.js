$(document).on('ready', function() {
  $('.slider__list').slick({
    autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 100,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }]
  });
});
