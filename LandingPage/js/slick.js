window.onload = function() {
    $('.vitrine.slick').slick({
        dots: false,
        prevArrow: '.icon-prev',
        nextArrow: '.icon-next',
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    prevArrow: false,
                    nextArrow: false,

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })

    /* CARROSSEL DE PRODUTOS */

    $('.content-box-maeztra').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    centerMode: true,
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })

    /*  MARCAS */

    $('.marcas-parceirias').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    centerMode: true,
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })

    $('.full-banner-desktop .banner-slick,.full-banner-mobile .banner-slick.mobile').slick({
        dots: true,
        autoplay: false,
    });

}