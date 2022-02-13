//ზედა სლაიდერი
const mySlides = document.querySelectorAll('.slider-item');

const repeat = function(activeclass){
    let active = document.getElementsByClassName('active');
    i=1;

    const repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeslide) => {
                activeslide.classList.remove('active');
            });
            mySlides[i].classList.add('active');
            i++;
            if(mySlides.length==i){
                i=0;
            }
            if(i >= mySlides.length){
                return;
            }
            repeater();
    }, 5000);
}
repeater();
}
repeat();

// ** //