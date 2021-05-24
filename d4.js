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


/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
let second=
{
    name:"Hey",
    surname:"hello",
    email:"heyhello@gmail.com",
}
console.log(details.email,second.email)

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/
let totalShoppingCart = 122
if (totalShoppingCart <= 50)
    totalShoppingCart += 10 
console.log(totalShoppingCart)


/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let discount= (totalShoppingCart * 20) / 100
//let discount2 = totalShoppingCart * 0.2
if(totalShoppingCart>50){
    totalShoppingCart = totalShoppingCart - discount
}else{
    totalShoppingCart +=10
    totalShoppingCart = totalShoppingCart - discount
}
console.log("Total shopping amount:", totalShoppingCart)


/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car={
    brand: "BMW",
    model: "A2016",
    licensePlate: "XYZ123"
}
let car2 = {
    ...car,
    licensePlate: "ABC123"
}
let car3 = {
    ...car,
    licensePlate: "KLG544"
}
let car4= {
    ...car,
    licensePlate: "HJAS21"
}
let car5= {
    ...car,
    licensePlate: "RWE123"
}