//complete this code
class Person {
	 #age
    constructor(name , age){
        this._name = name;
        this.#age = age

    }
    get name(){
        return this._name
    }
    set age(value){
        this.#age = value
    }
    get age(){
        if(this.#age < 0){
            console.log("Age is not valid");
        }
        return Number(this.#age)
    }
}

class Student extends Person {
	 student_details(){
        console.log(`${this.name} is studing`);
    }
}

class Teacher extends Person {
	 teacher_details(){
       console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
