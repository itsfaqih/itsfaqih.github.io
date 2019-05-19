$(document).ready(function () {
    var lastId,
        menuItems = $('#brand, #first .menu, .next-btn').find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"))
            if (item.length) {
                return item;
            }
        })

    $(window).scroll(function () {
        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top - 300 < st)
                return this
            }),
            st = $(this).scrollTop()

        // Get the id of the current element
        cur = cur[cur.length - 1]
        var id = cur && cur.length ? cur[0].id : ""

        if (lastId !== id) {
            lastId = id
            // Set/remove active class
            menuItems
                .removeClass("active").filter("[href='#" + id + "']").addClass("active")
        }
    })

    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 800)
        e.preventDefault()
    });
})