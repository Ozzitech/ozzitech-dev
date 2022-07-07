
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

window.onscroll = function(){
  var top = window.scrollY;
  var header = document.getElementsByTagName('header');
  if(top > 50){
    header[0].classList.add('scrolled');
  } 
  else {
    header[0].classList.remove('scrolled');
  }
};



hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLink.forEach(n=>n.addEventListener('click',()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");


}))
