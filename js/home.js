
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
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
  navList.classList.toggle('active');
});

navLink.forEach(n=>n.addEventListener('click',()=>{
  hamburger.classList.remove("active");
  navList.classList.remove("active");


}))
