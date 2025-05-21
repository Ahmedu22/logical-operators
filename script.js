// logical opertaors
// 1. logical opertaors AND(&&)
// 2. logical opertaors OR (||)
// 3. logical opertaors NOT (!)

//  1. AND(&&)

let a = true;
let b = false;
let c = 4;
console.log(c > 2 && c < 2);
console.log(c < 2 && c < 2);

//  OR (||)

console.log(c < 2 || c < 2);
console.log(c > 2 || c < 2);

let isweekend = true;
let isholiday = false;
if (isweekend || isholiday){
    console.log('you can relax');
}

// NOT (!)

let isRaining = false;
if(!isRaining){
    console.log('go outside');
}

// Arrays

// array litterals []
let list = [4,5,7,8];
list[0] = 'yes'
console.log(list)

// push= adds un array at the end 

const fruits = [
    "panana",
    "mango",
    "pineapple",
    "orange"
]
console.log(fruits)
fruits.push()

// pop= removes un array at the end

fruits.pop()

// shift removes an array at the start
fruits.shift()
// ushift = add Array at the begening
fruits.unshift()

// join
let people =["Ahmed","ibrahim", "Noor" ]
console.log(people.join('-'))

// reverse
console.log(people.reverse())

// slice
console.log(people.slice())




// opject
let info = {
    course: 'java',
    location: ["kenya", "Garissa" ],
    level: 'all levels',
    school: 'zein empower',
    id: '445522',
    duration: "7weeks",
    chapters: {
        section1: 'basic',
        section2: 'intermediate',
        section3: 'advance'
    },
}
console.log(info)
console.log(info.course = "python");