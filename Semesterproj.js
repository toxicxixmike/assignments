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
  var person7 = new Person('Rich');
  var person8 = new Person('Josh');
  
  
  var helloFunction = person1.sayThisisapost
  var helloFunction = person2.sayThisisapost

person1.firstname = "Michael";       // Set up names for who the different people who post. But how?
person2.firstname = "Joe" ;
person3.firstname = "Natalia";
person4.firstname = "Spoof";
person5.firstname = "Dustin"; 
person6.firstname = "Sean";
person7.firstname = "Rich";
person8.firstname = "Josh";
console.log(person1.firstName)

  
  console.log(person1.firstname + " This is my first post about boxes")    // Set up how I'm going to output the names and messages.
  
  console.log(person2.firstname + " This is also a post about boxes")
  console.log(person3.firstname + " @Michael Boxes are dumb");                       // Don't know how I'm going to set up reply messages 
  console.log(person4.firstname + " @Michael What are boxes?");                // Using the @ symbol I can signify I'm replying
  console.log(person5.firstname + " I like corn");
  console.log(person6.firstname + " I have fuel injected headers in my Audi");
  console.log(person7.firstname + " I hate playing Counter Strike because I get mad");
  console.log(person8.firstname + " I vape");