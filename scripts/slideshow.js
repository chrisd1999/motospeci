(() => {
    window.setInterval(() => {
        let rand = Math.floor(Math.random() * 4) + 1; // Random nubmer between img-1 to img-4
        var element = window.document.getElementsByClassName('slideshow');
        element[0].classList.add('transitioning-src');
        setTimeout(() => {
            element[0].classList.remove('transitioning-src');
            element[0].src = "img/slideshow/img-" + rand + ".jpg";
            element[0].classList.add('parallax-slider');
        }, 1000);
    }, 5000);
})(); // IIFE 