'use strict';

const kendra = {
    name: 'Kendra',
    age: 24,
    happy: true,
    hairColor: 'brown',
    happy: true,
}

const JP = {
    name: 'JP',
    age: 23,
    happy: true,
    hairColor: 'brown',
    happy: false,
}
const kate = {
    name: 'Kate',
    age: 23,
    happy: true,
    hairColor: 'blonde',
    happy: true,
}

const bffArray = [kendra,JP,kate];
// console.log(bffArray);
    // set condition  length of condition(how much data to display) when it stops
for (let i = 0; i < bffArray.length; i++) {
    console.log(`Hello, ${bffArray[i].name}. I head you are ${bffArray[i].age}. That is so old. ${bffArray.happy ? 'true' : 'Why are you so stinky? 'false' : You are lame."`);
}

if kendra.happy{
    return 'happy';
} else {
    return 'unhappy';
}