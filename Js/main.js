// // console.log("Hello")
// // alert("Hello Js")

// // var
// // console.log(10);
// // console.log(a);
// // var declaration type
// // a->variable
// // = -> assignment Operator
// // 10 -> value
// // var a = 10
// //console.log(a);
// // var b =20
// // a=b
// // a=50
// // var a = 70
// // console.log(a);
// //let
// // console.log(c);
// // let c=20
// // c=80
// // console.log(c);

// // const
// // const d = 50
// // d = 60
// // console.log(d);

// // {
// //     let a = 10
    
// // }

// // console.log(a);

// // operators
// // Arithmetic 
// // +,-,*,/,%,++,--
// a=20
// b=10
// console.log(a+b); //30
// console.log(a-b); //10
// console.log(a*b); //200
// console.log(a/b);//2
// console.log(a%b);//0
// console.log(a++);//20
// //a=21
// console.log(++a);22
// //a=22
// console.log(a--);22
// //a=21
// console.log(--a);20

// // (),*,/,%,+,-
// console.log((10*2)/5+20-3*(10-2));

// // 20/5+20-3*8
// //20/5+20-24
// //4+20-24
// 0


// // Comparison
// // >,<,<=,>=,==,===,!=
// console.log(10>5);
// console.log(10<5);
// console.log(10>=10);
// console.log(10<=10);
// console.log(10=="10"); //True string
// console.log(10==="10"); //False

// // logical
// // && ,||,!
// console.log(10>5 && 10==10 && 10==5);

// console.log(10>5 || 10!=10 || 10==5);

// console.log(10!=20);

// // Assignment
// //=,+=,-=,*=,/=,%=
// c= 20
// c*=10
// console.log(c);

// // ternary
// let age = 17

// console.log(age>=18?"Eligible to vote":"Not Eligible");


// Datatypes
// // premitive 
// // number
// let a = 10
// // string
// a="arun"
// // boolean
// a=true
// // undefined
// a=undefined
// let b
// // console.log(typeof(a));
// console.log(typeof(b));
// // nan
// console.log("The a value is:"+a);
// a=20
// b="Three"
// console.log(b*a);

// // non premitive
// //array
// let arr = [10,20,30,40,50]
// // index-> 0,1,2,3,4
// // length-> no of element = array length 1
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[2]);

// // object
// const person = {
//     name:"arun",
//     age:25,
//     city:"cbe",
//     course:["HTML","CSS","JS","NODE","MONGODB","EXPRESS"],
//     family:{
//         dad:"abc",
//         mom:"xyz",
//         siblings:{
//             brother:"Nill",
//             sister:"Nill"
//         }
//     }
// }

// console.log(person.name);
// console.log(person.course[2]);
// console.log(person.family.siblings.brother);


// const datas = [
//     {
//         name:"arun",
//         age:25,
//         city:"cbe",
//         course:["HTML","CSS","JS","NODE","MONGODB","EXPRESS"],
//         family:{
//             dad:"abc",
//             mom:"xyz",
//             siblings:{
//                 brother:"Nill",
//                 sister:"Nill"
//             }
//         }
//     },
//     {
//         name:"bala",
//         age:25,
//         city:"cbe",
//         course:["HTML","CSS","JS","NODE","MONGODB","EXPRESS"],
//         family:{
//             dad:"abc",
//             mom:"xyz",
//             siblings:{
//                 brother:"Nill",
//                 sister:"Nill"
//             }
//         }
//     },
//     {
//         name:"bava",
//         age:25,
//         city:"cbe",
//         course:["HTML","CSS","JS","NODE","MONGODB","EXPRESS"],
//         family:{
//             dad:"abc",
//             mom:"xyz",
//             siblings:{
//                 brother:"Nill",
//                 sister:"xxx"
//             }
//         }
//     },
//     {
//         name:"deepa",
//         age:25,
//         city:"cbe",
//         course:["HTML","CSS","JS","NODE","MONGODB","EXPRESS"],
//         family:{
//             dad:"abc",
//             mom:"xyz",
//             siblings:{
//                 brother:"Nill",
//                 sister:"Nill"
//             }
//         }
//     }

// ]




// console.log(datas[2].family.siblings.sister);


// conditional statement
// if
// let age = 14
// if(age>18){
//     console.log("Eligible to vote");    
// }
// // if else
// if(age>18){
//     console.log("Eligible to vote");    
// }else{
//     console.log("Not Eligible");
    
// }
// // else if
// if(age<13){
//     console.log("child");
    
// }
// else if(age>19){
//     console.log("Adult");
    
// }
// else{
//     console.log("Teeanger");
    
// }
// // nested if else
// ug = 70
// hsc=66
// sslc=70

// if(ug>=70){
//     if(hsc>=70){
//         if(sslc>=70){
//             console.log("Eligible to interview");
            
//         }else{
//             console.log("Rejected Based on sslc Mark");    
//         }
//     }else{
//         console.log("Rejected Based on HSC Mark");
//     }
// }else{
//     console.log("Rejected Based on UG Mark");
    
// }
// switch
// let chooseDay = "Friday"

// let thisDay = new Date()
// console.log(thisDay.getDay());
// let day = thisDay.getDay();


// switch(day){
//     case 1:
//         console.log("Class on Monday");
//         break
//     case 2:
//         console.log("Class on Tuesday");
//         break   
//     case 3:
//         console.log("Class on Wednesday");
//         break
//     case 4:
//         console.log("Class on Thursday");
//         break 
//     case 5:
//         console.log("Class on Friday");
//         break 
//     case 6:
//         console.log("Class on Saturday"); 
//         break
//     default:
//         console.log("Class on Sunday"); 
// }



// looping statement
// while
// while(condition){
//     // statement
// }
// let count =0
// while(count<11){
//     if(count%2==0){
//         console.log(count +"is Even");        
//     }
//     else{
//         console.log(count +"is Odd");
//     }
//     count+=1
// }


// let count =1
// while(count<=10){
//     console.log("3","*",+ count +"="+(3*count));    
//     ++count
// }


// B
// Ba
// Bav

// // array 
// let arr = [20,40,60,80,100]

// // console.log(arr[0]);
// // console.log(arr[1]);
// let a =0
// let total =0
// while(a<arr.length){
//     total +=arr[a]   //20+40 = 60+60 = 120 +80 = 200 +100 =300 
//     a++
// }
// console.log(total);

// total of Array

//do while,,,
// do{
//     console.log("Do while");
    
// }while(10>15)
//for
// for(let x=10;x>=1;x--){
//     console.log(x);
    
// }
// String
let name  = "Bava"
output = ""

// 4
// name[3] = 
// for(let x =name.length-1;x>=0;x--){
//     output+=name[x] 
   
    
// }
//  console.log(output);
// array
// forof
let array = [10,20,30,40,50]
// for(let i of array){
//     console.log(i);    
// }
// for in
// for(let i in array){
//     console.log(array[i]);    
// }
// foreach
// array.forEach((item)=>console.log(item))
// map
// array.map((item)=>console.log(item))
// let total=0
// array.forEach((item)=>total+=item)
// console.log(total);

// // reduce
// const tot = array.reduce((sum,acc)=>(sum+acc))
// console.log(tot);

// filter
for (let x of array){
    if(x%3===0){
        console.log(x);
        
    }
}

console.log(array.filter((item)=>(item%3===0)));


