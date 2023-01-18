function Clockstart(){
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
 console.log( hours,minutes,seconds);

 let hrs =document.getElementById("hrs");
 hrs.style.fontSize = "30px";
 hrs.innerText = hours;
 
 let min =document.getElementById("mins");
 mins.style.fontSize = "30px";
 mins.innerText = minutes;
 
 let secs =document.getElementById("secs");
 secs.style.fontSize = "30px";
 secs.innerText = seconds;

}
setInterval(()=>{
    Clockstart();

},1000)