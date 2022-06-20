// function myFunction() {
//     var x = document.getElementById("nav-toggle");
//     // if (x.className === "topnav") {
//     //   x.className += " responsive";
//     // } else {
//     //   x.className = "topnav";
//     // }
//     x.addEventListener(onclick,()=>{x.className=})
//   }

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
  document.body.classList.toggle('no-scroll')
});

navLink.forEach(n=>n.addEventListener('click',()=>{
  hamburger.classList.remove("active");
  navList.classList.remove("active");
  document.body.classList.toggle('no-scroll')


}))
