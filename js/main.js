// ############ NAVIGATION #############
$("#toggle").click(function () {
    $(this).toggleClass('on');
    $(".resize").toggleClass('resize--active');
});

$(".resize ul li a").click(function () {
    $(this).toggleClass('on');
    $(".resize").toggleClass('resize--active');
});

$(".resize--closeBtn").click(function () {
    $(this).toggleClass('on');
    $(".resize").toggleClass('resize--active');
});

// ########### ANIMATION NAV WITH GREENSOCK(GSAP) ###############

TweenMax.from(".navigation__brand", 1, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".navigation__menu li a", 1, {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

new WOW().init();

// ############ MODAL POPUP BOOTSTRAP JS ################

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
        myModal.show();
    }
})

// ################### HOVER EFFECTS ######################

new hoverEffect({
    parent: document.querySelector('.imgAbout1'),
    image1: '../img/autor.jpg',
    image2: '../img/estudiando-min.jpg',
    displacementImage: '../img/displacement.png',
    imagesRatio: '1.35'
})

new hoverEffect({
    parent: document.querySelector('.imgAbout2'),
    image1: '../img/adoptado-min.jpg',
    image2: '../img/estudiando-min.jpg',
    displacementImage: '../img/displacement.png',
    imagesRatio: '1.35'
})