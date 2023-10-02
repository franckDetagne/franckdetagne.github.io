(function(){
  const allAnchor=document.querySelectorAll('.show');
  const block=document.querySelector(".hamburger-links");
  allAnchor.forEach(item => {
    item.addEventListener("click",function () {
      this.classList.toggle("toggle");
      block.classList.toggle("toggle");
    })
  });


})();
