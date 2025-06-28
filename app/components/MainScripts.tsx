// app/components/MainScripts.tsx
'use client';

import { useEffect } from 'react'

export default function MainScripts() {
    useEffect(() => {

        if (typeof window !== "undefined") {
            const $ = window.$ || window.jQuery;
            if (!$) return;

            // 1. Open Sub‐Menu
            $('.drp_btn').on('click.main', function (this: HTMLElement) {
                $(this).siblings('.sub_menu').slideToggle()
            })

            // 2. Preloader fade
            function preloaderFade() {
                $('#preloader').fadeOut('slow')
            }

            const preloaderTimer = window.setTimeout(preloaderFade, 500); // call fade in .5 seconds

            const textSlider = $('#text_slider');
            // const imageSlider = $('#frmae_slider');
            let syncing = false;

            // 3. Initialize all Owl Carousels
            // imageSlider.owlCarousel({
            //     loop: true,
            //     margin: 10,
            //     autoplay: false,
            //     smartSpeed: 1500,
            //     nav: false,
            //     dots: true,
            //     responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
            // });

            textSlider.owlCarousel({
                loop: false,
                margin: 10,
                autoplay: true,
                smartSpeed: 1500,
                nav: true,
                dots: false,
                responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
            });

            textSlider.on('changed.owl.carousel', (_: any, e: any) => {
                if (syncing) return
                syncing = true;
                if (e && e.item && e.item.index) {
                    // imageSlider.trigger('to.owl.carousel', [e.item.index, 600]);
                    syncing = false;
                }
            });

            // imageSlider.on('changed.owl.carousel', (_: any, e: any) => {
            //     if (syncing) return
            //     syncing = true
            //     if (e && e.item && e.item.index) {
            //         textSlider.trigger('to.owl.carousel', [e.item.index, 600]);
            //         syncing = false;
            //     }
            // });

            $('#company_slider').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                smartSpeed: 1500,
                nav: false,
                dots: true,
                responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 5 } },
            })
            $('#testimonial_slider').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                smartSpeed: 2500,
                nav: false,
                dots: true,
                responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
            })
            $('#screen_slider').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                smartSpeed: 2500,
                nav: false,
                dots: true,
                center: true,
                responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 5 } },
            })

            // 4. Count Up/Down on scroll
            const onScrollCount = () => {
                const el = document.querySelector('#counter')
                if (!el) return
                const pos = el.getBoundingClientRect()
                const inView = pos.top >= 0 && pos.bottom <= window.innerHeight

                $('.counter-value').each(function (this: HTMLElement) {
                    const $this = $(this);
                    const final = inView ? +$this.data('count') : 0
                    $({ countNum: +$this.text() }).animate(
                        { countNum: final },
                        {
                            duration: inView ? 2000 : 100,
                            easing: 'swing',
                            step() {
                                $this.text(Math.floor(this.countNum))
                            },
                            complete() {
                                $this.text(this.countNum)
                            },
                        }
                    )
                });
            }
            window.addEventListener('scroll', onScrollCount);

            // 5. Magnific Popup
            // @ts-ignore
            // $('.popup-youtube').magnificPopup({
            //     disableOn: 700,
            //     type: 'iframe',
            //     mainClass: 'mfp-fade',
            //     removalDelay: 160,
            //     preloader: false,
            //     fixedContentPos: false,
            // })

            // 6. Pricing toggle
            $('.tog_block').on('click.main', () => {
                $('.tog_btn').toggleClass('month_active')
                $('.month, .years').toggleClass('active')
                $('.monthly_plan, .yearly_plan').toggleClass('active')
            })

            // 7. FAQ Accordion icons
            $('.collapse.show')
                .prev('.card-header')
                .find('.icon_faq')
                .addClass('icofont-minus')
                .removeClass('icofont-plus')

            $('.collapse')
                .on('show.bs.collapse', function (this: HTMLElement) {
                    $(this).prev('.card-header').find('.icon_faq')
                        .removeClass('icofont-plus')
                        .addClass('icofont-minus')
                    $(this).prev('.card-header').find('button').addClass('active')
                })
                .on('hide.bs.collapse', function (this: HTMLElement) {
                    $(this).prev('.card-header').find('.icon_faq')
                        .removeClass('icofont-minus')
                        .addClass('icofont-plus')
                    $(this).prev('.card-header').find('button').removeClass('active')
                })

            // 8. Backdrop opacity on scroll
            const updateBackdrop = () => {
                const elem = document.querySelector(window.innerWidth < 768 ? '.mobile_mockup' : '.free_text')
                if (!elem) return
                const pos = elem.getBoundingClientRect().top
                $('.purple_backdrop').css('opacity', pos < window.innerHeight && pos >= 0 ? '1' : '0')
            }
            window.addEventListener('scroll', updateBackdrop);
            window.addEventListener('resize', updateBackdrop);

            // 9. Scroll‐to‐top button
            const toTop = $('.go_top')
            toTop.on('click.main', () => {
                $('html, body').animate({ scrollTop: 0 }, 400)
            })
            $(window).on('scroll.main', () => {
                toTop.css('opacity', $(window).scrollTop()! > 750 ? '1' : '0')
            })

            // 10. Fix Header on scroll
            $(window).on('scroll.main', () => {
                if ($(window).scrollTop()! >= 250) {
                    $('header').addClass('fix_style fixed')
                } else {
                    $('header').removeClass('fix_style fixed')
                }
            })

            // 11. YouTube video modal
            $('.play-button').on('click.main', function (this: HTMLElement) {
                $('#youtubevideo').attr('src', $(this).data('url'))
            })
            $('#close-video').on('click.main hidden.bs.modal', () => {
                $('#youtubevideo').attr('src', '')
            })

            // 12. Navbar toggle icon swap
            $('.navbar-toggler').on('click.main', function (this: HTMLElement) {
                const ico = $(this).find('.ico_menu')
                ico.toggleClass('icofont-navigation-menu icofont-close')
            })

            // 13. Sidebar toggle (if any)
            $('.toggle-wrap').on('click.main', function (this: HTMLElement) {
                $(this).toggleClass('active')
                $('aside').animate({ width: 'toggle' }, 200)
            })

            // 14. Finally, init AOS
            window.AOS?.init();

            const clearLoadingIcon = () => {
                setTimeout(() => {
                    $("#iframeLoading").hide();
                }, 200);
            };
            // loading the 3d model
            const getWindowMessage = () => {
                setTimeout(() => {
                    var eventMethod = window['addEventListener'] ? "addEventListener" : "attachEvent";
                    var eventer = (window as any)[eventMethod];
                    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

                    // Listen to message from child window
                    eventer(messageEvent, function (e: { [x: string]: any; message: any; }) {
                        var key = e.message ? "message" : "data";
                        var data = e[key];
                        console.log(data);
                        if (data) {
                            if (data === 'loadMyModel') {
                                console.log(data);
                                $("#iframeLoading").hide();
                            } else {
                                clearLoadingIcon();
                            }
                        } else {
                            clearLoadingIcon();
                        }
                    }, false);
                }, 1000);
            }

            const loadModels = () => {
                $("#iframeLoading").show();
                getWindowMessage();
            };
            window.addEventListener('load', loadModels);

            $(".iframe-model iframe").on("load", function () {
                getWindowMessage();
            });

            // floating-btn animation on inner pages
            $(".floating-btn").on("click", function () {
                $('html, body').animate({
                    scrollTop: ($(".row_am").offset().top - 50)
                }, 1000);
            });

            // ─── CLEANUP ───────────────────────────────────────────────────────────────
            return () => {
                $('.drp_btn').off('.main');
                $('.tog_block').off('.main');
                $('.navbar-toggler').off('.main');
                $(window).off('.main');
                window.clearTimeout(preloaderTimer);
                window.removeEventListener('scroll', onScrollCount);
                window.removeEventListener('scroll', updateBackdrop);
                window.removeEventListener('resize', updateBackdrop);

                textSlider.trigger('destroy.owl.carousel');
                // imageSlider.trigger('destroy.owl.carousel');
                textSlider.off('changed.owl.carousel');
                // imageSlider.off('changed.owl.carousel');
            }
        }

    }, [])

    return null;
}
