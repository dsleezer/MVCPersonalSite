$('.image').mouseenter(function() {
    $(this).children('.info')
    .toggleClass('visible');
})
$('.image').mouseleave(function() {
    $(this).children('.info')
    .toggleClass('visible');
})