// init controller
var controller = new ScrollMagic.Controller();

$(document).ready(function () {
    // build scene

    var sceneFirstHide = new ScrollMagic.Scene({
            duration: '80%'
        })
        .setTween("#first .container", {
            opacity: 0
        })
        .addTo(controller);

    var sceneBrandStick = new ScrollMagic.Scene({})
        .setPin("#brand")
        .addTo(controller);

    var sceneBrandMargin = new ScrollMagic.Scene({
            duration: '50%'
        })
        .setTween("#brand", {
            paddingTop: '32px'
        })
        .addTo(controller);

    var sceneNavBtn = new ScrollMagic.Scene({
            duration: '50%'
        })
        .setTween("#nav-btn", {
            top: '54px',
            display: 'block',
            opacity: 1
        })
        .addTo(controller);

    var sceneBrandTextSize = new ScrollMagic.Scene({
            duration: '50%'
        })
        .setTween("#brand a", {
            fontSize: '3.1rem'
        })
        .addTo(controller);

    var sceneBrandColor = new ScrollMagic.Scene({
            duration: '50%'
        })
        .setTween("#brand a", {
            color: 'var(--white)'
        })
        .addTo(controller);

    var sceneSidebar = new ScrollMagic.Scene({
            duration: '50%'
        })
        .setTween("#sidebar", {
            display: 'none',
            opacity: 0
        })
        .addTo(controller);

    var sceneNavbarHide = new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: $('#second'),
            duration: '23%'
        })
        .setTween("#brand, #nav-btn", {
            display: 'none',
            opacity: 0
        })
        .addTo(controller);

    var sceneNavbarShow = new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: $('.more-btn'),
            duration: '10%'
        })
        .setTween("#brand, #nav-btn", {
            display: 'block',
            opacity: 1
        })
        .addTo(controller);

    var sceneNavbarHide_2 = new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: $('#third'),
            duration: '23%'
        })
        .setTween("#brand, #nav-btn", {
            display: 'none',
            opacity: 0
        })
        .addTo(controller);
})