var menu=document.querySelector('.hamburger-menu');
var para=document.querySelector('.hamburger-links');
menu.addEventListener('click',function(){
	menu.classList.toggle("open");
	para.classList.toggle("open");
});

(function(){
	var btn=document.querySelectorAll(".btn");
	var socialNetwork=document.querySelectorAll(".social-network")
	btn[0].addEventListener('click',function(){
		window.open("./assets/cv.pdf")
	});
	btn[1].addEventListener("click",function(event){
		location.href='#contact';
	});
	/*socila network 1 in html code is linkedin and the seconcs is github*/
	socialNetwork[0].addEventListener('click',function(){
		location.href='https://www.facebook.com/profile.php?id=100091659424209';
	});
	socialNetwork[1].addEventListener('click',function(){
		location.href='https://wa.me/237620664828';
	});

})();
//i use IEF to add some link to my html element
(function(){
	const allButton=document.querySelectorAll(".btn-color");
	const allButtonFac=document.querySelectorAll(".btn-color-face");
	allButton.forEach(item => {
		item.addEventListener("click",function(){
			location.href="./lien-vers-realisation/index.html";
		});
	});
	allButtonFac.forEach(i => {
		i.addEventListener("click",function(){
			location.href="https://www.facebook.com/profile.php?id=100091659424209";
		});
	});
})();
