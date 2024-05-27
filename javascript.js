let menu = document.querySelector('#menu-btn');

let navbar = document.querySelector('.navbar');

let modal = document.querySelector(".modal");

let loginBtn = document.querySelector("#login-btn");

let closeBtn = document.querySelector("#close-login-form");



menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
/*document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

 document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}*/



loginBtn.onclick = function() {
    modal.style.display = "block";
    
  }

  closeBtn.onclick= function() {
    modal.style.display = "none";

 }


















window.onscroll = () =>{
    if(window.scroll > 0){
        document.querySelector('.header').classList.add('active');
    }
     else{
        document.querySelector('.header').classList.remove('active');
    }
     
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}
window.onload = () =>{
    if(window.scroll > 0){
        document.querySelector('.header').classList.add('active');
     }
      else{
        document.querySelector('.header').classList.remove('active');
    }
     
    
}
document.querySelector('.Accueil').onmousemove =(e) =>{

    document.querySelectorAll('.Accueil-parallax').forEach(elm =>{

       let speed = elm .getAttribute('data-speed');

       let x = (window.innerwidth - e.pageX * speed ) / 90;
       let y = (window.innerHeight - e.pageY * speed ) / 90;

       elm.style.transform ='translateX (${y}px) translateY (${X}px) ';

    });


};



document.querySelector('.Accueil').onmouseleave = () =>{

    document.querySelectorAll('.Accueil-parallax').forEach(elm =>{


       elm.style.transform ='translateX (${0}px) translateY (${0}px) ';

    });


};

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });



  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });