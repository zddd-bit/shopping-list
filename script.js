var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.getElementsByTagName("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	//add delete button
	addDelete(li);
	//use event delegation
	ul.addEventListener("click", addToggle);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//toggle
function addToggle(e) {
	e.target.classList.toggle("done");
}

//add delete button
function addDelete(li) {
	var delbutton = document.createElement("button");
	delbutton.appendChild(document.createTextNode("Delete"));
	delbutton.addEventListener("click", deleteButton);
	li.appendChild(delbutton);
}	
//add delete buttons for existing lis
for (var i = 0; i < lis.length; i++) {
	var li = lis[i];
	addDelete(li);
}
//delete list item
function deleteButton(e) {
	e.target.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addToggle);