(function() {
    //navbar
    $('.ui.navbar .search-icon i').click(function() {
        const icon = $(this);
        if (icon.text() === 'search'){
            icon.text('close').parents('.content').addClass('searching')
        }else {
            icon.text('close').parents('.content').removeClass('searching')
        }   
    })
    //carousel
    $('.ui.hero.carousel').slick({
        prevArrow:'<button class="ui prev bottom button"><i class="material-icons">chevron_left</i></button>',
        nextArrow:'<button class="ui next bottom button"><i class="material-icons">chevron_right</i></button>',
    })
})();