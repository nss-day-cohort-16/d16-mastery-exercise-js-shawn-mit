
treebutton.addEventListener("click", getInput (event));





function getInput () {

var tall = document.getElementById ("tall");
var char = document.getElementById("char");
//var output = document.getElementById("output");

var tree = {
		height:tall.value,
		character:char.value
	};
 
//var newTree = {}; 
//var spaces = " ";

	if (tree.height < 1 ) {

		alert("Enter a number"); 

	} 

	else if (tree.character === "") {

		alert("Enter a character");

	}

	else {

		growTree(tree)
	}

};

	function growTree (tree) { 

		
		for (i = 0; i < tree.height; i++ ) {

			var buffers = " ";
			var characters = (i * 2) +1;
			var treeVertical = (tree.height - 1 ) - i;
			
		//console.log("newTree", growTree);
		 console.log ( /*"test",*/ buffers.repeat(treeVertical) + tree.character.repeat(characters));
		}
	};

	
	
	//document.getElementById("output").innerHTML = buffers + characters + treeVertical; 
	
