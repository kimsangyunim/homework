"use strict";

// 슬라이드 style-a : 주요 기획전, 이벤트 슬라이드
var displayBoardEvent = new Swiper('.display-board.module-c.style-a.swiper-container', {
  autoplay: true,
  autoplaySpeed: 1000,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  watchOverflow: true,
  loop: true,
  loopedSlides: 2,
  simulateTouch: false,
  spaceBetween: 0,
  navigation: {
    nextEl: '.display-board.module-c.style-a.swiper-container .swiper-button-move-next',
    prevEl: '.display-board.module-c.style-a.swiper-container .swiper-button-move-prev'
  },
  pagination: {
    el: '.display-board.module-c.style-a.swiper-container .swiper-pagination',
    type: 'fraction'
  },
  on: {
    init: function init() {
      this.el.classList.add('auto-play');
      this.el.querySelector('.swiper-button-auto-play').addEventListener('click', function () {
        displayBoardEvent.autoplay.start();
        displayBoardEvent.el.classList.add('auto-play');
      });
      this.el.querySelector('.swiper-button-auto-stop').addEventListener('click', function () {
        displayBoardEvent.autoplay.stop();
        displayBoardEvent.el.classList.remove('auto-play');
      });
    },
    slideChangeTransitionEnd: function slideChangeTransitionEnd() {
      this.autoplay.running === true ? this.el.classList.add('auto-play') : this.el.classList.remove('auto-play');
    }
  }
}); // 슬라이드 style-b : 좌우 넓은 arrow 스와이퍼

var displayBoardEventLatest = new Swiper('.display-board.module-c.style-b.swiper-container', {
  loop: true,
  simulateTouch: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  watchOverflow: true,
  navigation: {
    nextEl: '.display-board.module-c.style-b.swiper-container .swiper-button-move-next',
    prevEl: '.display-board.module-c.style-b.swiper-container .swiper-button-move-prev'
  },
  pagination: {
    el: '.display-board.module-c.style-b.swiper-container .swiper-pagination',
    clickable: true
  },
  on: {
    slideChange: function slideChange() {
      var mySlider = this.$el[0];
      var currentSlide = this.slides[this.activeIndex];

      if (currentSlide.classList.contains('type-a')) {
        mySlider.classList.add('type-a');
        mySlider.classList.remove('type-b');
      }

      if (currentSlide.classList.contains('type-b')) {
        mySlider.classList.add('type-b');
        mySlider.classList.remove('type-a');
      }
    }
  }
});
//# sourceMappingURL=page.main.js.map
