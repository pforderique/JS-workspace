/*
Runestone: Javascript for Python Programmers

Piero Orderique
25 Jan 2021

Just learning some of the basics
*/

// Ch2: Introduction
let ch2 = function() {
    let a = 5<4 ? "5 is less than 4" : "5 is not less than 4";
    console.log(a + "\n");

    // array iteration
    let l = [1, 2, 1, 2, 3]
    for (let elem of l) { console.log(elem); } // "of" gets elem itself
    console.log("\n");
    for (let idx in l) { console.log(l[idx]); } // "in" gets indexes 0 to len(l)-1
    console.log("\n");
    var sum = 0;
    l.forEach(function(d){
        sum += d;
    })
    console.log(sum, "\n");

    // string iterations
    let s =  "Hello There";
    for (let char of s) { console.log(char); }

    // Data Types:
    // number, string, boolean, undefined, null, symbol (new)
    var ask = function() {
        var name;
        name = prompt("Enter Name: ")
        console.log("Hello " + name + "!")
    }
    // ask() doesn't work bc prompt is used in browser - not node

    // just use let. Dont use var anymore
    let x = Number("5");
    let b = undefined;
    let c = null;
    let d = Symbol("SYMBOL");
    console.log(x, b, c, d);

    // Booleans:
    // False: null, undefined, NaN, 0, "", and false
    // True: Everything else (including empty lists)
    console.log(Boolean([])); // True :(

    // a function that doesnt return anything returns undefined
    `
    This is a multiline string using BACKQUOTE (tilde)
    You can write formatted string with backquotes like Python's f"..."
    `
    total = 10
    str = `The total is ${total}`
    console.log(str)

    // Collections!
    /*
    everything in JavaScript is an object.
    all objects are capable of acting like dictionaries.
    In JavaScript you can add an attribute to any object. 
        myObj.someattribute = somevalue
    */
    // Checking for memebership (if x in myList):
    let mylist = [1,2,3,"foo", "bar"];
    if (mylist.includes(3)) { /* do something*/ }
    if (mylist.indexOf(3) > -1) {/* do something */ }
    // Every object has KEYS
    for (let k of Object.keys(mylist)) { console.log(k) }
    console.log("the quick brown fox jumps over".split(/\s/).join(":"))
    
    // How to count = [0]*10 ?
    let count = new Array(10).fill(0);

    // simplifying
    let data = '9,8,4,3,5,5,1,1,5,8,9,7,7,7,6'
    sum = data.split(',')
        .map(function(t) {return parseInt(t)})
        .reduce((a,b) => a+b)
    console.log(sum)

    // Everythings an obj and everythings a dictionary
    let j = {"test": 3}
    j['foo'] = 'bar'
    j[2] = 99
    j.answer = 42
    console.log(Object.keys(j))
    // there is no myDict.values() in javascript
    const vals = Object.keys(j).map(key => j[key])
    // ^equivalent to .map(function(key) {return myDict[key]})
    console.log(vals)

    // in python, dict.get(key, 0) returns 0 if key not in dict.
    // Javascript uses myDict['nobodyhome'] || 'default' 

    let isPalindrome = function(str) {
        console.log(str)
        if (str.length == 1 || str.length == 0) { return true }
        if (str.indexOf(0) != str.indexOf(str.length - 1)) {
            return false
        } else {
            return isPalindrome(str.substring(1, str.length - 1))
        }
    }
    console.log(isPalindrome("heyh"))
}

// Ch3: OOP
// Prototypal inheritance is a form of object-oriented code reuse
// In classical inheritance, the programmer writes a class, which defines an object
// In the prototypal inheritance form, objects inherit directly from other objects
// In javascript, every object has a secret link to the object which created it, forming a chain
class Fraction {

    constructor(num, den) {
        this._numerator = num;
        this._denominator = den;
    }
    // dont have to include function key word for our methods!
    toString() { return `${this.numerator} / ${this.denominator}`; }

    get numerator() { return this._numerator; }
    get denominator() { return this._denominator; }
    set numerator(v) { console.log("error cannot set the numerator"); }
}
class SuperFraction extends Fraction {
    constructor(num, den, superpower) {
        super(num, den)
        this._superpower = superpower
    }
}
let ch3 = function() {
    let frac = new Fraction(3, 5);
    console.log(frac.toString())
    console.log(frac.numerator)
}

// Ch4: Advanced Topics
// functions find variables in the closure that is created when they were defined.
"use strict";
function buttonMaker(parent) {
    let counter = 0
    let bp = document.getElementById(parent)
    let b = document.createElement('button')
    b.innerHTML = counter
    b.onclick = function() {
        counter = counter + 1;
        b.innerHTML = counter;
    }
    bp.appendChild(b)
}
buttonMaker("buttondiv")

// Ch5: Web Programming

