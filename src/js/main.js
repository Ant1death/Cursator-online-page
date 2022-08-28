'use strict'
window.addEventListener('DOMContentLoaded', () => {
    
    // Language button
    const dropdowns = document.querySelectorAll('.dropdown')

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
    })
    options.forEach(item => {
        item.addEventListener('click', () => {
            
            selected.innerText = item.innerText;
            console.log(selectImg.src)
            if(selected.innerText === 'EN') {
                selectImg.src = 'assets/icon/en-flag.svg'
                language.lang = 'en'
            } else {
                selectImg.src = 'assets/icon/ru-flag.svg'
                language.lang = 'ru'
            }

            item.classList.remove('select-clicked');
            menu.classList.remove('menu-open');
            options.forEach(item => {
                item.classList.remove('active');
            })
            item.classList.add('active');
        })
    })
    })

    // review open

    const reviewOpenBtn = document.querySelectorAll('.open__review'),
          reviewCloseBtn = document.querySelectorAll('.close__review'),
          reviewContent = document.querySelectorAll('.more')

    function reviewClose() {
        reviewContent.forEach(item => {
            item.style.display = 'none';
        })
        reviewOpenBtn.forEach(item => {
            item.classList.add('open-active')
        })
    }
    function reviewOpen(i=0) {
        reviewContent[i].style.display='block';
        reviewOpenBtn[i].classList.remove('open-active');
    }

    reviewOpenBtn.forEach((item,i) => {
        item.addEventListener('click', () => {
            reviewOpen(i);
        })
    })
    reviewCloseBtn.forEach(item => {
        item.addEventListener('click', () => {
            reviewClose();
        })
    })

    // review modal
    
    const reviewOpenModalBtn = document.querySelectorAll('.add-comment'),
          reviewCloseModalBtn = document.querySelector('.modal__comment-close'),
          reviewModal = document.querySelector('.modal__comment');


    reviewOpenModalBtn.forEach(item => {
        item.addEventListener('click', () => {
            reviewModal.classList.remove('hide')
            reviewModal.classList.add('show')
            document.body.style.overflow = 'hidden'
        })
    })
    reviewCloseModalBtn.addEventListener('click', () => {
        reviewModal.classList.remove('show')
        reviewModal.classList.add('hide')
        document.body.style.overflow = 'auto'
    })
    // review more comments
    const moreCommentsOpenBtn = document.querySelectorAll('.more__comments-open'),
          moreCommentsCloseBtn = document.querySelectorAll('.more__comments-close'),
          moreCommentsContent = document.querySelectorAll('.more__comments-item');

    function moreCommentsClose () {
        moreCommentsContent.forEach(item => {
            item.style.display = 'none';
        })
        moreCommentsOpenBtn.forEach(item => {
            item.classList.add('comments-open-active')
        })
    }
    function moreCommentsOpen(i=0) {
        moreCommentsContent[i].style.display='grid';
        moreCommentsOpenBtn[i].classList.remove('comments-open-active');
    }

    moreCommentsOpenBtn.forEach((item,i) => {
        item.addEventListener('click', () => {
            moreCommentsOpen(i);
        })
    })

    moreCommentsCloseBtn.forEach(item => {
        item.addEventListener('click', () => {
            moreCommentsClose();
        })
    })
    // fixed-block
    const fixedBlock = document.querySelector('.fixed__block-wrapper');

    window.addEventListener('scroll', () => {
        if(window.pageYOffset >= 300) {
            fixedBlock.style.display = 'block'
        }
    })

    // all categories

    const allCategoriesOpenBtn = document.querySelector('.all__categories'),
          allCoursesContent = document.querySelectorAll('.all__courseswrapper-item'),
          allCategoriesCloseBtn = document.querySelector('.all__categories-close');


    allCategoriesOpenBtn.addEventListener('click', () => {
        allCoursesContent.forEach(item => {
            item.classList.add('course-active');
            allCategoriesOpenBtn.style.display = 'none';
            allCategoriesCloseBtn.style.display = 'block';
        })
    })
    allCategoriesCloseBtn.addEventListener('click', () => {
        allCoursesContent.forEach(item => {
            item.classList.remove('course-active');
            allCategoriesCloseBtn.style.display = 'none';
            allCategoriesOpenBtn.style.display = 'block';
        })
    })

    // modal feedback
   
    const openFeedBackBtn = document.querySelector('.btn__add-comment'),
          closeFeedBackBtn = document.querySelector('.modal__feedback-close'),
          modalContent = document.querySelector('.modal__feedback');

    openFeedBackBtn.addEventListener('click', (e) => {
        modalContent.classList.remove('hide');
        modalContent.classList.add('show');
        document.body.style.overflow = 'hidden'
    })
    closeFeedBackBtn.addEventListener('click',(e) => {
        modalContent.classList.remove('show');
        modalContent.classList.add('hide');
        document.body.style.overflow = 'auto'
    })
    // return arrow
    const returnBtn = document.querySelector('.button-up');
    window.addEventListener('scroll', () => {
        if(window.pageYOffset >= 1000) {
            returnBtn.classList.add('active');
        }
        if(window.pageYOffset < 1000) {
            returnBtn.classList.remove('active');
        }
    })
    returnBtn.addEventListener('click', () => {
        
    });
})
