// console.log("Hello World!");

// // Variable and Values
// var myName = 'Nikhil Singh';
// console.log(myName);
// var myAge = 21;
// console.log(myAge);

// // Type of variables
//  console.log(typeof(myName),typeof(myAge));

//  Expression and Operators
// Arthimetic operator
// console.log(3+4,5-2,3*4,8/2);
// console.log("Remiander of two number "+ 81%8);
// var x=6;
// var y=6;
// console.log("x and y are equal or not"+ x==y);//It is giving false because we using + operator for concatination a string and result. 

// // Increment and Decrement Operator
// var x=5;
// var y=x++;
// console.log(x,y);
// var z=++x;
// console.log(x,z);

// Conditional (ternary) operator 
// var age=17;
// if(age>=18)
// {console.log("Elegible to Vote");}
// else
// {console.log("Not Elegible");}

// var Age=19;
// console.log((Age>=18)?"You can Vote":"You can't Vote");

// Switch Statement
// var area="rectangle";
// var l=5,b=4,r=3;
// switch(area)
// {
//     case "circle":
//         console.log("area of circle: "+ 3.142*r**2);
//         break;
//     case "rectangle":
//         console.log("area of triangle: "+(l+b));
//         break;
//     default:
//         console.log("Please enter valid data");        
// }

//  do-while loop
// var num=10;
// do{
//     console.log(num);
//     num++;
// }while(num<=0);

// while loop
// var Num=10;
// while(Num<=0)
// {
//     console.log(Num);
//     Num++;
// } 
// for(var num=1;num<=10;num++)
// {
//     console.log(num);
// }

// ES6 2015 features The Modern Javascript
// LET v/s CONST v/s VAR

//    var => Function Scope 
//     (Can be accessable inside the whole function )
//    let and const => Block scope
//    (Effective till the starting curly bracess to clossing bracess)

//  var myName="Nikhil Kumar";
//  console.log(myName);
//  myName="Nikhil Singh";
//  console.log(myName);

//  let myName="Nikhil Kumar";
//  console.log(myName);
//  myName="Nikhil Singh";
//  console.log(myName);

//  const myName="Nikhil Kumar";
//  console.log(myName);
//  myName="Nikhil Singh";
//  console.log(myName);
//  IF A VARIABLE IS CONST THEN IT WILL NOT BE MODIFIED

// function biodata()
// {
//     var myFirstName="Nikhil";
//     console.log(myFirstName);
// if(true)
// {
//     var myLastName="Singh";
//     console.log("1 "+ myLastName);
//     console.log("1 "+ myFirstName);
// }
// console.log("2 "+myFirstName);
// }
// biodata();

// function biodata()
// {
//     let myFirstName="Nikhil";
//     console.log(myFirstName);
// if(true)
// {
//     let myLastName="Singh";
//     console.log("1 "+ myLastName);
//     console.log("1 "+ myFirstName);
// }
// console.log("2 "+myFirstName);
// console.log("2 "+myLastName);
// }
// biodata();

// Template Literals(template string)

// var num=8;
// for(var i=1;i<=10;i++)
// {

    // console.log(num +'*'+ i +' = '+  num*i);
    // console.log(`${num} * ${i} = ${num*i}`);

// }

// Default Parameters
// function mult(a,b)
// {
//   return a*b;
// }
// console.log(mult  (5,4)); 

// Array
// let book=["Math","Physis","Bio","Computer"];
// console.log(book);
// console.log(book.length);
// add value at end
// book.push("Hindi");

// // add value at first
// book.unshift("Social Studies"); 
// console.log(book);

// // split array from any index
    // splice(index, count)
// book.splice(2,5);
// console.log(book);

// return subarray from start index to end index
// slice(s_index,end_index);
// let book1=book.slice(2,5);
// console.log(book1);

// Empty an array
// book.length=0;

// // index of any element
// let ind=book.indexOf("Bio");
// console.log(ind);

// Check is array or not
// console.log(Array.isArray(ind));

// // split array by any character
// let text="My name is Nikhil Singh";
// let words=text.split(' ');
// console.log(words);

// // merge an array into sentence
// let sentence=words.join('-');
// console.log(sentence);

// // merge two arrays
// let book=["hindi","english","maths"];
// let book1=["Physics","Chemistry"];
// book1=book.concat(book1);
// console.log(book1);

// 2D array
// let book=["maths","physics","Social","Biology"];
// let pages=[[26,13],[12,31],[21,26],[45,35]];
// for(i=0;i<book.length;i++)
// {
//    console.log(`Element ${i} is ${book[i]}\n`);
// }

// book.forEach(myfun);

// function myfun(value)
// {
//   console.log(value);
// }

// -----------------------------------------------------
// Function
// let car="Audi"; //Global variable

// function add(a,b,c)
// {
//   return a+b+c;
// }

// let res=add(1,3,5);
// // document.write(res);
// console.log(res);

// Anonymous funnction
// // which does not have any name
// let show=function (){
//   console.log("Hello World!");
// };

// show();

// // If we want any thing execute after 3 sec do we use 
// let fun=function ()
// {
//   console.log("kuch der baad!");
// };
// // setTimeout(dikhao,6000);

// setTimeout(fun,600);

// Immediately invoked function

// // auto invovked
// (function show()
// {
//   console.log("Hello World!");
// })();

// function show()
// {
//   console.log("Ussage auto revoked ");
// }
// show();

// -------------------------------------------
// // Object
// let person={
//   firstName:'Nikhil',
//   lastName:'Singh'
// };

// console.log(person.firstName);
// console.log(person[lastName]);







