let userCode=""

function login(){

userCode=document.getElementById("code").value

fetch("/login",{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify({code:userCode})

})

.then(r=>r.json())

.then(data=>{

if(data.success){

document.getElementById("credit").innerText=

"Credit : "+data.credit

}else{

alert("Invalid Code")

}

})

}

function useTool(tool){

fetch("/use-tool",{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify({

code:userCode,

tool:tool

})

})

.then(r=>r.json())

.then(data=>{

if(data.success){

document.getElementById("credit").innerText=

"Credit : "+data.credit

}else{

alert(data.message)

}

})

}