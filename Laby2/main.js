class Slider{
    constructor(images){
        this.images = images;
        this.slide = null;
        this.buttonNext = null;
        this.buttonPrevious = null;
        this.image = null;

        this.currentImage = 0;  

        this.Selectors = {
            slide: '[data-slide]',
            buttonPrevious: '[data-prev]',
            buttonNext: '[data-next]',
        };
    }

    initialize(){
        this.slide = document.querySelector(this.Selectors.slide);
        this.buttonNext = document.querySelector(this.Selectors.buttonNext);
        this.buttonPrevious = document.querySelector(this.Selectors.buttonPrevious);

        this.image = document.createElement('img');
        this.image.classList.add('slider_image');
        this.image.setAttribute('src', this.images[this.currentImage]);


        this.slide.appendChild(this.image);
    }
}





























// notatnik z zajęć
// const main = document.querySelector('main')
// // const timeoutRef = setTimeout( 
// //     () => {
// //         main.innerHTML='From setTimeout'
// //     },
// //     2000
// // )
// let licznik = 0 
// const intervalRef = setInterval( 
//     () => {
//         main.innerHTML='From interval' + licznik++
//     },
//     4000
// )
// var splide = new Splide( '.splide' );
// splide.mount();
// // kasujemy setInterval
// clearInterval(intervalRef)

// // kasujemy setTimeout
// clearTimeout(intervalRef)


// // window.requestAnimationFrame