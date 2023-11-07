/* They think of something you could store in a TypeScript Object. Write a program that creates Objects 
containing these items.*/

type objType={Name:string, Age:number, Email:string, City:string, Country:string} 

const person1:objType={
    Name    : "Junaid",
    Age     : 30,
    Email   : "gunaidali75@gmail.com",
    City    : "Karachi",
    Country : "Pakistan"}

const person2:objType={
    Name    : "Jamshed Ali",
    Age     : 28,
    Email   : "jamshedali@gmail.com",
    City    : "Philidelphia",
    Country : "USA"}
   
console.warn(person1);
console.warn(person2);