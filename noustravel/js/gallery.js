$(document).ready(function () {
    $('[class*=content]').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled: true}
    });
})