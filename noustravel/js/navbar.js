$(document).ready(function() {
    var body = $('body'),
        init_btn = $('#nav-btn'),
        navbar = $('#brand, #nav-btn'),
        menu = $('#nav-menu'),
        end_btn = $('#nav-menu .close-menu')

    init_btn.click(function() {
        $(this).fadeOut()
        body.css({overflow: 'hidden'})
        navbar.fadeOut()
        menu.fadeIn()
    })

    menu.find('a').hover(function() {
        var section = $(this).attr('href')
        section = section.split('#').join('')
        menu.toggleClass(section)
    })

    menu.find('a').click(function(e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top

        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 800, destroy(menu))

        e.preventDefault()
    })

    end_btn.click(function() {destroy(menu)})

    function destroy(item) {
        item.fadeOut()
        menu.fadeOut()
        body.css({overflow: 'auto'})
        navbar.fadeIn()
    }
})