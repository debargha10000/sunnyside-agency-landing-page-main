window.onload = function () {
  // alert("loadeeaaa")
  window.addEventListener("scroll", function (e) {
    if (window.scrollY > 300) {
      this.document.querySelector("header").classList.add("is-scrolling");
    } else {
      this.document.querySelector("header").classList.remove("is-scrolling");
    }
  });

  // const menu_btn = document.querySelector(".hamburger");
  // const menu_content = document.querySelector(".menu");

  // menu_btn.addEventListener("click", function () {
  //   menu_btn.classList.toggle("is-active");
  //   menu_content.classList.toggle("is-active");
  // });
};

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });
// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((e1) => observer.observe(e1));

// const navigationHeight = document.querySelector("header").offsetHeight;

// console.log((navigationHeight)/2);
// document.documentElement.style.setProperty(
//   "--scroll-padding",
//   navigationHeight / 2 + "px"
// );


// const menuIcon = document.getElementsByClassName('.header__menu');
const headerLinks = document.getElementById('headerLinks');
function changeStyle() {

    if(headerLinks.style.display === 'none') {
      headerLinks.style.display = 'flex';
    } else {
      headerLinks.style.display = 'none'
    }

}