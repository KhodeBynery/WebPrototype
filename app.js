'use strict'


// This is a single-line comment. This was cloned.

/* Here's a
multi-line
comment. */

// console.log('This code is no longer active')

// <!-- This is an HTML comment. -->

/* CSS comments are just like multi-line 
JavaScript ones.*/

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

console.log('Here\'s a hidden message');