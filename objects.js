var obj = {'a':50, 'b':58, 'c':56,'d':40, 'e':100, 'f':20};
var  arr=[];
// for (let key  in obj){
//     if (obj.hasOwnProperty(key)){
//         values = obj[key];
//         console.log(values);
//         arr.push(values)
//         console.log(arr);}
//     };
Object.entries(obj).map(data=>{
    let values = data[1];
    arr.push(values);
});
// var i=0;
// while (i<arr.length){
//     var j=0;
//     while (j<arr.length-1){
//         if (arr[j]>arr[j+1]){
//             temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp}
//         j++};
//     i++}
// arr = arr.slice(3,6)
// console.log(arr)
// keys_arr=[];
// Object.entries(obj).map(data=>{
//     keys = data[0]
//     values = data[1]
//     if (arr.includes(values)){
//         keys_arr.push(keys);}
//     })
// console.log(keys_arr);


// obj={"ball":"red","bat":4,"wickets":8,"ball":"green","bat":3};
// result = {};
// Object.entries(obj).map(data=>{
//     key = data[0]
//     value = data[1]
//     if(value in result==false){
//         result[key]=value
//     }
// })
// console.log(result);

// obj={'bijender':45,'deepak':60,'param':20,'anjali':30,'roshini':50};
// dict1 = sorted(dict_names.items(), key=lambda x: x[1])    
// print(dict1)    



// arr=[{"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"},{"seven":"7"}];
// arr_values=[]
// for (i in arr){
//     Object.entries(arr[i]).map(data=>
//         {
//             let values = data[1]
//             arr_values.push(values)
//         })
// }
// console.log(arr_values)
