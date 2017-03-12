$(function() {

    var intro_overlay = $('.overlay'),
        explore_block = $(".explore-block"),
        explore_arrow = $('.arrow-explore'),
        title_cta = $('.CoverTitles-cta'),
        title_line = $('.CoverSubtitle-line'),
        title_txt_cta = $('.CoverTitles-cta-text'),
        core = $('#core'),
        go_next = $('#arrow-next'),
        go_prev = $('#arrow-prev'),
        scroll = $('.scroll-sign'),
        desc_text = $('.decsription-short-text'),
        logo_body = $('.logo-body'),
        preload = $('#preloader'),
        blackout = $('.overlay-black'),
        social = $('ul.social'),
        fb = $('#fb'),
        twitter = $('#twitter'),
        insta = $('#insta'),
        youtube = $('#youtube'),
        teleport = $('.overlay-translate'),
        burger_icon = $('#nav-icon1'),
        accordion = $('.accordion'),
        menu_category = $('.link'),
        menu_list = $('.submenu li'),
        menu_page = $('.accordion .link'),
        video = $('.video'),
        section = $('.section-img');


    /*
     * Preloader intialization
     */

    setTimeout(function() {
        preload.addClass('active-preload');
        preload.delay(300).fadeOut(300);
    }, 1400);

    setTimeout(function() {
        intro_overlay.addClass('overlay-active');
    }, 1650);

    setTimeout(function() {
        blackout.fadeOut(900);
        explore_arrow.addClass('arrow-explore-active');
    }, 1800);

    setTimeout(function() {
        title_line.addClass('active-line');
        title_txt_cta.addClass('active-cta');
        desc_text.addClass('decsription-short-text-active');
        explore_arrow.removeClass('arrow-explore-active');
        blackout.fadeOut(400);
    }, 2200);


    /*
     * Explore button intialization
     */

    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            links.on('click', {
                el: this.el,
                multiple: this.multiple
            }, this.dropdown)
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }

        var accordion = new Accordion($('#accordion'), false);
    });

    /* Burger Menu Icon */

    burger_icon.click(function() {
        $(this).toggleClass('open');
        accordion.toggleClass('accordion-active');

    });

    menu_list.click(function() {
        burger_icon.toggleClass('open');
        setTimeout(function() {
            accordion.toggleClass('accordion-active');
        }, 1000);
    });

    /* Explore block */

    explore_block.mouseenter(function() {
        explore_arrow.addClass('arrow-explore-hover');
        title_cta.addClass('CoverTitles-cta-hover');
        title_line.addClass('hover-line');
    });

    explore_block.mouseleave(function() {
        explore_arrow.removeClass('arrow-explore-hover');
        title_cta.removeClass('CoverTitles-cta-hover');
        title_line.removeClass('hover-line');
    });

    /* Prev Next buttons */

    go_next.click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    go_prev.click(function() {
        $.fn.fullpage.moveSectionUp();
    });

    /* Transition */

    $('a.arrow-explore').find('a').click(function(e) {
        redirect = this.getAttribute('href');
        e.preventDefault();
        $('body').fadeOut(600, function() {
            document.location.href = redirect
        });
    });


    /*
     * Particles
     */

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: !0,
                    value_area: 1200
                }
            },
            color: {
                value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#fff"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: .5,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: .3,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 120,
                color: "#919191",
                opacity: .4,
                width: 1
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !1
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 1
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    });



    /*
     * Core
     */

    $('#core').fullpage({
        sectionsColor: ['#333', '#333', '#333', '#333', '#333'],
        anchors: ['about', 'culture', 'vishen', 'book', 'team'],
        scrollingSpeed: 700,
        menu: '.submenu',


        afterRender: function() {
            video.get(0).play();
            go_next.addClass('opacity-zero');
            go_prev.addClass('opacity-zero');
        },

        afterLoad: function(anchorLink, index) {
            desc_text.addClass('decsription-short-text-active');
            explore_block.css({
                "transform": "translate3d(0px, 0px, 0px)",
                "opacity": "1"
            });

            setTimeout(function() {
                social.css({
                    "transform": "translate3d(0px, 0px, 0px)",
                    "opacity": "1"
                });
            }, 200);

            if (index == 1) {
                explore_arrow.addClass('arrow-explore-first');
                go_next.addClass('opacity-zero');
                go_prev.addClass('opacity-zero');
                scroll.text('Scroll Down').removeClass('opacity-zero');
            } else if (index !== 1) {
                explore_arrow.removeClass('arrow-explore-first');
                scroll.addClass('opacity-zero');
                go_next.removeClass('opacity-zero');
                go_prev.removeClass('opacity-zero');
            }

            if (index == 2) {}

            if (index == 3) {}

            if (index == 4) {}

            if (index == 5) {
                go_next.addClass('opacity-zero');
                go_prev.addClass('opacity-zero');
                scroll.text('Scroll Up').removeClass('opacity-zero');
            }
        },

        onLeave: function(index, nextIndex, direction) {
            desc_text.removeClass('decsription-short-text-active');
            explore_block.css({
                "transform": "translate3d(0px, 30px, 0px)",
                "opacity": "0"
            });
            social.css({
                "transform": "translate3d(0px, 20px, 0px)",
                "opacity": "0"
            });
        }


    });
});
