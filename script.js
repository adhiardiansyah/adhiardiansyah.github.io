$(window).on('load',function () {
    // parallax
    $('.home .home-content .teks-home').each(function(i) {
        setTimeout(function() {
            $('.home .home-content .teks-home').eq(i).addClass('muncul');
        }, 500 * i);
    });
});

$(document).ready(function () {
    // $(window).on('load',function () {
    //     // parallax
    //     $('.home .home-content .teks-home').each(function(i) {
    //         setTimeout(function() {
    //             $('.home .home-content .teks-home').eq(i).addClass('muncul');
    //         }, 500 * i);
    //     });
    // });

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

        // parallax
        var wScroll = $(this).scrollTop();

        // home
        $('.home a').css({
            'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
        });

        // about
        if (wScroll > $('.about').offset().top - 400) {
            $('.about .about-content .column').each(function(i) {
                setTimeout(function() {
                    $('.about .about-content .column').eq(i).addClass('muncul');
                }, 500 * i);
            });
        }

        // services
        if (wScroll > $('.services').offset().top - 400) {
            $('.services .serv-content .card .box').each(function(i) {
                setTimeout(function() {
                    $('.services .serv-content .card .box').eq(i).addClass('muncul');
                }, 500 * i);
            });
        }

        // skills
        if (wScroll > $('.skills').offset().top - 400) {
            $('.skills .skills-content .left').addClass('muncul');
        }
        if (wScroll > $('.skills').offset().top - 400) {
            $('.skills .skills-content .right .bars').each(function(i) {
                setTimeout(function() {
                    $('.skills .skills-content .right .bars').eq(i).addClass('muncul');
                }, 500 * i);
            });
        }

        // portfolio
        if (wScroll > $('.portfolio').offset().top - 400) {
            $('.portfolio .carousel .card .box').each(function(i) {
                setTimeout(function() {
                    $('.portfolio .carousel .card .box').eq(i).addClass('muncul');
                }, 500 * (i-3));
            });
        }

        // contact
        if (wScroll > $('.contact').offset().top - 400) {
            $('.contact .contact-content .left').each(function(i) {
                setTimeout(function() {
                    $('.contact .contact-content .left').eq(i).addClass('muncul');
                }, 500 * i);
            });
        }
        if (wScroll > $('.contact').offset().top - 400) {
            $('.contact .right').each(function(i) {
                setTimeout(function() {
                    $('.contact .right').eq(i).addClass('muncul');
                }, 500 * i);
            });
        }

        // footer
        if (wScroll > $('.footer').offset().top - 650) {
            $('.footer .tulisan').addClass('muncul');
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
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.page-scroll').click(function (e) {
        var tujuan = $(this).attr('href'); //ambil isi href
        var elemenTujuan = $(tujuan); //tangkap elemen yang bersangkutan

        $('html').animate({ scrollTop: elemenTujuan.offset().top }, 1250, 'easeInOutExpo');

        e.preventDefault();
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Designer", "Instagram Filter Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Engineer", "Designer", "Instagram Filter Creator"],
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
    const nama = document.querySelector(".nama").value;
    const emailnya = document.querySelector(".emailnya").value;
    const subject = document.querySelector(".subject").value;
    const message = document.querySelector(".message").value;

    document.querySelector(".contact-form").reset();

    sendEmail(nama, emailnya, subject, message);
}

function sendEmail(nama, emailnya, subject, message) {
    Email.send({
        Username: "adhiardiansyah23@gmail.com",
        Password: "0B3567DF1970328DF8B5882E9942F1AA1BB4",
        To: "adhiardiansyah23@gmail.com",
        From: emailnya,
        Subject: `${nama} mengirim anda pesan`,
        Body: `Nama : ${nama} <br/> Email: ${emailnya} <br/> Judul: ${subject} <br/> Pesan: ${message}`,
    }).then((message) => {
        Swal.fire(
            'Sukses!',
            'Pesan berhasil dikirim!',
            'success'
        )
    })
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