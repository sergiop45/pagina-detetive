const btnmenu = document.querySelector("#btn-menu");
const menumob = document.querySelector("#menu-mobile")
let x = 0;

btnmenu.addEventListener("click", function () {
	if (x == 0 ) {
		menumob.style.display = "flex";
		x++;
	} else {
		menumob.style.display = "none";
		x--;
	}
});