var input = document.getElementById("userInput")        //input
var iconButton = document.getElementById("button")  //enter
var ul = document.querySelector("ul")
var item = document.getElementsByTagName("li") 

function inputLength()
{
    return input.value.length;
}

function listLength(){
	return item.length;
}

//when we enter the text written in the input box with id=enter then it has to move to a new list 
//after pressing the enter button a new list is created to add item in that list

function createListElement()
{
    var li = document.createElement("li");             //created li element using createElement function
    var para = document.createTextNode(input.value);     //created node of the input entered by the user   
    li.appendChild(para);                              //appended that input to the li element
    ul.appendChild(li);                                //append the entered input to the ul element 
    input.value = "";                                    // reset the text item box to empty field again
                                                        // so that new text can be entered again in the user input box

     //START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH
                                                        
    // START 
	var cross = document.createElement("button");            //add a X button to cross the list item
	cross.appendChild(document.createTextNode("X"));
	li.appendChild(cross);
	cross.addEventListener("click", deleteListItem);        //when we click on the X button the item gets deleted
	// END 

    //ADD 
	function deleteListItem(){                              // add CLASS delete with (DISPLAY: NONE)
    li.classList.add("delete");        // with display= none then after clicking
                                        // the X button the li item gets removed
	}
	//END ADD CLASS DELETE

}

function addItemToListAfterClick()
{
    if (inputLength() > 0)        
    {                                  //means that no empty list should be created when pressed button or clicked)
        createListElement();                //if length is > 0 then a new list is created
    }
}     

function addItemWhenKeypress(event)
{
    if (inputLength() > 0 && event.keyCode ===13)        //when we hit 'enter' button the 'which' property of keyboard
    {                                                //has the unicode value = 13 for hitting the enter button on keyboard
        createListElement();
    }
}

iconButton.addEventListener("click", addItemToListAfterClick);   //when the user clicks on the icon button on the screen
                                                                //it calls the respective function
input.addEventListener("keypress", addItemWhenKeypress);   //when the user hits enter button then
                                                                //it calls the respective function