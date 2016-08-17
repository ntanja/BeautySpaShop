$(document).ready(function () {
//owl carousel
    $("#owl-example").owlCarousel({
        navigation: true,
        navigationText: ["prev", "next"],
    });


    $("a.down").click(function () {
        $(this).next('ul').slideToggle();
        $(this).children().toggleClass("fa-toggle-up");
    });

//price range slider 
    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
    });
    //
    $("article.preview nav").show();
    var previewImg = $("img#main");
    $("a:first").addClass("active");
    $(".preview nav a img").click(function () {
        var link = $(this).parent();
        var linkHref = link.attr("href");
        var linkAlt = link.attr("alt");
        if ($(link).hasClass("active") == false)
        {
            $("a").removeClass("active");
            link.addClass("active");
            $(previewImg).animate({
                opacity: 0.8,
            }, 300, function () {
                previewImg.attr("src", linkHref);
                previewImg.attr("alt", linkAlt);
                $(this).animate({
                    opacity: 1,
                }, 300
                        );
            });
        }
        return false;
    });
    $("input").click(function () {
        $("p.more").fadeIn("slow");
    });

    //spinner 
    $('.productQuantity span a.decrease').click(function () {
        var txt = $('.productQuantity input').val();

        if (txt <= 1) {
            $('.productQuantity input').val(1);
        } else {
            txt--;
            $('.productQuantity input').val(txt);
        }
    });
    $('.productQuantity span a.increase').click(function () {
        var txt = $('.productQuantity input').val();
        txt++;
        $('.productQuantity input').val(txt);
    });
    //spinner 1
    $('.productQuantity1 span a.decrease').click(function () {
        var txt = $('.productQuantity1 input').val();

        if (txt <= 1) {
            $('.productQuantity1 input').val(1);
        } else {
            txt--;
            $('.productQuantity1 input').val(txt);
        }
    });
    $('.productQuantity1 span a.increase').click(function () {
        var txt = $('.productQuantity1 input').val();
        txt++;
        $('.productQuantity1 input').val(txt);
    });


    //tabulator 
    $(function () {
        $("#tabs").tabs();
    });

    //toggle menuHide
    $('span.fa-cog').click(function () {
        $('.menuHide').toggle();
    });


    //change color on click
    $('.fa-heart-o').click(function () {
        $(this).toggleClass('fa-heart-o fa-heart');
    });



    //picture view
    $('.listView .fa-th-list').click(function () {
        $('.twelve-p').show();
        $('.twelve').hide();
    });
    $('.listView .fa-th').click(function () {
        $('.twelve-p').hide();
        $('.twelve').show();
    });

    //prikazivanje sadrzaja korpe

    $('.shopingCart').click(function () {
        $('.cartProducts').toggle();
    });

    $('.remove').click(function () {
        $(this).parent().parent().hide();

    });

    //show-hide password
    $('.showPass').click(function () {
        $(this).toggleClass('fa-eye fa-eye-slash');

        var type = $(this).parent().siblings().attr('type');


        if (type == 'password') {
            $(this).parent().siblings().attr('type', 'text');
        } else {
            $(this).parent().siblings().attr('type', 'password');
        }

    });

    //userPanel
    //show text area
    $('button.reply').click(function () {
        $('form.textReply').show();
    });

    //show-hide product history
    $('.showHistory').click(function () {
        var txt = $(this).text();
        $('.userProducts tbody tr:first-of-type + tr').nextAll('tr').toggle();
        if (txt == 'PRIKAZI CELU ISTORIJU') {
            $(this).text('SAKRIJ ISTORIJU');
        } else {
            $(this).text('PRIKAZI CELU ISTORIJU');
        }
    });
    //userPage end


    //order page-show/hide order summary
    $('.showOrder').click(function () {
        var txt = $(this).text();
        $('.orderRight').toggle();
        if (txt == 'Show order summary') {
            $(this).text('Hide order summary');
        } else {
            $(this).text('Show order summary');
        }
    });

    //orderPaying page-hide form
    $('.delivery').click(function () {
        $('.hideAddress').hide();
    });
    $('.bill').click(function () {
        $('.hideAddress').show();
    });

    //orderPaying page-hide paying method
    $('.paying').click(function () {
        $(this).nextAll(".panel1").hide();
        $(this).prevAll(".panel1").hide();
        $(this).next(".panel1").show();
    });

    //navTop hide on scroll

    var didScroll;
    var lastScrollTop = 50;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
            $('.navbar').css("padding", "5px");
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
                $('.navbar').css("padding", "40px");
            }
        }

        lastScrollTop = st;
    }

    //form
    $('.html_form').validator();
    $('.html_form2').validator();
});
