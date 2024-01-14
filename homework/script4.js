//    1
// let fullName = 'Metin Qurbanov Tariyel'
// const fullName2 = fullName.split('')
// console.log(fullName2);




//    2
// let fullName = 'Metin Qurbanov Tariyel'
// let FullName2 = fullName.split(' ')
// let FullName3 = ${FullName2[1]} ${FullName2[0]} ${FullName2[2]}
// console.log(FullName3);



 //    3
// let FullNameString = FullName2.join(' ')
// console.log(FullNameString);




// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
//     4   
// let tekrarSayi = arr.filter(reqem => reqem == 5).length
// console.log(tekrarSayi);



 //     5
// let sum =0
// let cem = arr.map(reqem => sum += reqem)
// console.log(sum);



// 6 
// bilmirem


//7
// let maxQiymet = Math.max(...arr);
// let tekrarSayi = arr.filter(reqem => reqem === maxQiymet).length;
// console.log(maxQiymet);
// console.log(tekrarSayi);




// 8
// let ad = 'Metin'
// let say = ad.length
// let result = arr.includes(say, arr)
// console.log(result);



// 9????????????????????????????????????????????????????????



// 10
// let enBoyuk = Math.max(...arr)
// let indexEnBoyuk = arr.indexOf(enBoyuk)
// console.log(enBoyuk);
// console.log(indexEnBoyuk);



// 11
// let number = 4
// for (let i=0;i<arr.length;i++){
// if(arr[i] === number){
// let indexOfFour = i
// console.log(indexOfFour);
// }
// }



// 12
// let number = 5;

// let firstIndex = arr.indexOf(number);
// let lastIndex = arr.lastIndexOf(number;

// console.log(firstIndex);
// console.log(lastIndex);




// 13
// let arr2 = arr.filter(number => number > 2)
// let ferq = arr.length - arr2.length
// console.log(arr2);
// console.log(ferq);





// 14
// let number = 7;
// let sumOfIndexes = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === number) {
//         sumOfIndexes += i;
//     }
// }

// console.log(${sumOfIndexes});

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

// 16
// function obyektler(arr2,name,t) {
//     return arr2.filter(obj => obj[name].startsWith(t));
// }
// let result = obyektler(arr2,'name','t')
// console.log(result);



// 17
// function obyektler(arr2,name,t){
//     return arr2.filter(obj => obj[name].startsWith(t) && obj[name].endsWith(t))
// }
// let result = obyektler(arr2,'name','t')
// console.log(result);



// 18
// function objects(arr2) {
//     return arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t')).reduce((sum, obj) => sum + obj.key, 0);
// }
// console.log(objects(arr2));