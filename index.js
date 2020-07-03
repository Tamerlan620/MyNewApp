var count = 1;
var count1 = 1;
var count2 = 1;
var count3 = 1;

const number1 = document.querySelector(".number1")
const number2 = document.querySelector(".number2")
const number3 = document.querySelector(".number3")
const number4 = document.querySelector(".number4")

function Tunar(){
    number1.innerHTML=count;
    
count++;
if(count==91){
clearInterval(b)
}
}
var b =setInterval(Tunar,65)

function Tunar1(){
    number2.innerHTML=count1;	
count1++;
if(count1==121){
clearInterval(c)
}
}
var c =setInterval(Tunar1,48)

function Tunar2(){
    number3.innerHTML=count2;
count2++;
if(count2==41){
clearInterval(d)
}
}
var d =setInterval(Tunar2,145)

function Tunar3(){
number4.innerHTML=count3;
count3++;
if(count3==11){
clearInterval(e)
}
}
var e =setInterval(Tunar3,580)




// section5 start

$(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
               
              }
            },
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 3,
            //     slidesToScroll: 1
            //   }
            // },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 3,
            //     slidesToScroll: 1
            //   }
            // }
            
          ]
    });
})


// section7 start

$(function(){

    $('.slider-status').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-status',
        dots: false,
        centerMode: true,
        focusOnSelect: false,
        arrows:true,
        centerPadding: 0,
        prevArrow:".prew",
        nextArrow:".next",
        
      });
})



// navbar fied

function Fixed(){
  if ($('html').scrollTop()>500)
  {
    
    $('.fixed_navbar').css({"transform":"translateY(0)","position":"fixed","z-index":"9999","top":"0","background-color":"#884BDF","width":"100%","left":"0","transition": ".7s"});
  }

  if ($('html').scrollTop()>$(".fixed_navbar").offset().top+100)
  {
    
    $('.fixed_navbar').css({"padding-top":"0px","padding-bottom":"0px"});
  }

  if ($('html').scrollTop()<100)
  {
    
    $('.fixed_navbar').css({"position":"static","background-color":"transparent","width":"100%","transition": ".7s"});
  }

  
}

// Fixed()

// $(window).scroll(function(){
//   Fixed();
// })

// footer start


