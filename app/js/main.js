$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
  $(".contact-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
  });
  $(".article-slider__box").slick({
    prevArrow:
      '<a type="button" class="slick-prev"><img class="article-slider__arrow article-slider__arrowleft" src="./images/arrow-slide-left.svg" alt="slide-arrow"></a>',
    nextArrow:
      '<a  type="button" class="slick-next"><img class="article-slider__arrow article-slider__arrowright" src="./images/arrow-slide-right.svg" alt="slide-arrow"></a>',
  });
  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});
