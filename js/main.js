$(function() {
    // Закрашиваем звездочки относительно выставленого рейтинга
    $('.rating-wrapper').each(function(i,elem) {
        printStar($(this));
    });

    $( ".rating-wrapper" ).mouseleave(function() {
        printStar($(this));
    });

    // Анимация закрашивания звездочек при выборе своей оценки
    $('.rating-wrapper').mousemove(function(e){
        var left = $(this).offset().left;
        var starWidth = $(this).outerWidth() / 5;
        var X = e.pageX - left; // положения по оси X
        var ratingValue = Math.floor(X / starWidth) + 1;

        $(this).find('.rating-stars-gold').css('width', (ratingValue * 20) + '%');
    });

    // При клике отошлем аякс запрос на сервер и получим данные об изменении рейтинга
    $(".rating-wrapper").on( "click", function(e) {
        var left = $(this).offset().left;
        var starWidth = $(this).outerWidth() / 5;
        var X = e.pageX - left; // положения по оси X
        var ratingValue = Math.floor(X / starWidth) + 1;

        // Аякс запрос с данными рейтинга и пользователя
        // Если ответ сервера положительный, то проставим новое значение рейтинга
        var ratingValueNew = 3.6;

        $(this).data('rating-value', ratingValueNew);
    });
});

function printStar (e) {
    var ratingValue = e.data('rating-value');
    e.find('.rating-stars-gold').css('width', (ratingValue * 20) + '%')
}