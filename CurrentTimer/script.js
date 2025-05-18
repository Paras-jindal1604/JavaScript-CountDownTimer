
function timing(){
let timer = document.getElementById("root");
const now = new Date().toLocaleTimeString();
timer.innerHTML = now;
}

setInterval(timing, 1000);


let timer = document.getElementById("root");
timer.style.fontSize = "100px";
timer.style.height = "100vh";
timer.style.width = "100vw";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";




