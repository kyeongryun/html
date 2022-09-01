$(function () {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });

    //헤더 메뉴 싱글 드롭다운
    $('.depth02').hide();
    $('.depth01').mouseleave(function () {
        $(this).children('.depth02').slideUp();
    });
    $('.depth01').mouseenter(function () {
        $(this).children('.depth02').slideDown();
    });

    //스크롤시 컨텐츠 나타나기 .cont02 .item
    $(window).scroll(function () {
        $('.cont02 .item').each(function (index) {

            let itemHeight = $(this).offset().top + $(this).outerHeight();

            //스크롤바가 움직이는 길이값 
            //+ 보여지는 화면의 높이값
            let windowHeight = $(window).scrollTop() + $(window).height();
            let scrollBar = $(window).scrollTop();
            if (itemHeight < windowHeight) {
                $(this).addClass('list' + index);
            } else if (scrollBar == 0) {
                $(this).removeClass('list' + index);
            }

        });

    });
    //메뉴 아이콘을 클릭하면 모바일 메뉴가 나타남
    $('.xi-bars').click(function () {
        $('.mobile_gnb').css({
            'left': '0',
            'transition': '0.8s'
        });
    });
    $('.menu_close').click(function () {
        $('.mobile_gnb').css({
            'left': '-100%',
            'transition': '0.8s'
        });
    });
})//jquery end