// selectors
// document.getElementById("id");
// document.getElementsByClassName("class");
// document.getElementsByTagName("tag");
// document.querySelector("selector");
// document.querySelectorAll("selector");
// document.getElementsByName("name");
// document.getElementsByClassName("class")[0].style.color = "red";
// document.getElementsByTagName("tag")[0].style.color = "red";
// document.querySelector("selector").style.color = "red";
// document.querySelectorAll("selector")[0].style.color = "red";
// document.getElementsByName("name")[0].style.color = "red";
// document.getElementsByClassName("title")[0].style.color = "red";


let title = document.querySelectorAll(".title");
let container = document.getElementsByClassName("container");
let list_item1 = document.querySelectorAll(".mylist");
let list_item2 = document.querySelectorAll(".mylist");

title[2].textContent = "Hello World!";
title[2].style.color = "red";


console.log(list_item1)
list_item1.forEach((item) => {
    // item.style.backgroundColor = "blue";
    item.style.color = "green";
    item.style.padding = "10px";
    }
);

Array.from(list_item2).
