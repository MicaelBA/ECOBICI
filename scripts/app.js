
const arriba = document.getElementById("arriba")
arriba.addEventListener("click",() =>{
	window.scrollTo(0,0)
})

buttonUp= document.getElementById("arriba");
window.onscroll = function(){
	var scroll = document.documentElement.scrollTop;
	if (scroll > 500) {
		buttonUp.style.transform = "scale(1)";
	}else if (scroll < 500) {
		buttonUp.style.transform = "scale(0)";
	}
}