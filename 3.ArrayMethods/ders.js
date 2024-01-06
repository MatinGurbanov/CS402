////////////// TASK 1 //////////////
// // 1
// console.log(12*8);

// // 2
// let x=10/2
// console.log(x);

// // 3
// let num1 = 20
// num2 = 17
// console.log(num1 + num2);

// // 4
// let name = 'Metin'
// let surname = 'Qurbanov'
// let year = 2005
// let info = name + ' ' + surname + ' ' + year
// console.log(info);

// // 5
// console.log(17%12);

// // 6
// let cityName = 'Baku'
// cityName = 'Gence'
// console.log(cityName);

///////////// TASK 2 ///////////////
// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); // ? (cavab 2)
// console.log(d); // ? (cavab 1)
// console.log(b); // ? (cavab 2)

////////////// TASK 3 //////////////

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // ? (cavab 5)

////////////// TASK 4 //////////////

// console.log('test1', test); // ?(cavab test1, undefined)
// {
//     let test = "something"
//     console.log('test2', test); // ? (cavab test2, something)
// }
// console.log('test3', test);  // ? (cavab test3, undefined)


// console.log('test1', test);  // ? (cavab test1, undefined)
// {
//     var test = "something"
//     console.log('test2', test); // ? (cavab test2, something)
// }
// console.log('test3', test); // ? (cavab test3, something)

////////////// TASK 5 //////////////

// let name = "Ulfat" (string)
// let surname = Zakirli (-)
// let year = 2000 (number)
// year = "2000" (string)
// let city; (undefined)
// let qualification = null (null)
// let obj = { name: 'ulfat' } (object)
// let arr = ['a', 'b', 'c'] (array)

////////////// TASK 6 //////////////
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
// // 1
// let sum = 0
// arr1.forEach((number) => {
//     sum += number;
//   });
//   console.log(sum)
//   2
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// arr1.push(10, 88)
// console.log(arr1)
// 3
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// arr1.shift()
// arr1.shift()
// console.log(arr1)
// 4
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// arr1.unshift(0, 9, 11)
// console.log(arr1)
// 5
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// console.log(arr1)

////////////// TASK 7 //////////////
// 1
// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// const result = arr2.slice(2, -1)
// console.log(subArr)
// 2
// ?
// 3
// const arr = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// arr.map((item, index) => console.log(item))
// 4
// const arr = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// const ad = arr.filter(item => item === 'Anar')
// console.log(ad)
// 5
// ?
// 6
// const arr = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"];
// const result = arr[arr.length - 2]
// console.log(result)
// 7
// const arr = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// console.log(arr.length)

////////////// TASK 8 //////////////
// 1
// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// const numbers = arr3.filter(item => typeof item === 'number')
// console.log(numbers)
// 2
// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// const trueValues = arr3.filter(item => typeof item === 'boolean' && item === true)
// console.log(trueValues)
// 3
// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// const falseValues = arr3.filter(item => typeof item === 'boolean' && item === false)
// console.log(falseValues)
// 4
// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// const strings = arr3.filter(item => typeof item === 'string')
// console.log(strings)
////////////// TASK 8.1 //////////////
// 1
// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// const evenNumbers = numbers.filter(item => item % 2 === 0)
// console.log(evenNumbers)
// 2
// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// const oddNumbers = numbers.filter(item => item % 2 !== 0)
// console.log(oddNumbers)

////////////// TASK 9 //////////////
// 1
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// const arr = arr4.map(value => {
//   if (typeof value === 'number') {
//     return value + 10;
//   } else if (typeof value === 'string') {
//     return value + " is string";
//   } else {
//     return value + " is falcy value";
//   }
// });
// console.log(arr)
// 2
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// const result = arr4.filter(item => typeof item === 'number').reduce((acc, cur) => acc + cur, 0)
// console.log(result)
// 3
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// const trueValues = arr4.filter(item => item === true)
// console.log(trueValues)
// 4
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// const strings = arr4.filter(item => typeof item === 'string')
// console.log(strings)
// 5 
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// const falseValues = arr4.filter(item => item === false)
// console.log(falseValues)

////////////// TASK 10 //////////////
// 1 
// const person = {
//   name: 'Metin',
//   surname: 'Qurbanov',
//   age: 18,
//   city: 'Baku'
// };
// console.log(person);
// 2
// person.name = 'John';
// console.log(person);
// const obj = {
//   email: 'metin@gmail.com',
//   info: {
//       gender: 'Male',
//       loc: {
//           city: "Baku",
//           street: 'Nizami 22',
//           education: {
//               "uni name": "ADNSU",
//           }
//       }
//   }
// }
// // 3
// console.log(obj.info.gender);
// // 4
// console.log(obj.info.loc.city);
// // 5
// console.log(obj.info.loc.education["uni name"]);