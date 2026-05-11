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
// premitive 
// number
let a = 10
// string
a="arun"
// boolean
a=true
// undefined
a=undefined
let b
// console.log(typeof(a));
console.log(typeof(b));
// nan
console.log("The a value is:"+a);
a=20
b="Three"
console.log(b*a);

// non premitive
//array
let arr = [10,20,30,40,50]
// index-> 0,1,2,3,4
// length-> no of element = array length 1
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);

// object
const person = {
    name:"arun",
    age:25,
    city:"cbe",
    course:["HTML","CSS","JS","NODE","MONGODB","EXPRESS"],
    family:{
        dad:"abc",
        mom:"xyz",
        siblings:{
            brother:"Nill",
            sister:"Nill"
        }
    }
}

console.log(person.name);
console.log(person.course[2]);
console.log(person.family.siblings.brother);


const datas = [
    {
        name:"arun",
        age:25,
        city:"cbe",
        course:["HTML","CSS","JS","NODE","MONGODB","EXPRESS"],
        family:{
            dad:"abc",
            mom:"xyz",
            siblings:{
                brother:"Nill",
                sister:"Nill"
            }
        }
    },
    {
        name:"bala",
        age:25,
        city:"cbe",
        course:["HTML","CSS","JS","NODE","MONGODB","EXPRESS"],
        family:{
            dad:"abc",
            mom:"xyz",
            siblings:{
                brother:"Nill",
                sister:"Nill"
            }
        }
    },
    {
        name:"bava",
        age:25,
        city:"cbe",
        course:["HTML","CSS","JS","NODE","MONGODB","EXPRESS"],
        family:{
            dad:"abc",
            mom:"xyz",
            siblings:{
                brother:"Nill",
                sister:"xxx"
            }
        }
    },
    {
        name:"deepa",
        age:25,
        city:"cbe",
        course:["HTML","CSS","JS","NODE","MONGODB","EXPRESS"],
        family:{
            dad:"abc",
            mom:"xyz",
            siblings:{
                brother:"Nill",
                sister:"Nill"
            }
        }
    }

]




console.log(datas[2].family.siblings.sister);
