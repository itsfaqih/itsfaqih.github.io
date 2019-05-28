$(document).ready(function() {
    let containerHeight_old = $('#streaming-container').height()
    let shownDescHeight = $('.video-desc p:nth-of-type(1)').height()
    $('.textcut-btn').click(function() {
        let containerHeight = containerHeight_old
        let videoDesc = $('.video-desc p')
        let hiddenDesc = $('.video-desc p:nth-of-type(n+2)')
        let hiddenDescHeight = 0

        videoDesc.toggleClass('show')

        hiddenDesc.each(function(index) {
            hiddenDescHeight += ($(this).height() + 16)
        })
        
        let additionalHeight = hiddenDescHeight + $('.video-desc p:nth-of-type(1)').height() - shownDescHeight

        if(hiddenDesc.hasClass('show')){
            $('#streaming-container').css('height', containerHeight + additionalHeight)
        } else {
            $('#streaming-container').css('height', containerHeight)
        }
    })
})