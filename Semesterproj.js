var Person = function (fName) {
    this.firstName = fName;
};    

Person.prototype.sayHello = function() {
  console.log("Hello, I am " + this.firstName);
}
var person1 = new Person('Michael') ;
var helloFunction = person1.sayThisisapost

person1.firstname = "Michael";
console.log(person1.firstName)

 person1.thisisapost ; 