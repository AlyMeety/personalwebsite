var slideList = [
    "assets/1.jpg",
    "assets/2.png",
    "assets/a.png",
    "assets/b.png",
    "assets/c.png",
    "assets/d.png",
    "assets/e.png",
    "assets/f.png",
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