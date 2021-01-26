"use strict";

var changeMain = function() {
    document.body.style.backgroundColor = "lightblue";

    var myMain;
    var secondMain;
    myMain = document.querySelector('main'); // selecting the whole main tag (but only first instance!)
    secondMain = document.getElementById('a'); // gets a RANDOM element with that id... dont duplicate!
    myMain.innerHTML = "<h3> Im blue today <h3>";
    secondMain.innerHTML = "<p> I was the second main <p>"
    // style
    myMain.style.height = '50px';
    myMain.style.width = '50%';
    myMain.style.backgroundColor = 'blue'
    myMain.style.color = 'white'
    secondMain.style.height = "25px"
    secondMain.style.width = "50%"
    secondMain.style.backgroundColor = "red"
}

var hydraButton = function() {
    var newButton1 = document.createElement("button");
    var newButton2 = document.createElement("button");
    var after = document.getElementById("hydrasection");

    newButton1.id = "hydra"
    newButton1.innerHTML = "Hydra Button"
    newButton1.addEventListener("click", hydraButton)
    after.appendChild(newButton1)

    newButton2.id = "hydra"
    newButton2.innerHTML = "Hydra Button"
    newButton2.addEventListener("click", hydraButton)
    after.appendChild(newButton2)
}


// prints all elements in a <p> tag to console
var myArr = document.getElementsByTagName("p");
for(var p of myArr) {
    console.log(p.toString() + p.innerHTML)
}
/*  List of some things you can alter for on an element:
        children, firstChild, lastChild, className, classList, id, innerHTML, textContent
        nextSibling, nodeName, tagName, parentElement, style, toString
    Can also Create and Graft new Nodes into the tree
        createElement, createAttribute, appendChild, insertBefore
*/
