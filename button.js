let buttonScroll = document.querySelector('.button__scroll');
window.onscroll = function() {
   if (window.pageYOffset > 940) {
      buttonScroll.classList.add('shown');
   } else {
      buttonScroll.classList.remove('shown');
   }
}
buttonScroll.onclick = function () {
   window.scrollTo (0,0);
}