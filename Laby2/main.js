class Slider{
    constructor(images){
        this.imagesArray = images;
        this.slide = null;
        this.buttonNext = null;
        this.buttonPrevious = null;
        this.image = null;
        this.imagesCounter = this.imagesArray;

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
        this.setSlideAttributes(0);
        this.slide.appendChild(this.image);
        this.changeSlides();
        this.disableButtons();
        console.log(this.imagesArray);
    }

    changeSlide(index){
        this.currentImage = index; 
        this.setSlideAttributes(index);
        this.disableButtons();
    };

    setSlideAttributes(index){
        this.image.setAttribute('src', this.imagesArray[index]);
    };

    changeSlides(){
        this.buttonPrevious.addEventListener('click', () => this.changeSlide(this.currentImage-1));
        this.buttonNext.addEventListener('click', () => this.changeSlide(this.currentImage+1));
    }; 

    disableButtons(){
        if(this.currentImage == 0) 
        this.buttonPrevious.setAttribute('disabled', true) 
        else 
        this.buttonPrevious.removeAttribute('disabled')

        if(this.currentImage == Object.keys(this.imagesArray).length-1) 
        this.buttonNext.setAttribute('disabled', true) 
        else 
        this.buttonNext.removeAttribute('disabled')
    };
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