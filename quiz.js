
treebutton.addEventListener("click", output);


function getInput (spaces, newTree) {

var tall = document.getElementById ("tall");
var char = document.getElementById("char");
var output = document.getElementById("output");

var tree = {
		height:tall.value,
		character:char.value
	};
 
var newTree = {}; 
var spaces = " ";

	if (tree.height < 1 ) {

		alert("Enter a number"); 

	} 

	else if (tree.character === "") {

		alert("Enter a character");

	}

	else {

		for (i = 0; i < tree.height; i++ ){

			newTree.height += newTree; 
		}

		for (c = 0; c < tree.character; c++){

			newTree.character += newTree;
		}

		for (s < 0; s < tree.height ; s++){

			spaces.value 		
		}	

		return newTree;
		
	}

 	//console.log('newTree', newTree);
}


/*	function output (getInput) {

output = document.getElementById().innerHTML = "<div>"  + spaces + newTree +  "</div>" 


}


*/