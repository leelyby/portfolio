/* AOS */
AOS.init({
  duration:1000,
  once:true
});

/* GSAP HERO 애니메이션 */
gsap.from(".hero-title",{
  y:80,
  opacity:0,
  duration:1.2,
  ease:"power3.out"
});

gsap.from(".hero-sub",{
  y:40,
  opacity:0,
  duration:1,
  delay:0.5
});

/* 다크모드 */
const toggleBtn = document.getElementById("darkToggle");

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme","light");
  }
});

/* 모바일 메뉴 */
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

menuToggle.addEventListener("click",()=>{
  nav.classList.toggle("active");
});
