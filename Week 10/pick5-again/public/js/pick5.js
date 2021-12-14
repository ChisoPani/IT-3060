function pick5() {
	'use strict';

	//generate random num from 0-1 and store in variable
	const result1pick = Math.floor(Math.random()*10);
	const result2pick = Math.floor(Math.random()*10);
	const result3pick = Math.floor(Math.random()*10);
	const result4pick = Math.floor(Math.random()*10);
	const result5pick = Math.floor(Math.random()*10);

	//Get stored element and insert in html value
	document.getElementById("result1").value = result1pick;
	document.getElementById("result2").value = result2pick;
	document.getElementById("result3").value = result3pick;
	document.getElementById("result4").value = result4pick;
	document.getElementById("result5").value = result5pick;

} 

function init() {
	'use strict';
	document.getElementById('generate').onclick = pick5;
} 
window.onload = init;