'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    jQuery: any
    $: any
    AOS: any
  }
}

export default function Scripts() {
  useEffect(() => {
    // 이미 로드된 경우 스킵
    if (typeof window.$ === 'undefined') return

    const $ = window.$

    // AOS 초기화
    if (window.AOS) {
      window.AOS.init({ once: true })
    }

    // 메인 히어로 슬라이더
    if ($('#main-hero').length && !$('#main-hero').hasClass('slick-initialized')) {
      const interval = $('#main-hero').data('interval') || 4000
      $('#main-hero').slick({
        autoplay: true,
        autoplaySpeed: interval,
        speed: 600,
        arrows: true,
        dots: true,
        lazyLoad: 'ondemand',
        prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-round-back"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-round-forward"></i></button>'
      })
    }

    // 헤더 스크롤 효과
    const $header = $('#header')
    const scrollHandler = () => {
      if ($(window).scrollTop() > 10) {
        $header.addClass('is-scroll')
      } else {
        $header.removeClass('is-scroll')
      }
    }
    $(window).on('scroll.hbl', scrollHandler).trigger('scroll')

    // 모바일 메뉴
    $header.find('.btn-open-nav').off('click.hbl').on('click.hbl', function () {
      $header.find('.btn-open-nav').attr('aria-expanded', 'true')
      $('body').addClass('nav-open')
    })
    $header.find('.btn-close-nav').off('click.hbl').on('click.hbl', function () {
      $header.find('.btn-open-nav').attr('aria-expanded', 'false')
      $('body').removeClass('nav-open')
    })

    // sub-hero 애니메이션
    const $subHero = $('#sub-hero')
    if ($subHero.length) {
      setTimeout(() => $subHero.addClass('is-loaded'), 100)
    }

    // 패럴랙스
    if ($.fn.parallax) {
      $('.parallax-section').each(function () {
        const src = $(this).data('src')
        if (src) $(this).parallax({ imageSrc: src, speed: 0.3 })
      })
    }

    // GNB has-child 클래스
    $header.find('.gnb > li').each(function () {
      if ($(this).find('.subnav').length) $(this).addClass('has-child-menu')
    })

    return () => {
      $(window).off('scroll.hbl')
      $header.find('.btn-open-nav').off('click.hbl')
      $header.find('.btn-close-nav').off('click.hbl')
    }
  }, [])

  return null
}
