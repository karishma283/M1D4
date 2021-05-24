/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/
let positive =[2,4,6,8,10]
console.log(positive)

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
let details= {
    name:"karishma",
    surname:"shaik",
    email:"itsmekareshma@gmail.com",
    address:"vetterstrasse",
    age:25,

}
console.log(details)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
details.drivingLicense=true;
console.log(details)

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete details.age
console.log(details)
