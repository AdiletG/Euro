///Carousel tabs...
let list = $('.carousel__review-list');
let btn = $('.carousel__element');
list.on('click', 'li:not(.carousel__element_active)', function() {

    $(this)
        .addClass('carousel__element_active').siblings().removeClass('carousel__element_active')
        .closest('div.carousel__review-tabs').find('div.carousel__review-content').removeClass('carousel__review-content_active').eq($(this).index()).addClass('carousel__review-content_active');
});


///Home tabs..
let uli = $('.home__dots-elements');
let elements = $('.home__dots-element');
uli.on('click', 'li:not(.home__dots-element_active)', function() {

    $(this)
        .addClass('home__dots-element_active').siblings().removeClass('home__dots-element_active')
        .closest('div.home__dots').find('div.home__dots-content').removeClass('home__dots-content_active').eq($(this).index()).addClass('home__dots-content_active');
});

///Turns tabs
let ull = $('.turns__menu');
let ulli = $('.turns__list');
ull.on('click', 'li:not(.turns__list_active)', function() {

    $(this)
        .addClass('turns__list_active').siblings().removeClass('turns__list_active')
        .closest('div.turns__tabs').find('div.turns__content').removeClass('turns__content_active').eq($(this).index()).addClass('turns__content_active');
});
///клик опасити
let click = $('.home__dots-element');
click.on('click',function () {
   $(this)
       .addClass('home__dots-click').siblings().removeClass('home__dots-click');
});
/// Клик колор
// let clicks = $('.carousel__element');
// clicks.on('click',function () {
//     $(this)
//         .addClass('carousel__bg').siblings().removeClass('carousel__bg');
// });

///Buttons
let button = $('.header__btn , .welcome__btn , .connect__btn , .product__btn , .carousel__content-btn , .blue-screen__btn , .home__dots-btn ,.turns__content-btn,.helper__btn,.family__btn');
let overlay = $('.overlay');
let popupbtn = $ ('.popup__btn');
button.on('click',function (e) {
    overlay.fadeIn('slow');

});

popupbtn.on('click', function (e) {
    e.preventDefault();
    overlay.fadeOut('slow');
});

overlay.on('click',function (e) {
    if (e.target.className === 'overlay'){
        overlay.fadeOut('slow');
    }
});

let close = $ ('.popup__close');
close.on('click', function () {
    overlay.fadeOut('slow');
});


var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.880323 , 74.62051],
        zoom: 18

    });
    var myIcon = DG.icon({
        iconUrl: 'https://st3.depositphotos.com/11574170/35056/v/1600/depositphotos_350563502-stock-illustration-цвет-вектора-местоположения-глифы.jpg',
        iconRetinaUrl: 'my-icon@2x.png',
        iconSize: [50, 50],

    });

    DG.marker([50.505, 30.57], {icon: myIcon}).addTo(map);

    DG.marker([42.880323 , 74.62051],{icon:myIcon}).addTo(map).bindPopup('Нажми!').bindLabel('Я здесь', { static: false });;
});