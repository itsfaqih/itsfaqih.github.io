$(document).ready(function() {
    $('html,body').animate({
        scrollTop: 0
    });

    // Header scrollDown
    $('header #scrollDown').click(function() {
        $('html,body').animate({
            scrollTop: $('header').height()
        });
    });

    // Sidebar - Open
    $('.navbar #open').click(function() {
        $('.sidenav #close').fadeIn();
        var properties = {};

        if($('html,body').width() < 422) {
          properties = {'width': '100vw'};
        } else {
          properties = {'width': '300px'};
        }

        $('.sidenav').animate(properties, function() {
            $('.sidenav ul').fadeIn();
        });
    });

    // Sidebar - Close
    function closeSidenav() {
        $('.sidenav #close').fadeOut();
        $('.sidenav ul').fadeOut(function() {
            $('.sidenav').animate({
                'width': 0
            });
        });
    }

    $('.sidenav #close').click(function() {
        closeSidenav();
    });

    // Show navbar after scroll (Mobile)
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > ($('header').height() - 70)) {
            $('nav .navbar').removeClass('hidden');
            $('nav .navbar .brand').fadeIn();
        } else if ((y < $('header').height() - 70)) {
            $('nav .navbar').addClass('hidden');
            $('nav .navbar .brand').fadeOut();
        }
    });

    // Animate Scroll
    $("nav a[href^=\\#]").click(function(e) {
        e.preventDefault();
        var sectionName = $(this).attr('href');
        var properties = {};

        if($('html,body').width() < 912) {
          properties = {scrollTop: $(sectionName).offset().top - 70};
        } else {
          properties = {scrollTop: $(sectionName).offset().top};
        }

        $('html,body').animate(
            properties
        , 'slow', function() {
            if($(window).width() < 768) {
                closeSidenav();
            }
        });
    });

    // Jurusan Item effects - Open
    $('#jurusan .item #open').click(function() {
        $(this).fadeOut();
        $(this).parent()
        .addClass('active')
        .animate({
            width: '100%'
        }, function() {
            $(this).find('#close, article').fadeIn();
        })
        .siblings('.item')
        .animate({
            width: 0
        })
        .find('#open').fadeOut();
    });

    // Jurusan Item effects - Close
    $('#jurusan .item #close').click(function() {
        $(this).fadeOut();
        $(this).parent()
        .removeClass('active')
        .find('article').fadeOut(function() {
            $(this).parent().animate({
                width: '20%'
            }, function() {
                $(this).find('#open').fadeIn();
            })
            .siblings('.item')
            .animate({
                width: '20%'
            })
            .find('#open').fadeIn();
        });
    });
});
