var slideList = [
    "assets/1.jpg",
    "assets/home.png",
    "assets/321clean.png",
    "assets/drift.png",
    "assets/astroon.png",
    "assets/gifttower.png",
    "assets/symbinode.png",
    "assets/ghosthunt.png",
    "assets/hamburger.png",
    "assets/doc.png",
]




var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 800,
    initialSlide: 1,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {

            return `<div class="${className}">
                    <img src="${slideList[index]}"/>
                </div>`
        },
    },
});


window.onload=()=>{
    setTimeout(() => {
        document.querySelector(".loader").style.display="none"
    }, 500);

}