// const obj1 = {
//     id: 12,
//     firstname: 'Metin',
//     surname: 'qurbanov',
//     age: 18,
//     position: 'bscjhsa',
//     address: {
//         street: 'gunesli',
//         city: 'baku',
//     },
//     info: {
//         uni: 'adnsu',
//         qualification: 'informasiya tehlukesizliyi',
//         isadmin: true,
//     },
// }
// obj1.firstname = 'abbas'
// obj1.surname = 'jafarov'
// obj1.age = 17
// obj1.position = 11111
// obj1.address.street = 'razin'
// obj1.address.city = 'baku1'
// obj1.info.uni = 'aztu'
// obj1.info.qualification = 'informasiya tehlukesizliyi1'
// obj1.info.isadmin = false
// delete obj1.info.isadmin
// delete obj1.position
// console.log(obj1.firstname);
// console.log(obj1.surname);
// console.log(obj1.age);
// console.log(obj1.position);
// console.log(obj1.address.city);
// console.log(obj1.address.street);
// console.log(obj1.info.uni);
// console.log(obj1.info.qualification);
// console.log(obj1.info.isadmin);
// console.log(obj1.id*obj1.age);
// console.log(obj1.id+obj1.age);
// const arr1 = [1, 'metin', 873n, undefined, null, true]
// console.log(arr1[1]);
// console.log(arr1.at(1));
// console.log(arr1[arr1.length -2]);
// console.log(arr1.at(-2));
// const data = [1,'metin', true, undefined, null, 898373n,]
// console.log(data);
// data.push(2, 'abbas',false,undefined,null,6534n)
// data.pop()
// data.pop()
// data.unshift(3,'nihat',false,undefined,null,111n)
// data.shift()
// console.log(data);
const students = [
  {
    id: 1,
    name: "Metin",
    surname: "qurbanov",
    age: 18,
  },
  {
    id: 2,
    name: "heyder",
    surname: "veliyev",
    age: 25,
  },
  {
    id: 3,
    name: "rafiq",
    surname: "memmedzade",
    age: 21,
  },
  {
    id: 4,
    name: "abbas",
    surname: "jafarzade",
    age: 17,
  },
  {
    id: 5,
    name: "yusif",
    surname: "zeynalli",
    age: 28,
  },
  {
    id: 6,
    name: "reshad",
    surname: "bagirov",
    age: 30,
  },
  {
    id: 7,
    name: "nihad",
    surname: "melikov",
    age: 18,
  },
  {
    id: 8,
    name: "nezire",
    surname: "eliyeva",
    age: 23,
  },
  {
    id: 9,
    name: "nihad",
    surname: "ehmedli",
    age: 22,
  },
  {
    id: 10,
    name: "omer",
    surname: "huseynli",
    age: 20,
  },
];
// students.map((item, index) => console.log(item.name,item.age))
// // students.map((item, index) => console.log(item.age))
// students.map((item, index) => console.log(item.age + item.id))
// students.map((item, index) => console.log(item.id + index))
// const result = students.filter(item => item.age >22 && item.age < 26)
// const result=students.filter(item => item.age >22 && item.age < 26)
// console.log(result);
// let sum = 1
// const result=students.map((item) => sum += item.age)
// const result=students.map((item) => sum = sum + item.age)
// console.log(result);
// console.log(sum);
// const result=students.map((item) => sum = sum * item.id)
// console.log(sum);
// const result1=students.map((item)=> sum-= item.age)
// console.log(sum);
const result = students.find((item) => item.name == "nihad");
console.log(result);
const result1 = students.findLast((item) => item.name == "nihad");
console.log(result1);
