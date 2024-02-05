"use strict";
const User = {
    name: "hari",
    age: 25
};
const userLocation = {
    city: "Pune",
    country: "India"
};
const createUserProfile = (user, location) => {
    //    return  `My self ${user.name} , i am ${user.age} years old and i am from ${location.city}`
    return { ...user, ...location };
};
console.log(createUserProfile(User, userLocation));
