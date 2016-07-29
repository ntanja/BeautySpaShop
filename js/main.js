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
    $('.productQuantity span a.down').click(function () {
        var txt = $('.productQuantity input').val();

        if (txt <= 1) {
            $('.productQuantity input').val(1);
        } else {
            txt--;
            $('.productQuantity input').val(txt);
        }

    });

    $('.productQuantity span a.up').click(function () {
        var txt = $('.productQuantity input').val();
        txt++;
        $('.productQuantity input').val(txt);

    });

    //tabulator 
    $(function () {
        $("#tabs").tabs();
    });
    
    
    $('#html_form').validator();
});
