import React, { Component } from 'react';


class App extends Component {
  render() {
    const computers =[
      {name:'Apple',ram:15 },
      {name:'Acer',ram:20 },
      {name:'HP',ram:10 },
    ]
    console.log('-------------------------------------------')
console.log('using for')
for (var i=0;i<computers.length;i++){
  console.log(computers[i])
}
console.log('-------------------------------------------')
console.log('using forEach Function Helper')
  let sum = 0  
computers.forEach((computer)=>{
   sum+=computer.ram
})
console.log(sum)
console.log('-------------------------------------------')
console.log('using Map Function Helper')

console.log(computers.map((computer)=>{
  return computer.ram + ' ' +computer.name
}))
console.log('-------------------------------------------')
console.log('using Find Function Helper')

console.log(computers.find((computer)=>{
  return computer.ram ===10
}))
console.log('-------------------------------------------')
console.log('using Filter Function Helper')

console.log(computers.filter((computer)=>{
  return computer.ram > 10
}))
console.log('-------------------------------------------')
console.log('using Every Function Helper')
console.log(computers.every((computer)=>{
  return computer.ram >10
}))
console.log('-------------------------------------------')
console.log('using Some Function Helper')
console.log(computers.some((computer)=>{
  return computer.ram >10
}))
const username="FRIOUI"
const lastname="Meher"
const fields =[username,lastname]
var formField=fields.every((field)=>{
  return field.length > 4
})
if(formField){
  console.log('I will allow you to submit the form')
}
else{
  console.log('something went wrong hereS')
}

const numbers=[1,2,3,4,5,6]
console.log('-------------------------------------------')
console.log('using Reduce Function Helper')
let Sum = numbers.reduce((sum,number)=>{
  return sum+number
},0);
console.log(Sum)
const primaryColors=[
{color:'red'},
{color:'yellow'},
{color:'blue'},
]
console.log('-------------------------------------------')
console.log('other exemple for using Reduce Function Helper')
console.log(primaryColors.reduce((previous,primaryColor)=>{
  previous.push(primaryColor.color)
  return previous
},[]))

console.log('-------------------------------------------')
console.log('best exemple for using Reduce Function Helper')

const BalacedParen =")("

let arraysBalanced = BalacedParen.split('')

var isBalanced =arraysBalanced.reduce((previous,arrayBalance)=>{
  if(previous<0){return previous}
  if(arrayBalance==='('){
    previous++
  }
  if(arrayBalance===')'){
    previous--
  }
  return previous
},0)

if(isBalanced===0){
  console.log('yes is balanced ')
}else{
  console.log('not balanced')
}








    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;