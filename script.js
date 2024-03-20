const date=new Date()
//----------------------------->
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//------------------------------->
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



const box1=document.querySelector("#s1")
const box2=document.querySelector("#s2")

const box3=document.querySelector("#s3")
const box4=document.querySelector("#s4")
box1.innerText=months[date.getMonth()]
box2.innerText=date.getDate()

box3.innerText=days[date.getDay()]
box4.innerText=date.getFullYear()

