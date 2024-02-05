var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = "Ajay";
        this.age = 25;
        this.hobbies = ["Cricket", "Reading books", "Tracking"];
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Persons;
}());
var Person1 = new Persons("Sanjay", 25, ["Cricket"]);
var Person2 = new Persons("Akash", 26, ["Chess"]);
var Person3 = new Persons("Rahul", 24, ["Hockey"]);
console.log("data1 ..", Person1);
console.log("data2 ..", Person2);
console.log("data3 ..", Person3);
