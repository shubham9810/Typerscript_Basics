"use strict";
const dispayPersonInfo = (person) => {
    const [name, age, hasDrvingLicense] = person;
    console.log(`Name ${name}, age ${age} , Driving license : ${hasDrvingLicense ? "Yes" : "No"}`);
};
const person1 = ["Ajay", 25, true];
const person2 = ["Aashu", 26, false];
//  const res1 = dispayPersonInfo(person1);
//  const res2 = dispayPersonInfo(person2);
