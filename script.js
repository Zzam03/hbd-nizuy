setInterval(() => {

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=Math.random()*20+20+"px";

heart.style.animation="fall 5s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

},500);

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-10vh);

opacity:1;

}

100%{

transform:translateY(110vh);

opacity:0;

}

}

`;

document.head.appendChild(style);