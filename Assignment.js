//Question1

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

function students (a) {
   let shift = a.shift(); 
    let pop = a.pop();
    console.log(pop - shift);
        a.unshift(shift);
        a.push(pop);   
} 
students (ages);

ages.push(5);
students (ages);

let leng = ages.length;
    let count = 0;

for (let i = 0; i < ages.length; i++) {
    count += ages[i]
}
console.log(count/leng);

//Question2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

let len = names.length;
let num = 0;

for (let i = 0; i < names.length; i++) {
    num += names[i].length;
} 
console.log(num/len);

let people = '';

for (let i = 0; i < names.length; i++) {
    people += names[i] + ' ';
} 
console.log(people);

//Question3

console.log(names.slice(-1));

//Question4

console.log(names[0]);

//Question5

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//Question6

let namesArray = 0;

for (let i = 0; i < nameLengths.length; i++) {
    namesArray += nameLengths[i];
}
console.log(namesArray);

//Question7

let words = '';

function cookie (word, n) {
    for (let i = 0; i < n; i++) {
        words += word;
    } 
    console.log(words);
}
cookie ('Hi', 4);

//Question8

let fullName = '';

function name (firstName, lastName) {
    let full = firstName + ' ' + lastName;
    console.log(full);
}
name ('Mary', 'Jackson');

//Question9

let array2 = [5, 100, 4]

function array (a) {
    let array1 = 0
    for (let i = 0; i < a.length; i++){
        array1 += a[i];
    }
    
    if(array1 > 100){
        console.log(true)
    }else {
       console.log(false)
    }
}
array(array2);

//Question10

function funk (array1) {
    let number = array1.length;
    let count1 = 0;
    for (let i = 0; i < array1.length; i++) {
        count1 += array1[i]
} 
    console.log(count1/number);
}

funk ([5, 8, 9, 12, 32, 1]);

//Question11

function funk1 (array1, array2) {
    let number = array1.length;
    let number2 = array2.length;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < array1.length; i++) {
        count1 += array1[i]
} 

    for (let i = 0; i < array2.length; i++){
        count2 += array2[i]
    }
    
    if((count1/number) > (count2/number2)){
        console.log(true)
    }else {
        console.log(false)
    }
}

funk1 ([5, 8, 9, 12, 32, 1], [4, 8, 10, 0, 17, 25, 6]);


//Question12

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside==true && moneyInPocket >= 10.50){
        console.log(true)
    }else{
        console.log(false)
    }
}

willBuyDrink(true, 10.51)
//Question13

function solveAProblem(problem){
    let solves = 'solves';
    let a = 'a';
    let answerToQuestion = ''

    for(let i = 0; i < 3; i++){

        if(i == 0){
           answerToQuestion += solves + ' '
        } else if (i == 1){
            answerToQuestion += a + ' '
        } else {
            answerToQuestion += problem
        }
        
    }

    console.log(answerToQuestion)
}

solveAProblem('problem')


