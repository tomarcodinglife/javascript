let course = {
    courseName : "JavaScript",
    prince: 899,
    teacher : "tomar"
}
/* function create in object */
course.buyCourse = function(){
    console.log("Code Fat Gaya ese hi bolte hai😊")
}

// in this case you give a return function that is problem
for (let [key, value] of Object.entries(course)){
    console.log(`${key} : ${value}`);
}

/* 
courseName : JavaScript
prince : 899
teacher : tomar
buyCourse : function(){
    console.log("Code Fat Gaya ese hi bolte hai😊")
}
*/

// in this case you get better result 
for (let [key, value] of Object.entries(course)){
    if(typeof value !== 'function'){   // here you pass function in string case
        console.log(`${key} : ${value}`);
    }
}

/*
courseName : JavaScript
prince : 899
teacher : tomar
 */
