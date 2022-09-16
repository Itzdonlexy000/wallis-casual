const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();

function imgChange(toss){
    document.querySelector('.star').src = toss
}
