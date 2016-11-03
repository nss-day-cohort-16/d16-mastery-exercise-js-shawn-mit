//get tree setup with key value pairs dynamically determined by user input 

var tall = document.getElementById ("tall");
var char = document.getElementById("char");
//var output = document.getElementById ("output");

var theTree = {
	height:tall.value,
	character:char.value
};

	function getInput () {


	if ( theTree.height <= 0 || theTree.character === "" ) {
		alert ("Must enter a number and a character!");
	}

	else {
		
		growTree(theTree)
		 
		 }

	}
	
	function growTree (objTree) {

		var height = objTree.value;
		var character = objTree.value; 
		var numSpaces= " ";

	for (i = 0; i < height; i ++){

		if ((i * 2 ) +1 ) {

		console.log ("test", objTree); 


		//object[property_name] = set;
		}
	} 

	//return growTree.addEventListner("click", ????);			
}

//'Grow your Tree button */

treebutton.addEventListener("click", getInput);




	 




