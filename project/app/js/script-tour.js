"use strict";

function initMap() {
    var e;
    e = new google.maps.Map(document.getElementById("PageTourMap"), {
        center: {
            lat: -8.7809791,
            lng: 115.2228203
        },
        zoom: 12,
        disableDefaultUI: !0,
        styles: [{
            featureType: "all",
            elementType: "all",
            stylers: [{
                saturation: -100
            }, {
                gamma: .5
            }]
        }, {
            featureType: "poi",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }]
    });
    new google.maps.Marker({
        position: {
            lat: -8.7809791,
            lng: 115.2228203
        },
        map: e,
        title: "Conrad Bali 5*"
    })
}! function(e) {
    e(function() {
        e(".tkachova-page-tour__slider").owlCarousel({
            items: 1,
            loop: !0,
            autoplay: !0,
            nav: !0,
            dots: !0,
            navText: ['<span class="arrow-owl arrow-left"></span>', '<span class="arrow-owl arrow-right"></span>'],
            responsive: {
                0: {
                    nav: !1,
                    dots: !1
                },
                768: {
                    nav: !1
                },
                992: {
                    nav: !0
                }
            }
        })
    })
}(jQuery), $(document).ready(function() {
    767 < $(window).width() ? $(".head_nav, .head_tel").css("display", "flex") : $(".head_nav, .head_tel").css("display", "none"), $(".menu_bar").click(function() {
        "none" == $(".head_nav").css("display") ? ($(".head_nav").css("display", "flex"), "flex" != $(".head_tel").css("display") && "flex" != $(".head_nav").css("display") || $(".header").addClass("scroll_head")) : ($(".head_nav").css("display", "none"), "none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset && $(".header").removeClass("scroll_head"))
    }), $(window).resize(function() {
        767 < $(window).width() && $(".head_nav, .head_tel").css("display", "flex")
    }), $(window).resize(function() {
        $(window).width() < 768 && $(".head_nav, .head_tel").css("display", "none")
    }), $(".tel_svg").click(function() {
        "none" == $(".head_tel").css("display") ? ($(".head_tel").css("display", "flex"), "flex" != $(".head_tel").css("display") && "flex" != $(".head_nav").css("display") || $(".header").addClass("scroll_head")) : ($(".head_tel").css("display", "none"), "none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset && $(".header").removeClass("scroll_head"))
    })
}), $(".head__items_linked").hover(function() {
    $(".this").removeClass("active"), $(this).addClass("active")
}, function() {
    $(this).removeClass("active"), $(".this").addClass("active")
}), window.onscroll = function() {
    1 <= window.pageYOffset ? $(".header").addClass("scroll_head") : ("none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset || 767 < $(window).width()) && $(".header").removeClass("scroll_head")
};