AOS.init({
  duration:1000,
  once:true
});

/* GSAP */
gsap.from(".hero-title",{y:80,opacity:0,duration:1});
gsap.from(".hero-sub",{y:40,opacity:0,duration:1,delay:0.4});

/* 다크모드 */
const toggleBtn = document.getElementById("darkToggle");

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark")?"dark":"light"
  );
});

/* 모바일 메뉴 */
const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("navMenu");
const closeMenu=document.getElementById("closeMenu");
const overlay=document.getElementById("menuOverlay");

function openMenu(){
  nav.classList.add("active");
  overlay.classList.add("active");
}

function closeMenuFunc(){
  nav.classList.remove("active");
  overlay.classList.remove("active");
}

menuToggle.addEventListener("click",openMenu);
closeMenu.addEventListener("click",closeMenuFunc);
overlay.addEventListener("click",closeMenuFunc);

document.querySelectorAll("#navMenu a").forEach(link=>{
  link.addEventListener("click",closeMenuFunc);
});
