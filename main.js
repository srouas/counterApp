
let counter = document.querySelector("#counter")

let num = 0;

function count(){
num++;

if(num >= 60){
window.clearInterval(timer)}

counter.innerText = `${num}`}

let timer = window.setInterval(count, 1000)
