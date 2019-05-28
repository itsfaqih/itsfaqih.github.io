$(document).ready(function() {
    let containerHeight_old = $('#streaming-container').height()
    $('.textcut-btn').click(function() {
        let containerHeight = containerHeight_old
        let hiddenDesc = $('.video-desc p:nth-of-type(n+2)')
        let hiddenDescHeight = 0

        hiddenDesc.toggleClass('show')

        hiddenDesc.each(function(index) {
            hiddenDescHeight += ($(this).height() + 16)
        })
        
        if(hiddenDesc.hasClass('show')){
            $('#streaming-container').css('height', containerHeight + hiddenDescHeight)
        } else {
            $('#streaming-container').css('height', containerHeight)
        }
    })
})