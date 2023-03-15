// class animal {
//     constructor(name, color){
//         this.name = name;
//         this.color = color;
//         console.log(`${this.name} constructor is called`);
//     }
//     run (){
//         console.log(this.name + " is Running! ");
//     }
//     shout (){
//         console.log(this.name + " is barking! ");
//     }
// }

// class Monkey extends animal {
//     eatBanana(){
//         console.log(this.name + " is eating banana!");
//     }
// }

// let ani = new animal("Sher", "Brown");
// let bandar = new Monkey("indianBandar", "Black");

// ani.run();
// bandar.shout();
// bandar.eatBanana();

// class Employee {
//     constructor(name){
//         console.log(`${name} Employee's constructor called `);
//         this.name = name;
//     }
//     login(){
//         console.log(`Employee has login`);
//     }

//     logout(){
//         console.log(`Employee has logout`);
//     }
//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves`);
//     }
// }

// class Programmer extends Employee{
//     // constructor(...arg){---> if there is no constructor in the child class, this is created automatically
//     //     super(...arg)
//     // }
//     constructor(name){
//         super(name);
//         console.log(`This is newly constructor called `);
//         this.name = name;
//     }
//     requestCoffee(x){
//         console.log(`Employee has requested ${x} coffee`);
//     }
//     // method overriding
//     // requestLeaves(leaves){
//     //     console.log(`Employee has requested ${leaves + 1} leaves (One extra)`);
//     // }
//     requestLeaves(leaves){
//         super.requestLeaves(4);
//         console.log(`One extra leave granted`);
//     }
// }
// let e = new Programmer("Harry");
//     e.login();
//     e.requestLeaves(3);


// class Animal {
//     constructor(name){
//         this.name = Animal.capitalize(name);
//     }
//     walk (){
//         console.log(`Animal ${this.name} is walking`);
//     }
//     static capitalize(name){
//         return name.charAt(0).toUpperCase() + name.substr(1, name.length);
//     }
// }

// j = new Animal("jack");
// j.walk();


// There are two types of methods 1. is instance method,  2. static method 

// class Person {
//     constructor(name, birthYear, gender){
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;
//     }

//     calcAge(){ // This is instance method which is associated with the object  not with class
//         // console.log(new Date().getFullYear() - this.birthYear);
//         console.log("This is class instance method");
//     }

//     static greet(){ // this is static method which is associated with the class not with object
//         console.log("Hey there! How are you?");
//     }
// }

// let john = new Person('Jhon', 1980, "Male");

// console.log(john);
// Person.greet(); // This is calling of static method and it is only associated with the class not with the object
// john.calcAge(); // This is calling of instance method and it is only associated with the object and not with the class 


// class Animal{
//     constructor(name){
//         this._name = name;
//     }
//     fly(){
//         console.log(`I am flying`);
//     }
//     get name(){
//         return this._name;
//     }

//     set name(newName){
//         this._name = newName;
//     }
// }

// let a = new Animal("Hamza");
// a.fly();
// console.log(a.name);
// a.name = "Khan"
// console.log(a.name);
// console.log(a instanceof Animal); // the instanceof let us know that whether the object belogns to a certain class or not 


// class Complex {
//     constructor(real, imaginary){
//         this.real = real;
//         this.imaginary = imaginary;
//     }
//     add(num){
//         this.real = this.real + num.real;
//         this.imaginary = this.imaginary + num.imaginary;
//     }
// }

// let a = new Complex(2, 4);
// let b = new Complex(6, 2);

// a.add(b);
// console.log(`${a.real} + ${a.imaginary}i`);


// class Human{
//     constructor(name, favFood){
//         this.name = name;
//         this.favFood = favFood;
//     }
//     walk(){
//         console.log(`${this.name} Human is walking`);
//     }
// }

// class Student extends Human{
//     walk(){
//         console.log(`${this.name} : Students are walking`);
//     }
// }

// let o = new Student("Hamza", "Biryani");
// o.walk(); 
// console.log(o instanceof Human);


// class Complex{
//     constructor(real, imaginary){
//         this.real = real;
//         this.imaginary = imaginary;
//     }
//     add(num){
//         this.real = this.real + num.real;
//         this.imaginary = this.imaginary + num.imaginary;
//     }

//     get real(){
//         return this._real
//     }
//     get imaginary(){
//         return this._imaginary;
//     }
//     set imaginary(newImaginary){
//         this._imaginary = newImaginary;
//     }
//     set real(newReal){
//         this._real = newReal;
//     }

// }

// let a = new Complex(2, 4);
// console.log(a.real, a.imaginary);
// a.real = 10;
// a.imaginary = 10; 
// let b = new Complex(6, 2);

// a.add(b);
// console.log(`${a.real} + ${a.imaginary}i`);



let a = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(400);
    }, 2000)
})

let f = async ()=>{
    let b = await a;
    console.log(b);
    let c = await a;
    console.log(c);
    let d = await a;
    console.log(b, c, d);
}

f();