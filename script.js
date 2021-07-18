$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 }, 1250, 'easeInOutExpo');
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "auto");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function (e) {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

        var tujuan = $(this).attr('href'); //ambil isi href
        var elemenTujuan = $(tujuan); //tangkap elemen yang bersangkutan

        $('html').animate({ scrollTop: elemenTujuan.offset().top }, 1250, 'easeInOutExpo');

        e.preventDefault();
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Designer", "Instagram Filter Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Designer", "Instagram Filter Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get input Values
    let nama = document.querySelector(".nama").value;
    let emailnya = document.querySelector(".emailnya").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    document.querySelector(".contact-form").reset();

    sendEmail(nama, emailnya, subject, message);
}

function sendEmail(nama, emailnya, subject, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "adhiardiansyah23@gmail.com",
        Password: "untlcyonvnwwnpnd",
        To: "adhiardiansyah23@gmail.com",
        From: "adhiardiansyah23@gmail.com",
        Subject: `${nama} mengirim anda pesan`,
        Body: `Nama : ${nama} <br/> Email: ${emailnya} <br/> Judul: ${subject} <br/> Pesan: ${message}`,
    }).then((message) => Swal.fire(
        'Sukses!',
        'Pesan berhasil dikirim!',
        'success'
    ))
}

(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        });
    }

})()