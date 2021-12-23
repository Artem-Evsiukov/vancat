"use strict";

document.addEventListener('DOMContentLoaded', function () {
  initAccordion('.js-accordion-wrap');
});
$(document).ready(function () {
  // burger
  $('.js-burger').click(function () {
    $(this).toggleClass('active');
    $('.js-menu-burger').toggleClass('active');
    $('body').toggleClass('overflow');
  }); // open modal

  $('.js-open-edit').click(function () {
    $('.js-modal-edit').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflow');
  }); //close modal

  $('.js-mask, .js-modal-close').click(function () {
    $('.js-modal').fadeOut();
    $('.js-mask').fadeOut();
    $('body').removeClass('overflow');
  }); //tabs

  $(function () {
    $('ul.js-tabs-nav').on('click', 'li:not(.active)', function () {
      $(this).addClass('active').siblings().removeClass('active').closest('div.js-tabs').find('div.js-tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
});

function initAccordion(wrapEl) {
  var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var wrap = document.querySelector(wrapEl);
  if (!wrap) return;
  var blockList = wrap.querySelectorAll('.js-accordion'),
      btnList = wrap.querySelectorAll('.js-accordion-btn'),
      contentList = wrap.querySelectorAll('.js-accordion-content');
  blockList.forEach(function (el) {
    var btn = el.querySelector('.js-accordion-btn'),
        content = el.querySelector('.js-accordion-content'),
        descr = content.querySelector('.js-accordions-descr'),
        height = descr.offsetHeight,
        margin = +window.getComputedStyle(descr).marginTop.replace('px', '');
    btn.addEventListener('click', function (e) {
      var target = e.target;

      if (target && target.classList.contains('active')) {
        target.classList.remove('active');
        content.style.maxHeight = 0;
      } else {
        if (close) {
          btnList.forEach(function (btn) {
            return btn.classList.remove('active');
          });
          contentList.forEach(function (content) {
            return content.style.maxHeight = 0;
          });
        }

        btn.classList.add('active');
        content.style.maxHeight = "".concat(height + margin + 50, "px");
      }
    });
  });
} // toggle site theme


function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

;

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    document.getElementById('theme').checked = true;
  } else {
    setTheme('theme-light');
    document.getElementById('theme').checked = false;
  }
})(); // chart


if (document.querySelector('#Chart')) {
  var ctx = document.getElementById('Chart').getContext("2d");
  var chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [{
        data: [20, 40, 40],
        borderWidth: 5,
        borderRadius: 15,
        backgroundColor: ["#F49E40", "#F67C70", "#F3BC15"],
        borderColor: "white"
      }]
    },
    options: {
      // maintainAspectRatio: false,
      responsive: true
    }
  });
}