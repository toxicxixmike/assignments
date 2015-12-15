var Person = function (fName) {
    this.firstName = fName;
};    

Person.prototype.sayHello = function() {
      console.log(this.firstname + "This is my post");
}
  var person1 = new Person('Michael') ;
  var person2 = new Person('Joe') ;
  var person3 = new Person('Natalia');
  var person4 = new Person('Spoof');
  var person5 = new Person('Dustin');
  var person6 = new Person('Sean');
  
  
  var helloFunction = person1.sayThisisapost
  var helloFunction = person2.sayThisisapost

person1.firstname = "Michael";       // Set up names for who the different people who post. But how?
person2.firstname = "Joe" ;
person3.firstname = "Natalia";
person4.firstname = "Spoof";
person5.firstname = "Dustin"; 
person6.firstname = "Sean";
console.log(person1.firstName)

  
  console.log(person1.firstname + " This is my first post about boxes")    // Set up how I'm going to output the names and messages.
  
  console.log(person2.firstname + " This is also a post about boxes")
  console.log(person3.firstname + " Boxes are dumb");
  console.log(person4.firstname + " What are boxes?");
  console.log(person5.firstname + " I like corn");
  console.log(person6.firstname + " Fuel injected headers in my Audi");
  
