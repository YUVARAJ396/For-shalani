// Floating Hearts
for(let i=0;i<30;i++){
let heart=document.createElement("span");
heart.innerHTML="🖤";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(Math.random()*20+10)+"px";
heart.style.animationDuration=(Math.random()*6+6)+"s";
document.getElementById("hearts-bg").appendChild(heart);
}

// Love Counter
let startDate=new Date("2021-07-01");
let today=new Date();
let diff=Math.floor((today-startDate)/(1000*60*60*24));
document.getElementById("loveCounter").innerText=
"We have loved each other for "+diff+" days 🖤";

// Random Messages
const messages=[
"You are my calm in chaos 🖤",
"My heart chooses you daily 💍",
"Real love grows stronger with time.",
"You feel like home.",
"I would choose you again and again."
];

function generateMessage(){
let random=messages[Math.floor(Math.random()*messages.length)];
document.getElementById("dailyMessage").innerText=random;
}
generateMessage();

// Game
let heartsFound=0;
let itemsContainer=document.getElementById("items");

for(let i=0;i<12;i++){
let item=document.createElement("span");
item.className="item";
item.innerHTML=["🎁","🌹","🧸","💎","🍫","🌙"][Math.floor(Math.random()*6)];
item.onclick=function(){
if(Math.random()>0.6){
item.innerHTML="🖤";
heartsFound++;
if(heartsFound>=3){
document.getElementById("game").style.display="none";
document.getElementById("envelope").style.display="block";
}
}else{
item.style.opacity=0.3;
}
};
itemsContainer.appendChild(item);
}

function openLetter(){
document.getElementById("envelope").style.display="none";
document.getElementById("letter").style.display="block";
}

function openSurprise(){
document.getElementById("letter").style.display="none";
document.getElementById("surprise").style.display="block";
}

function openProposal(){
document.getElementById("surprise").style.display="none";
document.getElementById("proposal").style.display="block";
}

function moveNo(){
let btn=document.getElementById("noBtn");
btn.style.top=Math.random()*(window.innerHeight-100)+"px";
btn.style.left=Math.random()*(window.innerWidth-100)+"px";
}

// YES Sparkle
function sayYes(){
for(let i=0;i<60;i++){
let sparkle=document.createElement("div");
sparkle.style.position="fixed";
sparkle.style.width="6px";
sparkle.style.height="6px";
sparkle.style.background="gold";
sparkle.style.left=Math.random()*100+"vw";
sparkle.style.top=Math.random()*100+"vh";
sparkle.style.borderRadius="50%";
sparkle.style.boxShadow="0 0 10px gold";
document.body.appendChild(sparkle);
setTimeout(()=>sparkle.remove(),1000);
}

setTimeout(()=>{
document.body.innerHTML=
"<div style='display:flex;justify-content:center;align-items:center;height:100vh;background:#000;flex-direction:column;'>" +
"<h1 style='color:#d4af37;font-size:55px;text-shadow:0 0 30px gold;'>Love You Shalini 🖤</h1>" +
"<p style='color:white;font-size:22px;'>Thanks for coming into my life 💍</p>" +
"</div>";
},800);
}

// Easter Egg
document.body.addEventListener("dblclick",function(){
alert("Hidden Message: You are my forever surprise 🖤");
});
