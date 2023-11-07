"use strict";
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase*/
// let personName = "Junaid Ali";
// let lowercaseName = personName.toLowerCase()
// let uppercaseName = personName.toUpperCase()
// let titlecaseName = (`Junaid Ali`);
// console.log(personName)
// console.log("Lower Case: " + lowercaseName)
// console.log("Upper Case: " + uppercaseName)
// console.log("Title Case: " + titlecaseName)
// Answer:
// Junaid Ali
// Lower Case: Junaid Ali
// Upper Case: Junaid Ali
// Title Case: Junaid Ali
//  "Issue"
let personName = "Jamshed";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
// In this example, we first declare a variable personName and store the person's name in it. 
// Then, we use the toLowerCase() method to print the name in lowercase, the toUpperCase() method to 
// print it in uppercase, and for titlecase, we capitalize the first letter using charAt(0).toUpperCase() and 
// then convert the rest of the name to lowercase using slice(1).toLowerCase().
