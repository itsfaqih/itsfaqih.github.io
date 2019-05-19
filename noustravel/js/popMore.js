$(document).ready(function () {
    var body = $('body'),
        more_btn = $('.more-btn'),
        back_btn = $('.close-btn'),
        navbar = $('#brand, #nav-btn'),
        second = $('#second'),
        second_title = $('#second .title'),
        cards = $('#second .card'),
        cards_image = $('#second .card-thumbnail'),
        device_width = $(window).width(),
        cards_hidden,
        lg = 1200,
        md = 910,
        sm = 760,
        xs = 524
    
    function getHiddenCards() {
        if(device_width >= lg) {
            cards_hidden = $('#second .card[class*=hidden]:not(.s-hidden), #second .card.hide-lg')
        } else if(device_width >= md && device_width < lg) {
            cards_hidden = $('#second .card[class*=hidden]:not(.s-hidden), #second .card.hide-md')
        } else if(device_width >= sm && device_width < md) {
            cards_hidden = $('#second .card[class*=hidden], #second .card.hide-sm, #second .card.s-hidden')
        } else if(device_width >= xs && device_width < sm) {
            cards_hidden = $('#second .card[class*=hidden], #second .card.hide-xs, #second .card.s-hidden')
        } else {
            cards_hidden = $('#second .card[class*=hidden], #second .card.hide-xxs, #second .card.s-hidden')
        }
    }
        
    $(window).resize(function (){
        device_width = $(this).width()
    })

    more_btn.click(function () {
        getHiddenCards()
        $('html, body').animate({
            scrollTop: second.offset().top
        }, 500, 'swing', function () {
            body.css({overflow: 'hidden'})
            navbar.fadeOut(500, function () {
                second.css({
                    backgroundPosition: 'bottom',
                    position: 'fixed', 
                    top: 0, 
                    left: 0,
                    height: '100%',
                    zIndex: 1000
                })
                second_title.css({
                    color: 'var(--black)'
                })
                second.find('hr').css({
                    backgroundColor: 'var(--blue-light)'
                })
                more_btn.delay(500).fadeOut(500, function () {
                    back_btn.show().animate({opacity: 1})
                    second_title.css({width: '50%'})
                    second_title.parent().delay(300).animate({
                        marginTop: '24px'
                    }, 400, 'swing', function () {
                        cards.parent().addClass('mt-2').removeClass('mt-4')
                        cards_image.css({
                            height: '160px'
                        })
                        cards.removeClass('w-3').addClass('w-4')
                        cards_hidden.fadeIn(1000, function() {
                            $(this).delay(500).animate({opacity: 1}, 400, 'swing', function() {
                            })
                        })
                    })
                })

            })
        })
    })

    back_btn.click(function() {
        getHiddenCards()
        $(this).animate({opacity: 0}, 400, 'swing', function() {
            $(this).hide()
            second_title.css({width: '100%'})
            cards_hidden.animate({opacity: 0}, 400, 'swing', function() { 
                $(this).hide()
                cards.parent().addClass('mt-4').removeClass('mt-2')
                cards_image.css({
                    height: '218px'
                })
                cards.removeClass('w-4').addClass('w-3')
                second_title.parent().delay(300).animate({
                    marginTop: '156px'
                }, 400, 'swing', function() {
                    second.attr('style', '')
                    second_title.attr('style', '')
                    second.find('hr').css({
                        backgroundColor: 'var(--yellow)'
                    })
                    navbar.fadeIn(500, function() {
                        more_btn.fadeIn()
                    })
                    body.attr('style', '')
                })
            })
        })
    })
})