"use strict";
$(document).ready(function() {
        var e = this;
        767 < $(window).width() ? $(".head_nav, .head_tel").css("display", "flex") : $(".head_nav, .head_tel").css("display", "none"), $(".menu_bar").click(function() {
            "none" == $(".head_nav").css("display") ? ($(".head_nav").css("display", "flex"), "flex" != $(".head_tel").css("display") && "flex" != $(".head_nav").css("display") || $(".header").addClass("scroll_head")) : ($(".head_nav").css("display", "none"), "none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset && $(".header").removeClass("scroll_head"))
        }), $(window).resize(function() {
            767 < $(window).width() && $(".head_nav, .head_tel").css("display", "flex")
        }), $(window).resize(function() {
            $(window).width() < 768 && $(".head_nav, .head_tel").css("display", "none")
        }), $(".tel_svg").click(function() {
            "none" == $(".head_tel").css("display") ? ($(".head_tel").css("display", "flex"), "flex" != $(".head_tel").css("display") && "flex" != $(".head_nav").css("display") || $(".header").addClass("scroll_head")) : ($(".head_tel").css("display", "none"), "none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset && $(".header").removeClass("scroll_head"))
        }), $(".head__items_linked").hover(function() {
            $(".this").removeClass("active"), $(e).addClass("active")
        }, function() {
            $(this).removeClass("active"), $(".this").addClass("active")
        }), window.onscroll = function() {
            1 <= window.pageYOffset ? $(".header").addClass("scroll_head") : ("none" == $(".head_tel").css("display") && "none" == $(".head_nav").css("display") && 0 == window.pageYOffset || 767 < $(window).width()) && $(".header").removeClass("scroll_head")
        }
    }),
    function() {
        var e = document.getElementById("drop-button"),
            s = document.getElementById("drop-button-sec"),
            a = document.getElementById("drop-menu"),
            d = document.getElementById("drop-menu-sec"),
            n = document.getElementById("change-wiew");
        e.addEventListener("click", function(e) {
            e.preventDefault(), a.classList.toggle("is-active")
        }), s.addEventListener("click", function(e) {
            e.preventDefault(), d.classList.toggle("is-active")
        }), n.addEventListener("click", function() {
            var e = document.getElementById("boxWiew").children,
                s = document.querySelectorAll(".destinations-page__card"),
                a = document.querySelectorAll(".destinations-page__card-img-wrapper");
            e = Array.prototype.slice.call(e), s = Array.prototype.slice.call(s), a = Array.prototype.slice.call(a), e.forEach(function(e, s) {
                e.classList.toggle("col-md-4"), e.classList.toggle("col-md-12")
            }), s.forEach(function(e, s) {
                e.classList.toggle("row-card")
            }), a.forEach(function(e, s) {
                e.classList.toggle("resized")
            })
        })
    }();