/*

# JavaScript and classes
# OOP

#Object
- Collection of Properties and method
- toLowerCase


#Why use oop?

#Part of oop?
-Object Literal


-Constructor function
-Prototype
-Classes
-Instance (new, this)


4pillars :- 

Abstraction
Encapsulation
Inheritance
Polymorphism
*/

/************************************************************************* */

let myObject = {
    userName : "Sujit",
    loggedIn : true,
    email : "test@email.com",
    getUserDetails : function(){
        console.log(this)
    }
}

console.log(myObject)
/* return
{
  userName: 'Sujit',
  loggedIn: true,
  email: 'test@email.com',
  getUserDetails: [Function: getUserDetails]
}
*/

console.log(myObject.getUserDetails())
/* return
{
  userName: 'Sujit',
  loggedIn: true,
  email: 'test@email.com',
  getUserDetails: [Function: getUserDetails]
}
*/




