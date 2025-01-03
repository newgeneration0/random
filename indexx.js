// let arr=[1,2,3,2,4,5,2,6,7,8,2,9]
// let mapped = arr.map((value)=>{
//     return value*2
// })
// console.log(mapped)

// let filtered = arr.filter((value)=>{
//     return value == 2
// })
// console.log(filtered)

// for(let i=1; i<=12; i++){
//     console.log(i*2)
// }

// for(let i=1; i<=10; i++){
//         if(i%2==1){
//             console.log(i) 
//         }
// }
// function namee(a, b){
//     return a+b
// }
// console.log(namee(6, 7))

// const arr =[2, 10, 100]

// function maxarr(arr){
//     return Math.max(...arr);
// }
// console.log(maxarr(arr))

// const arr = [1,2,3,4,5,6,7,8,9,10]

// let filtered =arr.filter((number)=>{
//     return number%2===0
// })
// console.log(filtered)

// for(let i=1; i<=12; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// let str="omo"

// const rev = (str)=>str.split('').reverse().join('')
// console.log(rev(str))

// const rever =()=>{
//     return str=== str.split('').reverse().join('')
// }
// console.log(rever())

// let arr=[1,2,3,4,5,6,7,8,9,10]

// let even = arr.filter((number)=>{
//     return number%2===0
// })
// console.log(even)

// let num = 3;

// function prime(num){
//     if (num<=1){
//         return false;   
//     }
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num%i===0){
//             return false;
//         }else{
//             return true
//         }
//     }
// }
// console.log(prime(num))

// let numb = 5;

// function factorial(numb){
//     if(numb===0 || numb===1){
//         return 1;
//     }else{
//         return numb * factorial(numb-1)
//     }
// }
// console.log(factorial(10))


// const factorial=number=(number)=>{
//     if(number===0 || number===1){
//         return 1;
//     }else{
//         return number * factorial(number-1)
//     }
// }
// console.log(factorial(0))

// for(let i=1; i<=12; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// const arr=[1,2,3,4,5,6,7,8,9,10,11,12]

// const even = arr.filter((value)=>{
//     if(value%2===0){
//        return value 
//     }
// })
// console.log(even)
// const str ="omo"

// function rever(str){
//     if(str==str.split('').reverse().join('')){
//         return true;
//     }else{
//         return false
//     }
// }
// console.log(rever(str))

function factorial(number){
    if(number ===1 || number ===0){
        return 1
    }else{
        return number*factorial(number-1)
    }
}
console.log(factorial(10))
