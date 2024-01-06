const obj = [
  {
    id: 1,
    name: "mehemmed",
    surname: "kerimov",
    age: 18,
    address: {
      street: "0",
      city: "abseron",
      country: "azerbaycan",
    },
  },
  {
    id: 1,
    name: "mehemmed",
    surname: "kerimov",
    age: 18,
    address: {
      street: "1",
      city: "abseron",
      country: "azerbaycan",
    },
  },
  {
    id: 2,
    name: "metin",
    surname: "qurbanov",
    age: 19,
    address: {
      street: "2",
      city: "baku",
      country: "azerbaycan",
    },
  },

  {
    id: 3,
    name: "heyder",
    surname: "veliyev",
    age: 124,
    address: {
      street: "3",
      city: "gence",
      country: "azerbaycan",
    },
  },
  {
    id: 4,
    name: "abbas",
    surname: "jeferov",
    age: 09,
    address: {
      street: "4",
      city: "yesentiki",
      country: "rusiya",
    },
  },
  {
    id: 4,
    name: "metin",
    surname: "qurbanov",
    age: 166,
    address: {
      street: "6",
      city: "a",
      country: "ab",
    },
  },
  {
    id: 5,
    name: "nihad",
    surname: "mehdiyev",
    age: 22,
    address: {
      street: "7",
      city: "a",
      country: "ab",
    },
  },
  {
    id: 9,
    name: "omer",
    surname: "bagirov",
    age: 44,
    address: {
      street: "11",
      city: "a",
      country: "ab",
    },
  },
  {
    id: 6,
    name: "resah",
    surname: "huseynov",
    age: 28,
    address: {
      street: "8",
      city: "a",
      country: "ab",
    },
  },

  {
    id: 7,
    name: "rafiq",
    surname: "abasov",
    age: 23,
    address: {
      street: "9",
      city: "a",
      country: "ab",
    },
  },

  {
    id: 8,
    name: "elin",
    surname: "qaagayev",
    age: 31,
    address: {
      street: "10",
      city: "a",
      country: "ab",
    },
  },
];
// const result = obj.reduce((acc,cur,index) => acc + index, 1)
// console.log(result);(indexlerinin cemi)

// const numbers = obj.sort((a, b) => a.age-b.age)
// console.log(numbers);(yasa gore siralama)

// const places = obj.sort((a,b) => b.street-a.street )
// console.log(places);(srteete gore siralama)

// const result= obj.reverse()
// console.log(result);(ilk ile sonun yerini deyisir)

// const ad= obj.filter((item, index)=> item.name.length >=6)
// console.log(ad);(adin uzunlugu 6dan boyuk olanlkari cixarir)

// const first = obj.find ((item, index)=> item.age >=25)
// console.log(first);(yasi 25den boyuk olanlar)

// const result1 = obj.map((item) => 'myAge' +' '+ item.age)
// console.log(result1);()
// const result = obj.map((item)=> obj.length -1)
// console.log(result);
// let user = 'metin'
//  const result = user.slice(0, 4).toLowerCase() + user.slice(-1).toUpperCase()
//  console.log(result);
//  const result1 = user.slice(1, 5).toUpperCase()
//  console.log(result1);
//  const result2 = user.slice(0,2).toLowerCase() + user.slice(2,3).toUpperCase() + user.slice(-2).toLowerCase()
//  console.log(result2);
// let user = "metin qurbanov";
// const result =
//   user.slice(0, 1).toUpperCase() +
//   user.slice(1, 5) +
//   " " +
//   user.slice(6, 7).toUpperCase() +
//   user.slice(-7);
// console.log(result);
// const result1 =
//   user.slice(0, 5).toLowerCase() + " " + user.slice(-8).toUpperCase();
// console.log(result1);
// let user = 'metin qurbanov'
// const result = user.split('e')
// console.log(result);
// let user2 = 'metin,qurbanov'
// const result2 = user2.split(',')
// console.log(result2);
// const user3 = user.split('')
// console.log(user3);
// const user4 = user.split(' ')
// console.log(user4);

const studentsArr = ['Yusif', 'Reshad', 'Nihad', 'Nezire', 'Metin', 'Heyder', 'Rafiq', 'Eli', 'Nizam', 'Xeyale', 'Abbas', 'Anar', 'Ulfat']
studentsArr.unshift('Yusif')
const result5 = studentsArr.map((item)=> `name: ${item}`).join(',')
console.log(result5);