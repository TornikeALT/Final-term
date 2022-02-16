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


window.addEventListener('scroll',(e)=>{
    console.log(scrollY)
    if(scrollY<800){
        document.getElementById('marking').classList.add('dp-none');
        document.getElementById('Design').classList.add('dp-none');
        document.getElementById('photography').classList.add('dp-none');
        document.getElementById('Photoshop').classList.add('dp-none');
        document.getElementById('percentage').classList.add('dp-none');
        document.getElementById('percentage2').classList.add('dp-none');
        document.getElementById('percentage3').classList.add('dp-none');
        document.getElementById('percentage4').classList.add('dp-none');
   
    }else{
        document.getElementById('marking').classList.remove('dp-none');
        document.getElementById('Design').classList.remove('dp-none');
        document.getElementById('photography').classList.remove('dp-none');
        document.getElementById('Photoshop').classList.remove('dp-none');
        document.getElementById('percentage').classList.remove('dp-none');
        document.getElementById('percentage2').classList.remove('dp-none');
        document.getElementById('percentage3').classList.remove('dp-none');
        document.getElementById('percentage4').classList.remove('dp-none');
    }
})

