//get tree setup with key value pairs dynamically determined by user input 

var theTree = {};

//var x = document.getElementById("myText").value;

 function getInput () {

	theTree.height = document.getElementById ("tall").value;
	theTree.character = document.getElementById("char").value;
	
	};

	if ( theTree.height === "")
		alert ("Must enter a number!");
		
	} 
	else { 
		
		growTree()
	}; 	

	// create if else for conditions of user interaction

function growTree () {

		var treeBranch = "";

		for (i = 0; i < theTree.height.length; i++){
			treeBranch +=  insertSpaces.height;

			}
		}	 



	  /*space = ""  
	  loop through giving the array spaces 

	  .repeat()  // use for tree . */



//  click event for tree button
//treebutton.addEventListener("click",  ); 

//	document.getElementById("treebutton").addEventListener("click", y ) 
	document.getElementById("output").innerHTML = ""


