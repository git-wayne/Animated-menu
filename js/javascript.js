//cd "C:\Users\USER\Documents\VS code projects\JSscripts"
let nums =[54,56,65,123,0,8];
const [x,,z]=nums;
console.log(`${x}, ${z}`)
const object = {
    IDE: "Vs code",
    resources: ["MDN", "Youtube", "Marjin"],
    "21": 21
};
for (let key in object) {
    console.log(`${key} : ${object[key]}`);
}
const index= (array,i)=>{
    return array.slice(0,i);
    
};
console.log( index(nums,2));
console.log(object.resources[1]);
const items =[
    {name:"Bike", Price:100},
    {name:"Tv", Price:200},
    {name:"Album", Price:10},
    {name:"Book", Price:5},
    {name:"Phone", Price:500},
    {name:"Computer", Price:1000},
    {name:"Keyboard", Price:25}
]
items.forEach((item)=>{
    console.log(item.name);
})
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
function startTimer(){
    setTimeout(()=>alert("Hello"), 3000)
}
document.getElementById("start-button").addEventListener("click", startTimer);
function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds}`
    
    document.getElementById("clock").textContent= timeString;
}

updateClock();
setInterval(updateClock,1000);
const display = document.getElementById("display");
let timer = null;
let startTime =0;
let elapsedTime= 0;
let isRunning =false;

function start(){
    if(!isRunning){
        startTime = Date.now()- elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }    
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        isRunning=false;
    }

}
function reset(){
    clearInterval(timer);
     startTime =0;
     elapsedTime= 0;
     isRunning =false;

     display.textContent= "00:00:00:00";

}
function update(){
    const currentTime = Date.now();
    elapsedTime= currentTime-startTime;
    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000%60);
    let milliseconds = Math.floor(elapsedTime%1000/10 );

    hours= String(hours).padStart(2,"0");
    minutes= String(minutes).padStart(2,"0");
    seconds= String(seconds).padStart(2,"0");
    milliseconds= String(milliseconds).padStart(2,"0");

    display.textContent= `${hours}:${minutes}:${seconds}:${milliseconds}` ;

}

let regex = new RegExp("\bcat\b");
console.log(regex.test("con cat enate"));
console.log(document.getElementById("stopwatch-container").firstElementChild);
console.log(document.getElementById("stopwatch-container").children);
let sources = document.querySelectorAll("img");
sources.forEach(source=>console.log(source.src));

const newH1=document.createElement("h1");
newH1.textContent= "header";
newH1.style.backgroundColor= "yellow";
document.body.append(newH1) 

displayName = ()=>{
    const userName = document.getElementById("namefield").value;
    if( userName){
        document.getElementById("displayname").value= userName
    }else{
        alert("didnt enter username")
    }
    
}