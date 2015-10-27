

var Person = function (fName) {
    this.firstname = fName;
    console.log('instance created');
};    

var person1 = new Person('Michael') ;
var person2 = new Person('Helga') ;
person1.firstname = "Michael";
console.log(person1.firstname)
console.log(person2.firstname)
