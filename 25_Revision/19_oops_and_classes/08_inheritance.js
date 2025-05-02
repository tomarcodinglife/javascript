class User {
    constructor(username, email, password, type){
        this.username = username;
        this.email = email;
        this.password = password;
        this.type = type
    }
    loginMessage(){
        console.log(`Hi ${this.username} you are logedin`)
        return (`Hi ${this.username} you are logedin`)
    }
}

class student extends User {
    constructor(username, stuClass, subject, roll){
        super(username)
        this.stuClass = stuClass;
        this.subject = subject;
        this.roll = roll;
    }
    showStudentDetails(){
        console.log(`student : ${this.username}, ${this.stuClass}, ${this.subject}, ${this.roll}`)
        return (`student : ${this.username}, ${this.stuClass}, ${this.subject}, ${this.roll}`)
    }
}

class instructor extends User {
    constructor(username, coursesQty, sellCourse, learner){
        super(username)
        this.coursesQty = coursesQty;
        this.sellCourse = sellCourse;
        this.learner = learner;
    }
    showTeacherDetails(){
        console.log(`teacher : ${this.username}, ${this.coursesQty}, ${this.sellCourse}, ${this.learner}`);
    }
}


const student1 = new student ("Sujit", "sujit@gmail.com", "Computer Science", 80)
const instructor1 = new instructor ("SujitTomar", 15, 235, 80000)

student1.loginMessage();
student1.showStudentDetails() 

instructor1.showTeacherDetails()
