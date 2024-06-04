"use client";
import React, { useState } from 'react';

// *** this is a arrow function

// const page = () => {
//   return (
//     <div>hello kese ho aap</div>
//   )
// }

// *** this is just a function if i simply create a function page() then it also work like the upper code

// function page(){
//   return <h1>hello</h1>
// }

// *** for print variable in this jsx code {curly braces} are use. jsx is nothing but it is a combination of javascript and html

// const page = () => {
//   var h = "hello boy!"
//   // const a = 10
//   // a = 20 ** we know this is not possible to change constant value
//   return (
//     <div>{h}</div>
//   )
// }


/*
real dom and virtual dom
real dom = window -> html -> body -> div -> #j
this is dom tree. if i want to update #j it will update full page {full tree of real dom} 
in virtual dom it will make real dom's copy and compare the real and virtual dom and update only that part which will be changed
*/

// ** you do not return more than one element in this function like this 
// const page = () => {
//   return (
//     <div>hello kese ho aap</div>
//     <div>hello kese ho aap</div>
//   )
// }
// ** we will use fragments for this

const page = () => {
  const [name, setname] = useState('Navkirat')
  // name is variable and setname is the method to update value of variable

  const change = () => {
    console.log(name);
    setname('Navkirat Singh')
    console.log(name);
  };

  return (
    <>
      <h1 className="font-bold text-xl">Gud Morning {name}</h1>
      <button onClick={() => {
        change();
      }} className="bg-gray-400 px-5 py-2 rounded mt-5 text-white font-bold">Update</button>
    </>
  )
}

// ** in this react we use className
// the code written above not change the value of name because this is not the way to make variable in react the way to make variable is (use-state-hook)

// ** to make full webpage we dont make in page.js full website we use componenets so we make a folder named 'Components' and in this we make file like Header.js and import this file by import Header from "@/Components/Header"

export default page