const leftBtn = document.querySelector('.left-btn')
const rightBtn = document.querySelector('.right-btn')
const slides = document.querySelectorAll('.photo')

let curSlide = 0
const maxSlide = slides.length

const goToSlide = function(slide){
    slides.forEach(
        (s, i) => {
            (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        }
    );
}

const prevSlide = function(){
    if(curSlide === 0){
        curSlide = maxSlide - 1
    }else{
        curSlide--
    }
    goToSlide(curSlide)
}

const nextSlide = function(){
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide)
}

rightBtn.addEventListener('click', nextSlide)
leftBtn.addEventListener('click', prevSlide);