var css = document.querySelector("h3");
var col1 = document.querySelector(".col1");
var col2 = document.querySelector(".col2");
var body = document.getElementById("gradient")


function setGradient() {
	body.style.background =
	"linear-gradient(to right ,"
	+ col1.value 
	+ ","
	+ col2.value
	+")" ;  
	css.textContent = body.style.background + ";" ;
}

col1.addEventListener("input" , setGradient);

col2.addEventListener("input" , setGradient);