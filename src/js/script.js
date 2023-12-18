const secondMenu = document.querySelector('.second-menu');
const goToUp = document.querySelector('.goToUp')
let prevScrollY = window.scrollY;

window.addEventListener('scroll',()=>{
  let scrollY = window.scrollY;
  if(650<window.scrollY){
    goToUp.style.visibility = 'visible';
    goToUp.style.opacity = '1';
  }else{
      goToUp.style.visibility = 'hidden'
      goToUp.style.opacity = '0';
  }
  if(window.innerWidth<992){
    secondMenu.style.transitionDuration  = '0.5s'
    if (scrollY < prevScrollY && scrollY>70) {
      secondMenu.style.top = `0px`
    } else {
      secondMenu.style.top = `-500px`
    }
  }else{
    if(scrollY>document.documentElement.clientHeight){
      secondMenu.style.top = `0px`
    }else{
      secondMenu.style.top = `-500px`
    }
  }
  prevScrollY = scrollY;
})

goToUp.addEventListener('click',()=>{
  scrollTo(0,0)
})


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
