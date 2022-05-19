




 let str1 ="asdsadasddddddrew";
// let arr = Array.from(str1.split('').reduce((sum, el)=>{
//     sum.set(el, (sum.get(el) || 0) +1);
//     return sum
// },new Map()))
// console.log(arr)

  const newArr =  Array.from(str1).reduce((sum,el)=>{
    sum.set(el,(sum.get(el) || 0 ) +1);

     return sum
 },new Map())
 console.log(newArr)

