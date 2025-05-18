

// timer function 


let date2 = new Date("2028-07-21T00:00:00");

function timer(){

let date1 = new Date();

let date = date2 - date1;

let days = Math.floor((date/(1000*60*60*24)));

let hours = Math.floor((date/(1000*60*60)%24));

let minutes = Math.floor((date/(1000*60)%60));

let seconds = Math.floor((date/(1000)%60));

// document.querySelector(".time").innerHTML = `${days} days,  ${hours} hours,  ${minutes}  minutes,  ${seconds} seconds  to go`;

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;


}

setInterval(timer,1000);


