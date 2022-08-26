/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', () => {
  // Language button
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(item => {
    const select = item.querySelector('.select'),
          menu = item.querySelector('.menu'),
          options = item.querySelectorAll('.menu li'),
          selected = item.querySelector('.selected');
    let selectImg = document.querySelector('.selected-img'),
        language = document.querySelector('html');
    select.addEventListener('click', () => {
      select.classList.toggle('select-clicked');
      menu.classList.toggle('menu-open');
    });
    options.forEach(item => {
      item.addEventListener('click', () => {
        selected.innerText = item.innerText;
        console.log(selectImg.src);

        if (selected.innerText === 'EN') {
          selectImg.src = 'assets/icon/en-flag.svg';
          language.lang = 'en';
        } else {
          selectImg.src = 'assets/icon/ru-flag.svg';
          language.lang = 'ru';
        }

        item.classList.remove('select-clicked');
        menu.classList.remove('menu-open');
        options.forEach(item => {
          item.classList.remove('active');
        });
        item.classList.add('active');
      });
    });
  }); // review open

  const reviewOpenBtn = document.querySelectorAll('.open__review'),
        reviewCloseBtn = document.querySelectorAll('.close__review'),
        reviewContent = document.querySelectorAll('.more');

  function reviewClose() {
    reviewContent.forEach(item => {
      item.style.display = 'none';
    });
    reviewOpenBtn.forEach(item => {
      item.classList.add('open-active');
    });
  }

  function reviewOpen(i = 0) {
    reviewContent[i].style.display = 'block';
    reviewOpenBtn[i].classList.remove('open-active');
  }

  reviewOpenBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
      reviewOpen(i);
    });
  });
  reviewCloseBtn.forEach(item => {
    item.addEventListener('click', () => {
      reviewClose();
    });
  }); // review modal

  const reviewOpenModalBtn = document.querySelectorAll('.add-comment'),
        reviewCloseModalBtn = document.querySelector('.modal__comment-close'),
        reviewModal = document.querySelector('.modal__comment');
  reviewOpenModalBtn.forEach(item => {
    item.addEventListener('click', () => {
      reviewModal.classList.remove('hide');
      reviewModal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });
  reviewCloseModalBtn.addEventListener('click', () => {
    reviewModal.classList.remove('show');
    reviewModal.classList.add('hide');
    document.body.style.overflow = 'auto';
  }); // review more comments

  const moreCommentsOpenBtn = document.querySelectorAll('.more__comments-open'),
        moreCommentsCloseBtn = document.querySelectorAll('.more__comments-close'),
        moreCommentsContent = document.querySelectorAll('.more__comments-item');

  function moreCommentsClose() {
    moreCommentsContent.forEach(item => {
      item.style.display = 'none';
    });
    moreCommentsOpenBtn.forEach(item => {
      item.classList.add('comments-open-active');
    });
  }

  function moreCommentsOpen(i = 0) {
    moreCommentsContent[i].style.display = 'grid';
    moreCommentsOpenBtn[i].classList.remove('comments-open-active');
  }

  moreCommentsOpenBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
      moreCommentsOpen(i);
    });
  });
  moreCommentsCloseBtn.forEach(item => {
    item.addEventListener('click', () => {
      moreCommentsClose();
    });
  }); // fixed-block

  const fixedBlock = document.querySelector('.fixed__block-wrapper');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 300) {
      fixedBlock.style.display = 'block';
    }
  }); // all categories

  const allCategoriesOpenBtn = document.querySelector('.all__categories'),
        allCoursesContent = document.querySelectorAll('.all__courseswrapper-item'),
        allCategoriesCloseBtn = document.querySelector('.all__categories-close');
  allCategoriesOpenBtn.addEventListener('click', () => {
    allCoursesContent.forEach(item => {
      item.classList.add('course-active');
      allCategoriesOpenBtn.style.display = 'none';
      allCategoriesCloseBtn.style.display = 'block';
    });
  });
  allCategoriesCloseBtn.addEventListener('click', () => {
    allCoursesContent.forEach(item => {
      item.classList.remove('course-active');
      allCategoriesCloseBtn.style.display = 'none';
      allCategoriesOpenBtn.style.display = 'block';
    });
  }); // modal feedback

  const openFeedBackBtn = document.querySelector('.btn__add-comment'),
        closeFeedBackBtn = document.querySelector('.modal__feedback-close'),
        modalContent = document.querySelector('.modal__feedback');
  openFeedBackBtn.addEventListener('click', e => {
    modalContent.classList.remove('hide');
    modalContent.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
  closeFeedBackBtn.addEventListener('click', e => {
    modalContent.classList.remove('show');
    modalContent.classList.add('hide');
    document.body.style.overflow = 'auto';
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map