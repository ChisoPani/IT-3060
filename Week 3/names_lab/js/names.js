// This script concatenates two strings together to format a name.

// Function called when the form is submitted.
// Function formats the text and returns false.
function formatNames() {
	// TODO Declare a variable for storing the formatted name:
	var fullname;
    
	// TODO Get a reference to the form values (hint: use document.getElementById)
	//var result = document.getElementById('result');
	var fname = document.getElementById('firstName').value;
	var lname = document.getElementById('lastName').value;

	// TODO Create variables to hold the uppercase initial of each name
	var fnamecap = fname[0].toUpperCase() + fname.slice(1);
	var lnamecap = lname[0].toUpperCase() + lname.slice(1);
	
	// TODO Create the formatted name (hint: use string concatenation)
	fullname = lnamecap  + ", " + fnamecap;
	
	// TODO Display the formatted name
	document.getElementById('result').value = fullname;

	return false;
}
	function init() {
		if (document && document.getElementById) {
		   document.getElementById('theForm').onsubmit = formatNames;
		}
 }
	 

window.onload = init;
