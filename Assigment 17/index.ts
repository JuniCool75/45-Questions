/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop 
a name from your list, print a message to that person letting them know you’re sorry you can’t invite them 
to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program. */

let Name = "Guest List:-";
let ChangingGuestlist:string[] = 
["Avari Tower: " + "Mr. Zia Khan with Family",
"Avari Tower: " + "Mr. Saad with Family", 
"Avari Tower: " + "Mr. Tanveer with Family",
"Avari Tower: " + "Mr. Fawad with Family",
"Avari Tower: " + "Mr. Ather with Family",
"Avari Tower: " + "Mr. Salim with Family"];

console.log(Name);
console.log(ChangingGuestlist); 


let ChangingGuestlist1:string[] = ChangingGuestlist.slice(1);
let ChangingGuestlist2:string[] = ChangingGuestlist.slice(2);
let ChangingGuestlist3:string[] = ChangingGuestlist.slice(3);
let ChangingGuestlist4:string[] = ChangingGuestlist.slice(4);


["Avari Tower: " + "Mr. Zia Khan with Family",
"Avari Tower: " + "Mr. Saad with Family", 
"Avari Tower: " + "Mr. Tanveer with Family",
"Avari Tower: " + "Mr. Fawad with Family",
"Avari Tower: " + "Mr. Ather with Family",
"Avari Tower: " + "Mr. Salim with Family"];

console.log(ChangingGuestlist1); 
console.log(ChangingGuestlist2); 
console.log(ChangingGuestlist3); 
console.log(ChangingGuestlist4); 