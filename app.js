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

//მეორე სლაიდერი

const slides=document.querySelectorAll('.slides');
const btns=document.querySelectorAll('.btn');
let currentSlide=1;

const manualSlider=function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('green');
       
        btns.forEach((btn)=>{
            btn.classList.remove('green');
        });
    });
    slides[manual].classList.add('green');
    btns[manual].classList.add('green');
    }    
    btns.forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
        manualSlider(i);
        currentSlide = i;
    });
    
});

//** **//

//latest project//
filterObjects('all');
function filterObjects(c){
    let x, i;
    x=document.getElementsByClassName('category-image-box');
    if(c=='all') c="";
    for(i=0; i<x.length; i++){
        removeClass(x[i],'show')
        if(x[i].className.indexOf(c)> -1) addClass(x[i],'show')
    }
}

function addClass(element, name){
    let i ,arr1, arr2;
    arr1=element.className.split(' ');
    arr2=name.split(' ');
    for(i=0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i])==-1){
            element.className +=' ' + arr2[i];
        }
    }
}

function removeClass(element,name){
    let i ,arr1, arr2;
    arr1=element.className.split(' ');
    arr2=name.split(' ');
    for(i=0; i<arr2.length; i++){
        while(arr1.indexOf(arr2[i])>-1){
            arr1.splice(arr1.indexOf(arr2[i]),1)
        }
    }
    element.className=arr1.join(' ')
}