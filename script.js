/* ===============================
   AI PORTFOLIO - SCRIPT.JS
   Part 3A
=================================*/

// -----------------------------
// Typing Animation
// -----------------------------

const text = [
  "Prompt Engineer",
  "AI Automation Developer",
  "Computer Science Student",
  "Building Real-World AI Systems"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    let current = text[textIndex];

    if(!deleting){

        typing.innerHTML = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.innerHTML = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            textIndex++;

            if(textIndex >= text.length){

                textIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?40:90);

}

typeEffect();


// -----------------------------
// Navbar Shadow
// -----------------------------

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(7,11,23,.95)";

header.style.boxShadow="0 8px 30px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(255,255,255,.05)";

header.style.boxShadow="none";

}

});


// -----------------------------
// Scroll Progress Bar
// -----------------------------

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.width="0%";
progress.style.zIndex="99999";
progress.style.background="linear-gradient(90deg,#3B82F6,#06B6D4,#9333EA)";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});


// -----------------------------
// Fade Animation
// -----------------------------

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition=".8s";

observer.observe(section);

});


// -----------------------------
// Smooth Anchor Scroll
// -----------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
// Hover Glow

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(59,130,246,.25),
rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.05)";

});

});
/* Scroll To Top */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* Contact Form */

const form=document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for contacting me! I will get back to you soon.");

form.reset();

});