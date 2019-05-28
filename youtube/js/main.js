$(document).ready(function () {
    if (window.matchMedia("(max-width: 1141px)").matches) {
        $('#sidenav').attr('class', 'collapse')
        $('body').attr('class', '')
    } else {
        $('#sidenav').attr('class', 'collapse show')
    }

    $('#sidenav-btn, .overlay').click(function () {
        $('body').toggleClass('locked')
        if (!$('body').hasClass('locked')) {
            $('#sidenav').scrollIntoView()
        }
    })
})