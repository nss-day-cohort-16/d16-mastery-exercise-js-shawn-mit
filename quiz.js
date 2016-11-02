//get tree setup with key value pairs dynamically determined by user input 

var tall = document.getElementById ("tall");
var char = document.getElementById("char");
var output = 

var theTree = {
	height:tall.value, 
	character:char.value,
	getInput: function () {

	if ( theTree.height <= 0 || theTree.character <= "" ){
		alert ("Must enter a number and a character!");
	}

	else {
		
		growTree(theTree.getInput())
		 
		 }

	}
	
}


function growTree () {

		var tree = "";    
		var stringSpacing = " ";

	for (i = 0; i < theTree.height.length; i ++){

		if ((i * 2 ) +1 ) {

			tree += " ";
		}

	} 
		
}



	
treebutton.addEventListener("click", theTree.getInput);




	 




