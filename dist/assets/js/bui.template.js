"use strict";

// widget gotoTop
function widgetGotoTop(progressRange) {
  var elem = document.querySelector('#gotoTop');
  if (!elem) return;
  var value = elem.querySelector('.value');
  var RADIUS = 32;
  var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  function progress(per) {
    var progress = per / 100;
    var dashoffset = CIRCUMFERENCE * (1 - progress);
    value.style.strokeDashoffset = dashoffset;
  }

  elem.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
  document.documentElement.scrollTop > 0 ? elem.classList.add('active') : elem.classList.remove('active');
  document.addEventListener('scroll', function () {
    progress((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
    document.documentElement.scrollTop > 0 ? elem.classList.add('active') : elem.classList.remove('active');
  });
  value.style.strokeDasharray = CIRCUMFERENCE;
  progress(progressRange);
}

widgetGotoTop(0); // check brakepoint

if (window.screen.width >= 1024) {
  document.querySelector('html').classList.add('laptop');
  document.querySelector('html').classList.remove('mobile');
} else {
  document.querySelector('html').classList.add('mobile');
  document.querySelector('html').classList.remove('laptop');
}

window.addEventListener('resize', function () {
  if (window.screen.width >= 1024) {
    document.querySelector('html').classList.add('laptop');
    document.querySelector('html').classList.remove('mobile');
  } else {
    document.querySelector('html').classList.add('mobile');
    document.querySelector('html').classList.remove('laptop');
  }
}); // form textfield Check value

function buiFormCheckValue(event, formElem) {
  formElem.value.length > 0 ? formElem.classList.add('typed') : formElem.classList.remove('typed');
} // form textfield cancel


function buiFormCancel(event, formElem) {
  var formUtil = formElem.parentElement.querySelector('.form-util');

  if (!formUtil) {
    // dom 생성
    formUtil = document.createElement('span');
    formUtil.classList.add('form-util'); // 그 span에 클래스 명 지정

    formElem.parentElement.appendChild(formUtil); // formElem(= 이벤트 발생하는 input) 부모 안에 배치 
  }

  var formCancel = formElem.parentElement.querySelector('.form-cancel');

  if (!formCancel) {
    formCancel = document.createElement('span');
    formCancel.classList.add('form-cancel');
    formUtil.prepend(formCancel);
  }

  var xStart = formUtil.offsetLeft + formCancel.offsetLeft;
  var yStart = formUtil.offsetTop + formCancel.offsetTop;
  var xEnd = xStart + formCancel.offsetWidth;
  var yEnd = yStart + formCancel.offsetHeight;
  formElem.addEventListener('mousemove', function (e) {
    if (formElem.classList.contains('typed')) {
      if (e.offsetX >= xStart && e.offsetX <= xEnd && e.offsetY >= yStart && e.offsetY <= yEnd) {
        formElem.setAttribute('style', 'cursor: default');
      } else {
        formElem.removeAttribute('style');
      }
    }
  });
  formElem.addEventListener('click', function (e) {
    if (formElem.classList.contains('typed')) {
      if (e.offsetX >= xStart && e.offsetX <= xEnd && e.offsetY >= yStart && e.offsetY <= yEnd) {
        formElem.value = '';
        formElem.classList.remove('typed');
        formElem.removeAttribute('style');
      }
    }
  });
}

function buiFormAfter() {
  // 단일 셀렉터
  // var formElem_01 = document.querySelector('.form.module-a.checkbox');
  // 다중 셀렉터
  var formElems = document.querySelectorAll('.form.module-a.checkbox, .form.module-a.radio'); // for(var i = 0; formElems.length > i; i++) {
  // 	console.log(formElems[i]);
  // }

  Array.prototype.forEach.call(formElems, function (formElem) {
    var formAfter = formElem.querySelector('.form-after');

    if (!formAfter) {
      var formAfter = document.createElement('span');
      formAfter.className = 'form-after'; // formAfter.classList.add('form-after');

      formElem.appendChild(formAfter);
    }
  });
}

if (navigator.appName == 'Netscape' && navigator.userAgent.toLowerCase().indexOf('trident') != -1 || navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
  buiFormAfter();
}
/**
 * @layout Page Navigations 
 */


var pageNavigations = new buiToggle('[data-bui-toggle="pageNavigations"]', {
  close: true,
  closeButtonClass: 'btn close',
  closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><title>닫기</title><path d="M10.5382 12L3 4.46179L4.46179 3L12 10.5382L19.5382 3L21 4.46179L13.4618 12L21 19.5382L19.5382 21L12 13.4618L4.46179 21L3 19.5382L10.5382 12Z"/></svg>',
  closeButtonArea: '.section-util .button-area',
  reactTarget: 'html',
  reactTargetActiveClass: 'active-page-navi',
  focusin: true
});
/**
 * @global 컨텐츠 팝업
 */

var contentsPopup = new buiToggle('[data-bui-toggle="contentsPopup"]', {
  close: true,
  closeButtonClass: 'btn popup-close',
  closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><title>닫기</title><path d="M10.5382 12L3 4.46179L4.46179 3L12 10.5382L19.5382 3L21 4.46179L13.4618 12L21 19.5382L19.5382 21L12 13.4618L4.46179 21L3 19.5382L10.5382 12Z"/></svg>',
  closeButtonArea: '.popup-local',
  reactTarget: 'html',
  reactTargetActiveClass: 'active-content-popup',
  focusin: true
});
//# sourceMappingURL=bui.template.js.map
