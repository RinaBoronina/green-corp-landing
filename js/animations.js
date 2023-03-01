const INCREASE_NUMBER_ANIMATION_SPEED = 105;
let animationInited = false;

function increaseNumberAnimationStep (i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }

            i+=100;

            setTimeout(function() {
            increaseNumberAnimationStep(i, element, endNumber);
            }, INCREASE_NUMBER_ANIMATION_SPEED);
        }
    }``

function initIncreaseNumberAnimation() {
    const element = document.querySelector('.features__clients-count');
    
    increaseNumberAnimationStep(0, element, 5000);
}

// ----------------------------------------------------------------

function updateScroll() {
        if (scrollY !== 0) {
            document.querySelector('header').classList.add('header__scrolled');
        } else {
            document.querySelector('header').classList.remove('header__scrolled');
        }

        let countElementPosition = document.querySelector('.features__clients-count').offsetTop; // Получаем позицию elem features__clients-count
        let windowBottomPosition = window.scrollY + window.innerHeight; // Получаем позицию windowBottom

        if (countElementPosition <= windowBottomPosition && !animationInited ) {
            initIncreaseNumberAnimation();
            animationInited = true;
        } 

}

window.addEventListener('scroll', updateScroll );

// ----------------------------------------------------------------

function addSmoothScroll(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
}

function onLinkClick(event) {
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}

addSmoothScroll(document.querySelector('.more-button'));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    addSmoothScroll(anchor);
});


