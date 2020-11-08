function imgOnLoad() {
    for (var e = document.getElementsByTagName('img'), t = 0; t < e.length; t++)
        e[t].getAttribute('data-src') && e[t].setAttribute('src', e[t].getAttribute('data-src'));
}
!(function () {
    var o = document.getElementsByClassName('header-video'),
        e = !1;
    if (0 < o.length && window.innerWidth > 1250) {
        var t = (o = o[0]).querySelectorAll('source');

        function i() {
            1 == e && $(window).scrollTop() < 600 && ((e = !1), (videoPromise = o.play()));
        }
        t[t.length - 1].addEventListener(
            'error',
            function (e) {
                var t = $(o).parent().find('.fallback-gif')[0];
                $(t).removeAttr('hidden'), (t.innerHTML = o.innerHTML), o.parentNode.replaceChild(t, o);
            },
            !1
        ),
            $(window).on('mousemove scroll click', function () {
                i();
            }),
            (o.onended = function () {
                setTimeout(function () {
                    e = !0;
                }, 500);
            }),
            setTimeout(function () {
                (e = !0), i();
            }, 1500);
    }

    var n = $('.vert-loader');
    'true' == localStorage.getItem('page')
        ? setTimeout(function () {
              n.removeClass('show'),
                  setTimeout(function () {
                      n.removeClass('active');
                  }, 750);
          }, 50)
        : n.removeClass('show active');
    var s,
        a = $('.notificator'),
        r = $('.notifier-collapse'),
        l = $('.close-notificator');
    if (0 < a.length && 0 < l.length) {
        var c = 'true' == sessionStorage.getItem('notificationHidden');
        r.on('click', function () {
            a.toggleClass('large'), clearTimeout(s);
        }),
            l.on('click', function () {
                sessionStorage.setItem('notificationHidden', 'true'), a.removeClass('show'), clearTimeout(s);
            }),
            $(window).on('scroll', function () {
                var e = $(window).height() / 5;
                $(window).scrollTop() > e &&
                    0 == c &&
                    ((c = !0),
                    a.addClass('show large'),
                    (s = setTimeout(function () {
                        a.removeClass('large');
                    }, 1e4)));
            });
    }
})(),
    (window.onload = function () {
        imgOnLoad();
    }),
    (window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }),
    jQuery(function (l) {
        var i = l('body');
        i.show();
        var e,
            n = window.innerWidth,
            o = l(window),
            t = l('#mastfoot').outerHeight();
        l('.l-header, .l-horizontal, .info-buttons-wrapper').addClass('show');
        var s,
            a = l('.container-load').innerWidth(),
            r = (o.innerWidth() - a) / 2;

        function c(e) {
            (e = e || window.event).preventDefault && e.preventDefault(), (e.returnValue = !1);
        }

        function d(e) {
            if (e.keyCode || e.which) return c(e), !1;
        }

        function u() {
            window.removeEventListener && window.removeEventListener('DOMMouseScroll', c, !1),
                (window.onmousewheel = document.onmousewheel = null),
                (window.onwheel = null),
                (window.ontouchmove = null),
                (document.onkeydown = null);
        }

        function m(e, t) {
            if (('function' == typeof jQuery && e instanceof jQuery && (e = e[0]), null != e)) {
                var o = e.getBoundingClientRect();
                return (
                    0 <= o.top &&
                    0 <= o.left &&
                    o.bottom <= (window.innerHeight + t || document.documentElement.clientHeight + t) &&
                    o.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
        }
        l('.outer-load').css('height', '9999px'),
            l('.outer-load').css('width', r + 'px'),
            l('.outer-load')
                .eq(1)
                .css('left', r + a + 'px'),
            'true' === localStorage.getItem('page')
                ? setTimeout(function () {
                      l('.outer-load').css('height', '0'),
                          l('.l-loading').addClass('show'),
                          l('.outer-load')
                              .eq(1)
                              .css({
                                  right: r + a + 'px',
                                  left: 'auto',
                              }),
                          l('.l-loading').addClass('hide-alt'),
                          setTimeout(function () {
                              l('.outer-load').css('height', '0'),
                                  l('.l-loading').removeClass('show'),
                                  l('.l-loading').removeClass('hide-alt'),
                                  l('.outer-load')
                                      .eq(1)
                                      .css({
                                          right: 'auto',
                                          left: r + a + 'px',
                                      }),
                                  localStorage.removeItem('page');
                          }, 1300);
                  }, 0)
                : l('.l-loading').removeClass('show show-darkgray'),
            l('.outer-load').css('height', '0'),
            (s = l('#newsletter-subscribe').length ? l('#newsletter-subscribe').outerHeight() : 0),
            (e = s + t + 100),
            1025 < n && i.css('margin-bottom', t + 'px'),
            setTimeout(function () {
                i.addClass('fade-lines');
            }, 400);
        var p,
            h,
            f,
            w,
            g,
            v = !0;

        function b(e, t, o) {
            setTimeout(function () {
                e.classList.add('show');
            }, o * t);
        }
        (p = document.querySelectorAll('.banner-caption .write-text .outer-wrapper')),
            (h = document.querySelectorAll('.scrollspy-nav li')),
            (f = document.getElementsByTagName('body')[0]),
            (w = document.querySelectorAll(
                '.single-portfolio-count a, #banner .animate-bigletter, .scrollspy-nav, #forms-popup .contact-us-wrapper, .scrollspy-nav span, #banner .banner-object, .breadcrumbs ul > li, .portfolio-count'
            )),
            (g = document.querySelectorAll('.info-buttons-wrapper .popart-btn')),
            setTimeout(function () {
                f.classList.remove('hide-header');
                for (var e = 0; e < w.length; e++) w[e].classList.add('show');
                for (var t = 0; t < p.length; t++) b(p[t], t, 300);
                for (var o = 0; o < h.length; o++) b(h[o], o, 200);
                u();
            }, 800),
            setTimeout(function () {
                f.classList.remove('slow-header');
                for (var e = 0; e < g.length; e++) b(g[e], e, 150);
                v = !0;
            }, 1300),
            (v = !0),
            l('a').on('click', function (e) {
                var t = l(this).attr('href');
                t.includes('javascript:;') ||
                    '' == t ||
                    t.includes('#') ||
                    t.includes('tel:') ||
                    t.includes('mob:') ||
                    t.includes('mailto:') ||
                    t.includes('file:') ||
                    t.includes('fax:') ||
                    (e.preventDefault(),
                    v &&
                        ((v = !1),
                        l(this).attr('data-href-title') && l(this).attr('data-href-title'),
                        localStorage.setItem('page', 'true'),
                        l('.vert-loader').addClass('show active'),
                        l('.l-loading').addClass('show show-darkgray'),
                        setTimeout(function () {
                            window.location = t;
                        }, 900)));
            }),
            l(window).on('popstate', function (e) {
                var t;
                e.preventDefault(),
                    v &&
                        ((v = !1),
                        localStorage.setItem('page', 'true'),
                        console.log('loading..'),
                        console.log(window.history),
                        (t = null !== window.history.state ? window.history.state.href : ''),
                        l('.vert-loader').addClass('show active'),
                        l('.l-loading').addClass('show show-darkgray'),
                        setTimeout(function () {
                            window.location = t;
                        }, 500));
            });
        var C = 0;

        function $() {
            window.addEventListener && window.addEventListener('DOMMouseScroll', c, !1),
                (window.onwheel = c),
                (window.onmousewheel = document.onmousewheel = c),
                (window.ontouchmove = c),
                (document.onkeydown = d),
                l('#nav-btn').addClass('active'),
                l('#navsidebar').addClass('active'),
                l('.contact-us-wrapper').removeClass('show'),
                i.addClass('blur'),
                l('.menu-btn').addClass('open');
        }

        function y() {
            l('#navsidebar').removeClass('active'),
                l('#nav-btn').removeClass('active'),
                setTimeout(function () {
                    l('.contact-us-wrapper').addClass('show');
                }, 500),
                i.removeClass('blur'),
                l('.menu-btn').removeClass('open'),
                u();
        }
        if (
            (o.scroll(function (e) {
                var t = l(this).scrollTop(),
                    o = l('#sidebar');
                1024 < window.innerWidth
                    ? (C < t
                          ? (i.addClass(' '), l('#side-nav').removeClass('visible-header'), o.length && o.addClass('show'))
                          : t <= 50
                          ? i.removeClass(' ')
                          : (i.removeClass('hide-header'), l('#side-nav').addClass('visible-header')),
                      (C = t))
                    : 600 < t &&
                      (C < t
                          ? (i.addClass(' '), l('#side-nav').removeClass('visible-header'), o.length && o.addClass('show'))
                          : t <= 50
                          ? i.removeClass(' ')
                          : (i.removeClass('hide-header'), l('#side-nav').addClass('visible-header')),
                      (C = t));
            }),
            1250 < n
                ? l('#nav-btn').on('click', function () {
                      l(this).hasClass('active') ? y() : $();
                  })
                : (l('#nav-btn').on('click', function () {
                      l(this).hasClass('active') ? y() : $();
                  }),
                  i.on('mouseup', function (e) {
                      var t = l('#navsidebar');
                      t.is(e.target) || 0 !== t.has(e.target).length || l('#nav-btn').is(e.target) || y();
                  })),
            l('.sub-menu-btn').on('click', function () {
                var self = this;

                var subMenuBtns = document.querySelectorAll('.sub-menu-btn');

                for (var i = 0; i < subMenuBtns.length; i++) {
                    if (subMenuBtns[i] == self) {
                        if (subMenuBtns[i].classList.contains('open')) {
                            subMenuBtns[i].classList.remove('open');
                            l(subMenuBtns[i]).siblings('.sub-menu-wrapper, .sub-menu-wrapper-simple').stop().slideUp();
                        } else {
                            subMenuBtns[i].classList.add('open');
                            l(subMenuBtns[i]).siblings('.sub-menu-wrapper, .sub-menu-wrapper-simple').stop().slideDown();
                        }
                    } else {
                        subMenuBtns[i].classList.remove('open');
                        l(subMenuBtns[i]).siblings('.sub-menu-wrapper, .sub-menu-wrapper-simple').stop().slideUp();
                    }
                }

                // l(this).toggleClass("open"), l(this).siblings(".sub-menu-wrapper, .sub-menu-wrapper-simple").stop().slideToggle()
            }),
            1250 < window.outerWidth)
        )
            o.on('scroll', function () {
                l('.scroll-show').length &&
                    l('.scroll-show').each(function (e, t) {
                        var o = l(t).outerHeight() / 2;
                        if (m(l(t), o)) {
                            var i = '#' + l(t).attr('id');
                            l(t).find('.yellow-bg').addClass('show'),
                                l(t).find('.yellow-block').addClass('show'),
                                '#homeblog' == i
                                    ? l('#homeblog .outer-wrapper').addClass('show')
                                    : l(t)
                                          .find('.outer-wrapper')
                                          .each(function (e, t) {
                                              var o = l(t).find('.outer-wrapper').length;
                                              o -= l(t).find('.write-all .outer-wrapper').length;
                                              var i = l(t).parent().hasClass('write-all') ? o : e;
                                              setTimeout(function () {
                                                  l(t).addClass('show');
                                              }, 300 * i);
                                          });
                        }
                    }),
                    l('.animate-bigletter').length &&
                        l('.animate-bigletter').each(function () {
                            m(l(this), 0) && l(this).addClass('show');
                        }),
                    l('.yellow-block').length &&
                        l('.yellow-block').each(function () {
                            m(l(this), 300) && l(this).addClass('show');
                        }),
                    l('.section-image').length &&
                        l('.section-image').each(function () {
                            if (m(l(this), 300)) {
                                l(this).addClass('show');
                                var e = l(this);
                                setTimeout(function () {
                                    e.hasClass('plx') && e.addClass('no-delay');
                                }, 500);
                            }
                        }),
                    l('.about-testimonials').length &&
                        m(l('.testimonials-statistics'), 300) &&
                        T &&
                        (l('.ts-inc').each(function (e, t) {
                            setTimeout(function () {
                                var e = parseInt(l(t).text());
                                l(t).text(e + 1);
                            }, 200 * e + 500);
                        }),
                        (T = !1));
            });
        else {
            0 < l('.animate-bigletter').length && l('main .animate-bigletter').addClass('show'),
                0 < l('.section-image').length && l('.section-image').addClass('show'),
                0 < l('.yellow-block').length && l('main .yellow-block').addClass('show'),
                0 < l('.section-content').length && l('main .outer-wrapper').addClass('show');
            var k = setTimeout(function () {
                l('main').addClass('show'), clearTimeout(k);
            }, 3300);
        }
        var T = !0;
        if (
            (o.on('scroll', function () {
                var e = l('#homeslides-wrapp');
                if (e.length) {
                    var t = e.attr('style');
                    t &&
                        (-1 === t.search('matrix')
                            ? ((t = t.replace('transform: translate(', '').replace('%, 0%) translate3d(0px, 0px, 0px);', '')),
                              40 < (t = -1 * parseInt(t)) &&
                                  T &&
                                  (l('.ts-inc').each(function (e, t) {
                                      setTimeout(function () {
                                          var e = parseInt(l(t).text());
                                          l(t).text(e + 1);
                                      }, 200 * e + 500);
                                  }),
                                  (T = !1)),
                              l('#scrollspy').addClass('display-scrolling'))
                            : l('#scrollspy').removeClass('display-scrolling'));
                }
            }),
            1270 < n &&
                (function () {
                    var e = document.querySelectorAll('.container')[1],
                        t = document.querySelectorAll('.hi-wrapper'),
                        o = window.innerWidth,
                        i = (window.innerWidth - e.clientWidth - 10) / 2;
                    o < 1650 && (i += (e.clientWidth - 30) / 3);
                    for (var n = 0; n < t.length; n++) t[n].style.width = i + 'px';
                })(),
            l('#toTop').on('click', function (e) {
                e.preventDefault(),
                    l('html, body').animate(
                        {
                            scrollTop: 0,
                        },
                        750
                    );
            }),
            l('#sidebar'))
        ) {
            function x(e, t) {
                (this.wrapper = document.getElementById('sidebar')),
                    (this.element = document.getElementById('side-nav')),
                    (this.fixed = !1),
                    (this.itemDelay = 0.05),
                    (this.width = 0),
                    (this.resizeTimer = '');
                var o = this;
                setTimeout(function () {
                    l('#sidebar').length && o.sidebarInit();
                }, 500);
            }
            (x.prototype.sidebarInit = function () {
                var e, t;
                (t = this),
                    l('#sidebar').length &&
                        (1270 < o.width() && (t.getWidth(), t.itemsDelay()),
                        window.addEventListener('scroll', function () {
                            t.sticky(t.wrapper);
                        }),
                        window.addEventListener('resize', function () {
                            clearTimeout(e),
                                1270 < o.width()
                                    ? (e = setTimeout(function () {
                                          t.getWidth();
                                      }, 150))
                                    : (t.wrapper.style.width = '100%');
                        }));
            }),
                (x.prototype.ajaxInit = function (e) {
                    setTimeout(this.sidebarInit, e);
                }),
                (x.prototype.itemsDelay = function () {
                    var e, t, o, i, n, s, a;
                    if (l('#sidebar').length) {
                        for (
                            e = (a = this).element.childNodes[1],
                                t = a.element.childNodes[3].children,
                                o = a.element.childNodes[7].children,
                                i = a.itemDelay,
                                i = (s = function (e, t) {
                                    return (e.style.transitionDelay = t + 's'), t + a.itemDelay;
                                })(e, 0.3),
                                n = 0;
                            n < t.length;
                            n++
                        )
                            i = s(t[n], i);
                        for (n = 0; n < o.length; n++) i = s(o[n], i);
                    }
                }),
                (x.prototype.getWidth = function () {
                    var e, t;
                    l('#sidebar').length &&
                        ((t = window.innerWidth),
                        document.getElementById('main'),
                        (e = document.querySelector('.l-horizontal')),
                        (this.wrapper.style.width = 1850 < t ? '290px' : e.offsetLeft - 5 + 'px'));
                }),
                (x.prototype.sticky = function (e) {
                    var t, o, i, n, s;
                    l('#sidebar').length &&
                        ((s = document.getElementById('sidebar')),
                        (t = s.childNodes[1].childNodes[7]),
                        document.body,
                        (o = window.pageYOffset),
                        (i = document.getElementById('main').clientHeight),
                        window.innerHeight,
                        i <= o ||
                            (n =
                                90 < o
                                    ? (s.classList.add('show'),
                                      clearTimeout(n),
                                      setTimeout(function () {
                                          t.classList.add('no-delay');
                                      }, 400))
                                    : (s.classList.remove('show'),
                                      clearTimeout(n),
                                      setTimeout(function () {
                                          t.classList.remove('no-delay');
                                      }, 400))));
                }),
                (x.prototype.serializer = function () {
                    var o = Array.prototype.slice.call(arguments, 0);
                    return function () {
                        var e, t;
                        for (t = 0; t < o.length; t++) if (!1 === (e = o[t].apply(this, arguments))) return e;
                        return e;
                    };
                }),
                (site_sidebar = new x('side-nav', 'sidebar'));
        }
        l('.menu-item>span').on('click', function () {
            //            l(this).siblings().stop().slideToggle();
            //            if (l(this).find(".menu-item-state").hasClass("open-submenu")) {
            //
            //                (l(this).find(".menu-item-state").removeClass("open-submenu"), l(this).find(".menu-item-state").text("+"))
            //            } else {
            //                (l(this).find(".menu-item-state").addClass("open-submenu"), l(this).find(".menu-item-state").text("-"))
            //
            //            }

            var self = this;
            var myitems = document.querySelectorAll('.menu-item-state');
            var submenus = document.querySelector('.menu').querySelectorAll('.submenu');
            for (var i = 0; i < myitems.length; i++) {
                if (myitems[i] != self.querySelector('.menu-item-state')) {
                    l(submenus[i]).slideUp();
                    myitems[i].classList.remove('open-submenu');
                    myitems[i].innerHTML = '+';
                } else {
                    if (myitems[i].classList.contains('open-submenu')) {
                        l(submenus[i]).slideUp();
                        myitems[i].classList.remove('open-submenu');
                        myitems[i].innerHTML = '+';
                    } else {
                        l(submenus[i]).slideDown();
                        myitems[i].classList.add('open-submenu');
                        myitems[i].innerHTML = '-';
                    }
                }
            }
            //
        }),
            (function () {
                if (!l('#sidebar')) return;
                if (l('#sidebar ul li a').parent().hasClass('active-sidebar-item')) return;
                for (var e = l('#sidebar ul li a'), t = window.location.href, o = 0; o < e.length; o++)
                    if (-1 < t.indexOf(l(e[o]).attr('href'))) {
                        l(e[o]).parent().addClass('active-sidebar-item'),
                            l(e[o]).closest('.submenu').show(),
                            l(e[o]).closest('.menu-item').find('.menu-item-state').addClass('open-submenu').text('-');
                        break;
                    }
            })(),
            1023 < n &&
                l('.x-btn').hover(
                    function () {
                        var e = l(this);
                        e.addClass('hover-in'),
                            setTimeout(function () {
                                e.addClass('hover-in-alt');
                            }, 175),
                            setTimeout(function () {
                                e.removeClass('hover-in-alt');
                            }, 350);
                    },
                    function () {
                        var e = l(this);
                        e.removeClass('hover-in'), e.removeClass('hover-in-alt');
                    }
                ),
            1023 < n &&
                l('.draggable-btn').mousedown(function (e) {
                    if ((e.preventDefault(), 1 === e.which)) {
                        var o = l(this).children('.x-btn'),
                            t = o.parent().innerHeight(),
                            i = parseInt(o.css('top')),
                            n = o.css('top', '').position().top;
                        o.css({
                            top: i + 'px',
                        });
                        var s = 0 - n,
                            a = t - n - o.outerHeight(),
                            r = e.clientY;
                        l(window).on('mousemove', function (e) {
                            o.addClass('drag');
                            var t = i + (e.clientY - r);
                            o.css({
                                top: t + 'px',
                            }),
                                t < s &&
                                    o.css({
                                        top: s + 'px',
                                    }),
                                a < t &&
                                    o.css({
                                        top: a + 'px',
                                    });
                        }),
                            l(window).on('mouseup', function (e) {
                                if (1 === e.which) {
                                    o.removeClass('drag'),
                                        l(window).off('mouseup mousemove'),
                                        o.css({
                                            top: 0,
                                        }),
                                        e.preventDefault();
                                    var t = l(this).children('.x-btn').attr('href');
                                    window.history.pushState({}, null, t);
                                }
                            });
                    }
                });
        var S,
            j,
            I,
            M = l('#forms-popup');

        function z(e) {
            e.show(),
                (j = setTimeout(function () {
                    e.find('.rev-text').each(function (e, t) {
                        setTimeout(function () {
                            l(t).removeClass('temp-hide');
                        }, 250 * e);
                    }),
                        e.find('.write-text .outer-wrapper').each(function (e, t) {
                            setTimeout(function () {
                                l(t).addClass('show');
                            }, 250 * e);
                        });
                }, 700)),
                (I = setTimeout(function () {
                    e.find('.fade-input').each(function (e, t) {
                        setTimeout(function () {
                            l(t).addClass('show');
                        }, 150 * e);
                    }),
                        e.find('.prev-form').fadeIn();
                }, 1150));
        }

        function E(e) {
            M.find('.rev-text').addClass('temp-hide'),
                M.find('.write-text .outer-wrapper').removeClass('show'),
                l('.prev-form').hide(),
                l('.form-container').hide(),
                l('.fade-input').removeClass('show'),
                e.show();
        }

        function L() {
            (this.form = l('#mc-embedded-subscribe-form')),
                (this.submit = this.form.find('input[type="submit"]')),
                (this.fakeSubmit = l('.newsletter-fake-submit')),
                (this.norobotBtn = l('.newsletter-norobot-check-button')),
                (this.messageBtn = l('.newsletter-card-close-button, .newsletter-norobot-close-button')),
                (this.noRobotBool = !1),
                (this.generateID = Math.random().toString(36).substr(2, 5));
            var o = (this._this = this);
            l(window).on('click touchend', o.outsideClick),
                this.messageBtn.on('click', o.closeMessage),
                0 < this.form.length &&
                    (this.fakeSubmit.on('click', o.noRobotForm),
                    this.norobotBtn.on('click', function (e) {
                        var t = l('.no-robot-input').val();
                        O.generateID === t
                            ? (l('.norobot-notification').fadeOut(),
                              (O.noRobotBool = !0),
                              e && e.preventDefault(),
                              o.checkForm() && o.submitForm(),
                              (O.noRobotBool = !1))
                            : l('.norobot-notification').fadeIn();
                    }));
        }
        l('#contact-us').on('click', function () {
            if (M.hasClass('open')) {
                clearTimeout(S);
                clearTimeout(j);
                clearTimeout(I);
                document.body.style.overflow = 'visible';
                M.find('.forms-wrapper').fadeOut(250, function () {
                    E(l(this)), M.removeClass('open');
                });
            } else {
                M.addClass('open'), z(l('#chose-form'));
                document.body.style.overflow = 'hidden';
            }
        }),
            l('.chose-btn').on('click', function () {
                var e = l(this).attr('data-btn-type'),
                    t = l(this).attr('data-form');
                M.find('.forms-wrapper').fadeOut(250, function () {
                    E(l(this));
                }),
                    (S = setTimeout(function () {
                        z(l('open-form' == e ? '#' + t : '#chose-form'));
                    }, 300));
            }),
            l('.carrer-btn').on('click', function () {
                var e = l(this).attr('data-btn-type'),
                    t = l(this).attr('data-form');
                M.find('.forms-wrapper').fadeOut(250, function () {
                    E(l(this));
                }),
                    (S = setTimeout(function () {
                        z(l('open-form' == e ? '#' + t : '#chose-form'));
                    }, 300));
            }),
            l('.carrer-btn').on('click', function () {
                l('#contact-us').trigger('click');
                var e = l(this).siblings('.section-title').text();
                'Web dizajner' == e
                    ? (e = 'Web Dizajner')
                    : 'Grafički dizajner' == e
                    ? (e = 'Grafički Dizajner')
                    : 'Front-end developer' == e
                    ? (e = 'Front-end Developer')
                    : 'Back-end developer' == e
                    ? (e = 'Back-end Developer')
                    : 'SEO specijalista' == e && (e = 'SEO');
                var t = l('.f-opt:contains("' + e + '")');
                l(t).trigger('click');
            }),
            l('.order-btn').on('click', function () {
                var e = l(this).attr('data-btn-type'),
                    t = l(this).attr('data-form');
                M.find('.forms-wrapper').fadeOut(250, function () {
                    E(l(this));
                }),
                    (S = setTimeout(function () {
                        z(l('open-form' == e ? '#' + t : '#chose-form'));
                    }, 300));
            }),
            l('.order-btn').on('click', function () {
                l('#contact-us').trigger('click');
            }),
            l('.fake-options').on('mouseleave', function () {
                var e = l(this).siblings('.fake-select-text');
                e.hasClass('nothing-selected') ? e.text('') : e.text(l(this).siblings('.fake-select-text').attr('data-fakeval'));
            }),
            l('.f-opt').on('mouseenter', function () {
                l(this).parent('.fake-options').siblings('.fake-select-text').text(l(this).text());
            }),
            l('.f-opt').on('click', function () {
                var e = l(this).text(),
                    t = l(this).parent('.fake-options').siblings('.fake-select-text');
                t.removeClass('nothing-selected'),
                    t.addClass('selected'),
                    t.parents('.fake-select').addClass('selected'),
                    t.parents('.fake-select').siblings('input').val(e),
                    t.text(e),
                    t.attr('data-fakeval', e),
                    t.addClass('selecting'),
                    l('.budget-hidden-input').val(e),
                    setTimeout(function () {
                        t.removeClass('selecting');
                    }, 500);
            }),
            l('.fake-input-file').on('click', function () {
                l(this).next('input[type="file"]').trigger('click');
            }),
            l('input[type="file"]').on('change', function () {
                var e = l(this).val();
                1 < l(this)[0].files.length
                    ? l(this)
                          .prev('.fake-input-file')
                          .text(l(this)[0].files.length + ' files were added.')
                    : l(this).prev('.fake-input-file').text(e);
            }),
            (function () {
                if (l('.company-info-holder').length) {
                    var e = 160;
                    n < 1650 && (e = 360);
                    var t = l('.company-info-holder').offset().top,
                        o = l('.contact-page').offset().top - (l(window).height() - l('.contact-page').innerHeight() - e);
                    l(window).on('scroll', function (e) {
                        l(window).scrollTop() >= o ? l('.maps').addClass('bottom-map') : l('.maps').removeClass('bottom-map'),
                            l(this).scrollTop() >= t && l(window).scrollTop() <= o
                                ? l('.maps').addClass('fix-map')
                                : l('.maps').removeClass('fix-map');
                    });
                }
                n < 767 &&
                    l('.map-init').on('click', function (e) {
                        l('html,body').animate(
                            {
                                scrollTop: l('.maps').offset().top - 78,
                            },
                            400
                        );
                    });
            })(),
            l('.accordion .x-btn').on('click', function (e) {
                e.preventDefault();
                var t = document.querySelectorAll('.accordion'),
                    o = this.parentNode.parentNode;
                if (o.classList.contains('active-acc')) o.classList.remove('active-acc'), (o.children[0].style.maxHeight = '120px');
                else {
                    for (var i = 0; i < t.length; i++)
                        t[i].classList.contains('active-acc') && (t[i].classList.remove('active-acc'), (t[i].children[0].style.maxHeight = '120px'));
                    o.classList.add('active-acc'), (o.children[0].style.maxHeight = o.scrollHeight + 'px');
                }
                setTimeout(function () {
                    var e;
                    (e = l(o)),
                        l('html, body').animate(
                            {
                                scrollTop: e.offset().top + 100,
                            },
                            500
                        );
                }, 700);
            }),
            0 < l('.sitemap-row-wrapper').length &&
                l('.sitemap-row-wrapper').masonry({
                    itemSelector: '.sitemap-row',
                    columnWidth: '.sitemap-row',
                    percentPosition: !0,
                }),
            (L.prototype.submitForm = function () {
                O.noRobotBool &&
                    l.ajax({
                        type: this.form.attr('method'),
                        url: this.form.attr('action'),
                        data: this.form.serialize(),
                        cache: !1,
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        error: function (e) {
                            O.errorMessage();
                        },
                        success: function (e) {
                            'success' != e.result ? O.errorMessage() : O.successMessage();
                        },
                    });
            }),
            (L.prototype.checkForm = function () {
                return this.form.serialize();
            }),
            (L.prototype.successMessage = function () {
                O.closeMessage(),
                    l('.newsletter-message.newsletter-success').css({
                        visibility: 'visible',
                        opacity: 1,
                    });
            }),
            (L.prototype.errorMessage = function () {
                O.closeMessage(),
                    l('.newsletter-message.newsletter-error').css({
                        visibility: 'visible',
                        opacity: 1,
                    });
            }),
            (L.prototype.closeMessage = function () {
                l('.newsletter-message').css({
                    visibility: 'hidden',
                    opacity: 0,
                });
            }),
            (L.prototype.noRobotForm = function () {
                var e;
                '' !== l('.mc-field-group .email').val() &&
                ((e = l('.mc-field-group .email').val()),
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    String(e).toLowerCase()
                ))
                    ? (l('.no-robot-input').val(''),
                      (O.generateID = Math.random().toString(36).substr(2, 5)),
                      l('.newsltter-norobot-id').text(O.generateID),
                      l('.newsletter-norobot').css({
                          visibility: 'visible',
                          opacity: 1,
                      }))
                    : O.errorMessage();
            }),
            (L.prototype.outsideClick = function (e) {
                e.stopPropagation(), l(e.target).hasClass('newsletter-message') && O.closeMessage();
            });
        var D,
            O = new L();

        function H(t, o, i) {
            var e = t.find('.member-info-wrapp').html(),
                n = t.find('img').data('full-img'),
                s = l('<img>');
            l(e).appendTo(D),
                s.attr('src', n),
                s.on('load', function () {
                    D.css('background-image', 'url(images/demo/test-BG.jpg)');
                    var e = s.attr('src');
                    D.find('.team-img-wrapper').prepend('<img src="' + e + '" />'),
                        setTimeout(function () {
                            D.addClass('open');
                        }, 500),
                        setTimeout(function () {
                            D.find('.team-img-wrapper').css({
                                right: 0,
                                opacity: 1,
                            });
                        }, 2500),
                        o &&
                            i &&
                            setTimeout(function () {
                                t.removeClass('dropped'),
                                    t.css({
                                        left: o,
                                        top: i,
                                    });
                            }, 2e3);
                });
        }
        l('.no-robot-input').on('copy paste cut', function () {
            return !1;
        }),
            o.on('scroll', function () {
                l('.team-page').length && o.scrollTop() > l('#banner').outerHeight()
                    ? l('#dropper').addClass('show')
                    : l('#dropper').removeClass('show'),
                    Math.floor(l(document).height() - l(document).scrollTop() - l(window).height()) < e
                        ? l('#dropper').addClass('hide-alt')
                        : l('#dropper').removeClass('hide-alt');
            }),
            0 < l('#team-popup').length &&
                ((D = l('#team-popup')),
                1250 < n &&
                    (l('.team-member-container').draggable({
                        scroll: !0,
                        scrollSensitivity: 100,
                        revert: 'invalid',
                        containment: '#main',
                    }),
                    l('.team-member-container').each(function (e, t) {
                        var o = l(t).css('left'),
                            i = l(t).css('top');
                        l(t).attr('data-left', o), l(t).attr('data-top', i);
                    })),
                1250 < n
                    ? l('#dropper').droppable({
                          drop: function (e, t) {
                              var o = t.draggable,
                                  i = l(o).attr('data-left'),
                                  n = l(o).attr('data-top');
                              o.addClass('dropped'), H(o, i, n);
                          },
                      })
                    : l('.team-member-container').on('click', function () {
                          H(l(this));
                      }),
                l('.team-member-container').on('mousedown', function () {
                    l('.team-member-container').removeClass('last-moved'), l(this).addClass('last-moved');
                }),
                D.find('.close-btn').on('click', function () {
                    D.removeClass('open'),
                        D.find('img').remove(),
                        D.find('.team-img-wrapper').css({
                            right: '-50vw',
                            opacity: 0,
                        }),
                        setTimeout(function () {
                            D.find('.member-info').remove();
                        }, 2e3);
                })),
            l('.has-parallax').length &&
                1250 < n &&
                void 0 !== window.ScrollMagic &&
                ((scrollController = new ScrollMagic.Controller({
                    refreshInterval: 500,
                })),
                l('.has-parallax').each(function () {
                    var e = l(this).find('.parallax');
                    l(e).css('top', l(e).data('offset'));
                    var t = l(e).data('parallax-offset'),
                        o = new TimelineMax().add([
                            TweenMax.fromTo(
                                e,
                                2,
                                {
                                    css: {
                                        y: 0,
                                    },
                                },
                                {
                                    css: {
                                        y: t,
                                    },
                                    ease: Power1.easeout,
                                }
                            ),
                        ]);
                    new ScrollMagic.Scene({
                        triggerElement: this,
                        duration: l('#main').height(),
                    })
                        .setTween(o)
                        .addTo(scrollController);
                })),
            0 < l('.main-portfolio-image').length &&
                l(document).on('scroll', function () {
                    if (window.innerWidth <= 1023)
                        l('.single-portfolio-slider-wrapper').css({
                            visibility: 'visible',
                            opacity: 1,
                        });
                    else {
                        var e = l('.main-portfolio-image'),
                            t = l(window).scrollTop(),
                            o = e.offset().top - t;
                        e.position().top + e.outerHeight(!0) - t < 0
                            ? l('.single-portfolio-slider-wrapper').css({
                                  visibility: 'hidden',
                                  opacity: 0,
                              })
                            : o < 0
                            ? l('.single-portfolio-slider-wrapper').css({
                                  visibility: 'visible',
                                  opacity: 1,
                              })
                            : l('.single-portfolio-slider-wrapper').css({
                                  visibility: 'hidden',
                                  opacity: 0,
                              });
                    }
                }),
            l('.scroll-btn').fadeIn(3e3).css('display', 'inline-block'),
            l('.mouse').fadeIn(3e3).css('display', 'inline-block'),
            l('.mouse span').fadeIn(3e3).css('display', 'inline-block'),
            l('.portfolio-cat').click(function () {
                l('html,body').animate(
                    {
                        scrollTop: l('#name-a').offset().top,
                    },
                    'slow'
                );
            }),
            l('.narucivanje-info-buttons-wrapper .popart-btn').click(function () {
                l('html, body').animate(
                    {
                        scrollTop: l('.page-order').offset().top,
                    },
                    2e3
                );
            });
    }),
    0 < $('.showcase-img-trigger').length &&
        (function () {
            var e,
                s,
                a = $('.showcase-img-trigger'),
                o = (a.length, !0);

            function t(e) {
                var t = $(a[e]).parent().children('.showcase-img').children().attr('href').toString();
                o
                    ? ($('body').addClass('prevent-desktop-scrolling'),
                      $('.showcase-fullimage-wrapper')
                          .show()
                          .delay(150)
                          .queue(function () {
                              $(this)
                                  .addClass('open-slider')
                                  .css({
                                      opacity: 1,
                                  })
                                  .dequeue();
                          }),
                      $('.showcase-fullimage-image')
                          .attr('src', t)
                          .delay(150)
                          .queue(function () {
                              $(this)
                                  .css({
                                      opacity: 1,
                                      transform: 'scale(1)',
                                  })
                                  .dequeue();
                          }),
                      (o = !1))
                    : $('.showcase-fullimage-image')
                          .delay(300)
                          .queue(function () {
                              $(this)
                                  .css({
                                      opacity: 1,
                                      transform: 'scale(1)',
                                  })
                                  .attr('src', t)
                                  .dequeue();
                          });
            }

            function i(e, t, o) {
                t
                    ? $('.showcase-fullimage-image').css({
                          opacity: 0,
                          transform: 'scale(0.7)',
                      })
                    : e
                    ? $('.showcase-fullimage-image').css({
                          opacity: 0,
                          transform: 'scale(0.7)',
                      })
                    : o &&
                      ($('.showcase-fullimage-image').css({
                          opacity: 0,
                          transform: 'scale(5)',
                      }),
                      $('.showcase-fullimage-wrapper')
                          .css({
                              opacity: 0,
                          })
                          .delay(750)
                          .queue(function () {
                              $(this).removeClass('open-slider').hide().dequeue();
                          }));
            }

            function r() {
                i(null, !0, null), t(s + 1), s++;
            }

            function l() {
                i(!0, null, null), t(s - 1), s--;
            }

            function n() {
                $('body').removeClass('prevent-desktop-scrolling'), i(null, null, !0), (o = !0);
            }
            $('.showcase-fullimage-wrapper .next-arrow').on('click', function () {
                s === a.length - 1 && (s = -1), r();
            }),
                $('.showcase-fullimage-wrapper .prev-arrow').on('click', function () {
                    0 === s && (s = a.length), l();
                }),
                $('.showcase-img-trigger').on('click', function () {
                    return t((e = $(a).index(this))), (s = e), !1;
                }),
                $('.close-showcase-galllery-btn').on('click', n),
                $(window).on('keydown', function (e) {
                    !$('.showcase-fullimage-wrapper').hasClass('open-slider') || (27 !== e.keyCode && 27 !== e.which) || n(),
                        !$('.showcase-fullimage-wrapper').hasClass('open-slider') ||
                            (37 !== e.keyCode && 37 !== e.which) ||
                            (0 === s && (s = a.length), l()),
                        !$('.showcase-fullimage-wrapper').hasClass('open-slider') ||
                            (39 !== e.keyCode && 39 !== e.which) ||
                            (s === a.length - 1 && (s = -1), r());
                }),
                $(window).on('click touchend', function (e) {
                    e.stopPropagation(),
                        ($(e.target).hasClass('open-slider') || $(e.target).hasClass('showcase-fullimage')) &&
                            ($('body').removeClass('prevent-desktop-scrolling'), i(null, null, !0), (o = !0));
                }),
                document.addEventListener(
                    'touchstart',
                    function (e) {
                        (c = e.touches[0].clientX), (d = e.touches[0].clientY);
                    },
                    !1
                ),
                document.addEventListener(
                    'touchmove',
                    function (e) {
                        if (c && d) {
                            var t = e.touches[0].clientX,
                                o = e.touches[0].clientY,
                                i = c - t,
                                n = d - o;
                            Math.abs(i) > Math.abs(n) &&
                                (0 < i && $('.showcase-fullimage-wrapper').hasClass('open-slider')
                                    ? (s === a.length - 1 && (s = -1), r())
                                    : i < 0 && $('.showcase-fullimage-wrapper').hasClass('open-slider') && (0 === s && (s = a.length), l())),
                                (d = c = null);
                        }
                    },
                    !1
                );
            var c = null,
                d = null;
        })();
var logoSrc = 'images/website/logo/popartstudio-logo.mp4';
if (
    (0 < $('.single-portfolio-banner').length && (logoSrc = '../images/website/logo/popartstudio-logo.mp4'),
    $('#site-logo').mouseenter(function () {
        clearTimeout($('img.logo-video').data('timeoutId')), $('.logo-video').prop('src', logoSrc).show();
    }),
    $('#site-logo').mouseleave(function () {
        var e = setTimeout(function () {
            $('.logo-video')
                .fadeOut(300)
                .delay(300)
                .queue(function () {
                    $('.logo-video').prop('src', '');
                })
                .dequeue();
        }, 100);
        $('img.logo-video').data('timeoutId', e);
    }),
    0 < $('.free-seo-analysis').length)
) {
    function scrollToSeoForm(e) {
        e.preventDefault(),
            $('html, body').animate(
                {
                    scrollTop: $('#form-seo-opt').offset().top - 200,
                },
                500
            );
    }
    $('.free-seo-analysis').on('click', scrollToSeoForm);
}
void 0 === window.getComputedStyle(document.body).mixBlendMode && (document.documentElement.className += ' mix-blend-mode-no'),
    $('.scroll-btn').click(function () {
        $('html,body').animate(
            {
                scrollTop: $('#main').offset().top,
            },
            'slow'
        );
    }),
    $('.portfolio-item').removeClass('animation-in'),
    $('.portfolio-item').hide(),
    $('.web-prezentacije-items .portfolio-item').show(),
    $('.web-prezentacije-items .portfolio-item').addClass('loadedAnim'),
    $('.portfolio-cat').click(function () {
        var e = this.getAttribute('id'),
            t = $('.active-sp-count'),
            o = $(t).attr('id');
        $(t).removeClass('active-sp-count'),
            $(this).addClass('active-sp-count'),
            history.pushState(null, null, '?id=' + e),
            $('.web-prezentacije-items .portfolio-item .project-info').addClass('animation-out'),
            $('.web-prezentacije-items .portfolio-item .project-thumbnail .section-image').addClass('animation-out'),
            $('.' + o + ' .project-info').addClass('animation-out'),
            $('.' + o + ' .project-thumbnail .section-image').addClass('animation-out'),
            setTimeout(function () {
                $('.' + o + ' .project-info').removeClass('animation-out'),
                    $('.' + o + ' .project-thumbnail .section-image').removeClass('animation-out'),
                    $('.' + o + ' .project-info').removeClass('animation-in'),
                    $('.' + o + ' .project-thumbnail .section-image').removeClass('animation-in'),
                    $('.' + o).hide(),
                    $('.web-prezentacije-items .portfolio-item .project-info').removeClass('animation-out'),
                    $('.web-prezentacije-items .portfolio-item .project-thumbnail .section-image').removeClass('animation-out'),
                    $('.web-prezentacije-items .portfolio-item .project-info').removeClass('animation-in'),
                    $('.web-prezentacije-items .portfolio-item .project-thumbnail .section-image').removeClass('animation-in'),
                    $('.web-prezentacije-items .portfolio-item').hide(),
                    $('.' + e).show(),
                    $('.' + e + ' .project-info').addClass('animation-in'),
                    $('.' + e + ' .project-thumbnail .section-image').addClass('animation-in');
            }, 500);
    });
var url = window.location.href,
    spl = url.split('=');

function menu(e, t) {
    switch (t) {
        case 'prezentacije':
        case 'ecommerce':
        case 'aplikacije':
        case 'logotipi':
        case 'printdizajn':
        case 'etikete':
        case 'ilustracije':
        case 'presentations':
        case 'onlineshops':
        case 'webapps':
        case 'logos':
        case 'printdesign':
        case 'labels':
        case 'illustrations':
        case 'websites':
        case 'onlinekaufe':
        case 'webapplikationen':
        case 'etiketten':
        case 'illustrationen':
            setMenu(t);
    }
}

function setMenu(e) {
    var t = e,
        o = $('.active-sp-count'),
        i = $(o).attr('id');
    $(o).removeClass('active-sp-count'),
        $('#' + t).addClass('active-sp-count'),
        $('.web-prezentacije-items .portfolio-item .project-info').addClass('animation-out'),
        $('.web-prezentacije-items .portfolio-item .project-thumbnail .section-image').addClass('animation-out'),
        $('.' + i + ' .project-info').addClass('animation-out'),
        $('.' + i + ' .project-thumbnail .section-image').addClass('animation-out'),
        setTimeout(function () {
            $('.' + i + ' .project-info').removeClass('animation-out'),
                $('.' + i + ' .project-thumbnail .section-image').removeClass('animation-out'),
                $('.' + i + ' .project-info').removeClass('animation-in'),
                $('.' + i + ' .project-thumbnail .section-image').removeClass('animation-in'),
                $('.' + i).hide(),
                $('.web-prezentacije-items .portfolio-item .project-info').removeClass('animation-out'),
                $('.web-prezentacije-items .portfolio-item .project-thumbnail .section-image').removeClass('animation-out'),
                $('.web-prezentacije-items .portfolio-item .project-info').removeClass('animation-in'),
                $('.web-prezentacije-items .portfolio-item .project-thumbnail .section-image').removeClass('animation-in'),
                $('.web-prezentacije-items .portfolio-item').hide(),
                $('.' + t).show(),
                $('.' + t + ' .project-info').addClass('animation-in'),
                $('.' + t + ' .project-thumbnail .section-image').addClass('animation-in');
        }, 500);
}

function isPageSectInView() {
    $window.on('scroll', function () {
        $('.scroll-show').length &&
            $('.scroll-show').each(function (e, t) {
                var o = $(t).outerHeight() / 2;
                if (isElementInViewport($(t), o)) {
                    var i = '#' + $(t).attr('id');
                    $(t).find('.yellow-bg').addClass('show'),
                        $(t).find('.yellow-block').addClass('show'),
                        '#homeblog' == i
                            ? $('#homeblog .outer-wrapper').addClass('show')
                            : $(t)
                                  .find('.outer-wrapper')
                                  .each(function (e, t) {
                                      var o = $(t).find('.outer-wrapper').length;
                                      o -= $(t).find('.write-all .outer-wrapper').length;
                                      var i = $(t).parent().hasClass('write-all') ? o : e;
                                      setTimeout(function () {
                                          $(t).addClass('show');
                                      }, 300 * i);
                                  });
                }
            }),
            $('.animate-bigletter').length &&
                $('.animate-bigletter').each(function () {
                    isElementInViewport($(this), 0) && $(this).addClass('show');
                }),
            $('.yellow-block').length &&
                $('.yellow-block').each(function () {
                    isElementInViewport($(this), 300) && $(this).addClass('show');
                }),
            $('.section-image').length &&
                $('.section-image').each(function () {
                    if (isElementInViewport($(this), 300)) {
                        $(this).addClass('show');
                        var e = $(this);
                        setTimeout(function () {
                            e.hasClass('plx') && e.addClass('no-delay');
                        }, 500);
                    }
                }),
            $('.about-testimonials').length &&
                isElementInViewport($('.testimonials-statistics'), 300) &&
                homeWrappInc &&
                ($('.ts-inc').each(function (e, t) {
                    setTimeout(function () {
                        var e = parseInt($(t).text());
                        $(t).text(e + 1);
                    }, 200 * e + 500);
                }),
                (homeWrappInc = !1));
    });
}

function mouseMoveTeam() {
    var o = $('#team-popup');
    o.on('mousemove', function (e) {
        var t = e.pageY / 30 - $('#team-popup').offset().top / 30;
        o.find('img').css('transform', 'translate3d(' + e.pageX / 30 + 'px, ' + -t + 'px, 0px)');
    });
}

function redirectSocial(e, t) {
    $(e).click(function () {
        window.open(t, '_blank');
    });
}
2 <= spl.length && menu(spl[0], spl[1]),
    mouseMoveTeam(),
    -1 != navigator.appVersion.indexOf('Edge') && ($('#scrollspy').addClass('scrollspy-edge'), $('#home-banner-bg').addClass('edge-banner')),
    $(window).scroll(function () {
        0 < $(window).scrollTop() ? $('.site-header').addClass('not-top') : $('.site-header').removeClass('not-top');
    }),
    jQuery(document).ready(function () {
        setTimeout(function () {
            $('.portfolio-wrapper').css('opacity', '1'), $('.breadcrumbs').css('opacity', '1');
        }, 1500);
    }),
    redirectSocial('.fb-sr', 'https://sr-rs.facebook.com/PopArt.Web.Dizajn/'),
    redirectSocial('.tw-sr', 'https://twitter.com/popartns?lang=sr'),
    redirectSocial('.gp-sr', 'https://www.pinterest.com/izradawebsajta/'),
    redirectSocial('.li-sr', 'https://www.linkedin.com/company/popart-studio'),
    redirectSocial('.bh-sr', 'https://www.behance.net/popartns'),
    redirectSocial('.db-sr', 'https://dribbble.com/PopArt-Studio'),
    redirectSocial('.ig-sr', 'https://www.instagram.com/popart.studio/?hl=sr'),
    redirectSocial('.fb-en', 'https://www.facebook.com/PopArt.Web.Dizajn/'),
    redirectSocial('.tw-en', 'https://twitter.com/popartns'),
    redirectSocial('.gp-en', 'https://www.pinterest.com/izradawebsajta/'),
    redirectSocial('.li-en', 'https://www.linkedin.com/company/popart-studio'),
    redirectSocial('.bh-en', 'https://www.behance.net/popartns'),
    redirectSocial('.db-en', 'https://dribbble.com/PopArt-Studio'),
    redirectSocial('.ig-en', 'https://www.instagram.com/popart.studio/');
var didScroll,
    isChromium = window.chrome,
    isOpera = -1 < window.navigator.userAgent.indexOf('OPR') || -1 < window.navigator.userAgent.indexOf('Opera');
null !== isChromium && 1 == isOpera && $('.hi-lang').addClass('hi-lang-o'),
    (-1 == navigator.userAgent.indexOf('MSIE') && 1 != !!document.documentMode) ||
        ($('#home-banner-bg').css('opacity', '1'),
        $('.banner-object picture').css('opacity', '1'),
        $('.home-seo .social-icons').css('display', 'none'),
        $('.portfolio-count-container').addClass('explorer-nav'));
var lastScrollTop = 0,
    delta = 25,
    navbarHeight = $('header').outerHeight();

function hasScrolled() {
    var e = $(this).scrollTop();
    Math.abs(lastScrollTop - e) <= delta ||
        (lastScrollTop < e && navbarHeight < e
            ? ($('#masthead').removeClass('nav-down').addClass('nav-up'), $('.nav-button-wrapper').removeClass('nav-down').addClass('nav-up'))
            : e + $(window).height() < $(document).height() &&
              ($('#masthead').removeClass('nav-up').addClass('nav-down'), $('.nav-button-wrapper').removeClass('nav-up').addClass('nav-down')),
        (lastScrollTop = e));
}

function changeRevState() {
    $('.rev-text').each(function () {
        var e = this,
            t = $(this).attr('data-rev-delay') || 0,
            o = $(this).attr('data-trigger') || '';
        (o = o && '' != o ? o.split(' ') : ''),
            (t = parseInt(t)),
            setTimeout(function () {
                $(e).isOnScreen() && '' == o && $(e).removeClass('temp-hide');
            }, 100 + t);
    });
}
$(window).scroll(function (e) {
    didScroll = !0;
}),
    setInterval(function () {
        didScroll && (hasScrolled(), (didScroll = !1));
    }, 250),
    $('#masthead').addClass('nav-down'),
    ($.fn.isOnScreen = function () {
        var e = $(window),
            t = {
                top: e.scrollTop(),
                left: e.scrollLeft(),
            };
        (t.right = t.left + e.width()), (t.bottom = t.top + e.height());
        var o = this.offset();
        return (
            (o.right = o.left + this.outerWidth()),
            (o.bottom = o.top + this.outerHeight()),
            !(t.right < o.left || t.left > o.right || t.bottom < o.top || t.top > o.bottom)
        );
    }),
    $('.rev-text').parent().addClass('rev-text-wrap'),
    setTimeout(function () {
        changeRevState();
    }, 100);
var width = $(window).width();
$(window).scroll(function () {
    changeRevState(), 1280 < width && ($('.site-footer').isOnScreen() ? $('#sidebar').css('opacity', '0') : $('#sidebar').css('opacity', '1'));
});
var submenu = $('.sub-menu');
if (
    (submenu.each(function () {
        var e = $(this).find('li').length;
        $(this).addClass('sub-menu-has-' + e);
    }),
    0 < $('#team-popup').length)
) {
    function iOS() {
        var e = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
        if (navigator.platform) for (; e.length; ) if (navigator.platform === e.pop()) return !0;
        return !1;
    }
    iOS() && $('#team-popup').addClass('is-ios');
}
