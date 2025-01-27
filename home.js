$(document).ready(function(){

});


function faqnav(event, tab){
    var open_faq = '#'+tab+ '_Questions';
    $('.question-grid').addClass('d-none');
    $('.subnav-items .items').removeClass('active');
    $(open_faq).removeClass('d-none');
    setTimeout(function(){
        $(event).addClass('active');
    },100);
}

$('.accordion').on('show.bs.collapse', function(e) {
    $(e.target).siblings('.accordion-header').find('.icon').text('-');
});

$('.accordion').on('hide.bs.collapse', function(e) {
    $(e.target).siblings('.accordion-header').find('.icon').text('+');
});

