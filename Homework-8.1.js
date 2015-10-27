var Person = function (fName) {
    this.firstName = fName;
};    

Person.prototype.sayHello = function() {
  console.log("Hello, I am " + this.firstName);
}
var person1 = new Person('Michael') ;
var person2 = new Person('Helga') ;
var helloFunction = person1.sayHello;

person1.firstname = "Michael";
console.log(person1.firstName)
console.log(person2.firstName)

person1.sayHello();
person2.sayHello();

helloFunction();

console.log(helloFunction === person1.sayHello);
console.log(helloFunction === Person.prototype.sayHello);

helloFunction.call(person2);

Person.prototype.walk = function(){
  console.log("I am walking!");
};


function Student(firstName, subject) {
Person.call(this, firstName);
this.subject = subject;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;


 Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying "
              + this.subject + "Physics");
 };
 
 Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

var student1 = new Student("Michael", "Physics");
student1.sayHello();
student1.walk();
student1.sayGoodBye();