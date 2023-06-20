$('.back-layer').hide();
$('#NavIcon').click(function () {
    $('body').addClass('overflow-hidden');
    $('.side-nav').toggleClass('Active-nav');
    $('.back-layer').show();

});

$('.back-layer').click(function () {
    $('body').removeClass('overflow-hidden');
    $('.side-nav').removeClass('Active-nav');
    $('.back-layer').hide();
});

$('.ShowMore').click(function () {
    alert();
})