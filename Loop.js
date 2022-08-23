// Q1:
// Write a function named createList that takes in an array of the current store intentory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate
//  your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.

// let obj1 = { name: 'apples', available: true };
// let obj2 = { name: 'pears', available: true };
// let obj3 = { name: 'oranges', available: false };
// let obj4 = { name: 'bananas', available: true };
// let obj5 = { name: 'blueberries', available: false }
// let arr = [];
// arr.push(obj1);
// arr.push(obj2);
// arr.push(obj3);
// arr.push(obj4);
// arr.push(obj5);
// // console.log(arr);

// function createList(arrayOfObj) {
// let arrResult=[]
//     arrayOfObj.forEach(obj => {
//         if(obj.available==true){
//            arrResult.push(obj);
//         }else {
//             // continue ;
//         }
//     })
//     console.log(arrResult);
// }


// createList(arr);





// Q2:map
// Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3,'a']) returns ['odd','even','odd','N/A'].


// let arr = [1, 2, 3, 'a',"z","ibrahim",'1','2'];
// function numbers(arr) {
//     const roots = arr.map((element) => {
//         if (element % 2 == 0) {
//             return "even";
//         } else if (element % 2 == 1) {
//             return "odd";
//         } else {
//             return "N/A"
//         }
//     });
//     console.log(roots);
// }

// numbers(arr);



// Q3:filter
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3,5], [1,2,3,4]) returns [4].


// let arr1 = [1, 2, 3, 5];
// let arr2 = [1, 2, 3, 4];
// function notInFirstArray(arr1, arr2) {
//     return arr2.filter((element) => !arr1.includes(element));
// }
// console.log(notInFirstArray(arr1, arr2));


// Q4:
// var reverseString = function(s) {
//     return s.reduce((rev, char) => char+rev, "").split("");
//   }
//   console.log(reverseString(['h', 'e', 'l', 'l', 'o']));




// Q5: regex
// Write a function named isNum that takes in a string or number of any length. 
// This function should use a regular expression pattern to return true if the input contains a number,
//  and false if the input does not contain a number.

// function isNum(arr) {
//     console.log(/\d/.test(arr));
// }

// isNum('h3llo world');




// Q6:regex
// You have created a game application and begin by asking users an easy question: In which month is Halloween?

// Write a function named matchMonth which uses a regular expression pattern to match any of these 
// inputs: October, Oct, october, oct

// If the user enters any of these four inputs, return true. For any other input, return false.

function matchMonth(month) {
    let pattern = /October|Oct|oct|october/ig;
   let arr=pattern.test(month);
   console.log(arr);
   
}
matchMonth("oct")